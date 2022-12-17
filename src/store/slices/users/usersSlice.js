import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";


const usersSlice = createSlice({
	name: 'users',
	initialState: {
		usersData: [],
		currentUser: null
	},
	reducers:{
		toggleCurrentUser(state,{payload}){
			const currentUser = state.usersData.find(user => ((user.userName === payload.login || user.email === payload.login) && user.password === payload.password))
			return {
				...state,
				currentUser : {...currentUser}
			}
		},
		logOut(state){
			return {
				...state,
				currentUser: null
			}
		},
		addPostInUserData(state,{payload}){
			const {currentid,id,url,desc} = payload
			const idx = state.usersData.findIndex(el => el.id === currentid)

			const post = {
				id: id,
				img: url,
				description: desc,
				likesCount: Math.floor(Math.random() * 1000),
				timeAgo: new Date().getMinutes() + 'minutes ago',
				comentsCount: Math.floor(Math.random() * 500),
				comments: []
			}

			state.currentUser.posts.unshift(post)
			state.usersData[idx].posts.unshift(post)

		},
		deletePost(state,{payload}){
			const userId = payload.slice(payload.indexOf('_') + 1)
            const userIdx = state.usersData.findIndex(user => user.id === userId)
            
			state.currentUser.posts = state.currentUser.posts.filter(post => post.id !== payload)
         state.usersData[userIdx].posts = state.usersData[userIdx].posts.filter(post => post.id !== payload)
			
		},
		addMessage(state,{payload}){
			const {currentId, text} = payload
			const index = state.usersData.findIndex(user => user.id === currentId)
			let answer = ''

			switch(text.toLowerCase()){
				case 'what are you doing?':
					answer = 'I coding, please do not disturb me!!!!'
					break
				case 'hello':
					answer = 'Hello'
					break
				case 'how are you?':
					answer = "I'm fine thanks, and you?"
					break
				case 'good':
					answer = "That's nice"
					break
				default:
					answer = "I don't understande"
					break
			}

			const message = [
				{
					id: new Date().getTime() + 'user',
					message: text,
					me: 'user',
					reaction: false
				},
				{
					id: new Date().getTime() + 'bot',
					message: answer,
					me: 'bot',
					reaction: false
				}
			]

			state.currentUser.messenger.push(...message)

			state.usersData[index].messenger.push(...message)

		},
		addReaction(state,{payload}){
			const {currentId, reaction} = payload
			const index = state.usersData.findIndex(user => user.id === currentId)

			const message = [
				{
					id: new Date().getTime() + 'user',
					message: reaction,
					me: 'user',
					reaction: true
				},
				{
					id: new Date().getTime() + 'bot',
					message: reaction,
					me: 'bot',
					reaction: true
				}
			]

			state.currentUser.messenger.push(...message)
			state.usersData[index].messenger.push(...message)
		},
		addNotification(state,{payload}){
			const {id, text, userImg, userName, currentId} = payload
			if(typeof id === 'string'){
				
				const userId = id.slice(id.indexOf('_') + 1)
				const userIdx = state.usersData.findIndex(user => user.id === userId)
	
				const url = state.usersData.find(user => user.id === userId)
										.posts.find(post => post.id === id).img
				
				
				const notic = {
					id: new Date().getTime() + '_' + userId,
					text: text,
					userName: userName,
					userImg: userImg,
					img: url
				}
				if(userId !== currentId)state.usersData[userIdx].notifications.unshift(notic)
			}
			
		}
	},
	extraReducers:{
		[fetchUsers.fulfilled]: (state,{payload}) => {
			return {
				...state,
				usersData: [...payload]
			}
		}
	}
})


export const selectUsers = state => state.users

export const { toggleCurrentUser,logOut,addPostInUserData,deletePost,addMessage,addReaction,addNotification } = usersSlice.actions

export const usersRdeucer = usersSlice.reducer