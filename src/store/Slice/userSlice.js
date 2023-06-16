import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetail: localStorage.getItem('userDetail') ? JSON.parse(localStorage.getItem('userDetail')) : null,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUsingRTK: (state,action) => {
        localStorage.setItem('userDetail', JSON.stringify(action.payload));
        state.userDetail = action.payload
    },
    logoutUsingRTK: (state) => {
        localStorage.removeItem('userDetail');
        state.userDetail = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUsingRTK,logoutUsingRTK } = userSlice.actions

export default userSlice.reducer