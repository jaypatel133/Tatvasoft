import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit'
import { getAllCartItem,addCartItem,updateCartItem,DeleteCategory } from "../../service/cart.service";

const user = JSON.parse(localStorage.getItem('userDetail'))

export const fetchCartDetail = createAsyncThunk(
    'cart/fetchCartDetail', () => {
       return getAllCartItem(user.id).then(res=>{
            return res
        })
    }
  )

export const updateCartDetail = createAsyncThunk(
    'cart/updateCartDetail', (data,{dispatch}) => {
        let payload ={
            "id":data.id,
            "bookId": data.bookId,
            "userId": user.id,
            "quantity": data.quantity
        }
        updateCartItem(payload).then((res)=>{
            dispatch(fetchCartDetail())
        })

    }
  )


  export const addToCartRTK = createAsyncThunk(
    'cart/addToCartRTK', (data,{dispatch}) => {
        let payload ={
            "bookId": data.bookId,
            "userId": user.id,
            "quantity": data.quantity
        }
        addCartItem(payload).then((res)=>{
            dispatch(fetchCartDetail())
        })
    }
  )


  export const deleteCartItemRTK = createAsyncThunk(
    'cart/deleteCartItemRTK', (data,{dispatch}) => {
        DeleteCategory(data).then((res)=>{
            dispatch(fetchCartDetail())
        })
    }
  )


  
const initialState = {
  cartList: {},
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItemRTK: (state,action) => {
        state.cartList = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartDetail.fulfilled, (state, action) => {
      state.cartList = action.payload
    })
    builder.addCase(updateCartDetail.fulfilled, (state, action) => {
        // state.cartList = action.payload
    })
    builder.addCase(addToCartRTK.fulfilled, (state, action) => {
        // state.cartList = action.payload
    })
    builder.addCase(deleteCartItemRTK.fulfilled, (state, action) => {
        // state.cartList = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { setCartItemRTK } = cartSlice.actions

export default cartSlice.reducer