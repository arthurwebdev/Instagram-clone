import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts',
	async function(){
		const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
		const responseComments = await axios.get('https://jsonplaceholder.typicode.com/comments')

		const posts = responsePosts.data
		const comments = responseComments.data

		const data = posts.map(post => ({
			id: post.id,
			img: post.url,
			userName: post.title.slice(0,post.title.indexOf(' ')),
			description: post.title.slice(post.title.indexOf(' ') + 1),
			likesCount: Math.floor(Math.random() * 1000),
			timeAgo: Math.floor(Math.random() * 30)+10 + 'minutes ago',
			comments: comments.filter(comment => comment.postId === post.id)
									.map(comment => ({
										id: comment.id,
										userName: comment.name.slice(0,comment.name.indexOf(' ')),
										body: comment.body,
										timeAgo: new Date().getMinutes() + 'm ago',
									}))				
		}))

		return data
	}
)