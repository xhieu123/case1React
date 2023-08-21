import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../service/productsService";

const initialState = {
    products:[]
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })
    }
})
export default productSlice.reducer;