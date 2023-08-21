import {createAsyncThunk} from "@reduxjs/toolkit";
import async from "async";
import axios from "axios";


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ()=>{
        const res = await axios.get('http://localhost:3000/homes')
        return res.data
    }
)