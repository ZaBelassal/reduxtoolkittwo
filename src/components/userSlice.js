import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser : (state,action)=>{
        state.name=action.payload.name,
        state.email=action.payload.email
    }
  },
})


export const { addUser } = userSlice.actions

export default userSlice.reducer