import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({

  name:'posts',
  initialState:[],
  reducers:{
    setposts : (state,action) =>{
      return action.payload
    }
  }
})

export const {setposts} = PostSlice.actions
export default PostSlice.reducer
