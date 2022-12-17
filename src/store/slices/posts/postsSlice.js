import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers:{
		addComments(state,{payload}){
			const postidx = state.findIndex(post => post.id === payload.postId)
			state[postidx].comments.push({
				id: new Date().getTime().toString(),
				body: payload.body,
				userName: payload.userName,
				timeAgo: new Date().getMinutes() + 'm ago',
			})
		},
		
		createPost(state,{payload}){
			const {userName,id,url,desc} = payload

			const post = {
				id: id,
				img: url,
				userName: userName,
				description: desc,
				likesCount: Math.floor(Math.random() * 1000),
				timeAgo: new Date().getMinutes() + 'minutes ago',
				comments: []
				}

			state.unshift(post)
		},
		deletePostFromAllPosts(state,{payload}){
			return [...state.filter(post => post.id !== payload)]
		}
	},
	extraReducers:{
		[fetchPosts.fulfilled]: (state,{payload}) => {
			return [...payload]
		}
	}
})

export const selectPosts = state => state.posts

export const {addComments,createPost,deletePostFromAllPosts} = postsSlice.actions

export const postsReducer = postsSlice.reducer