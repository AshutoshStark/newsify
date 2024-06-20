import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { News_API } from "../../constants/constants";
import axios from "axios";


export interface Data {
    isloading:boolean,
    data:any,
    isError:boolean,
}

const initialState:Data = {
    isloading: false,
    data: null,
    isError: false,
}


export const image = createAsyncThunk('fetchImage', async(cat:any)=>{
   return axios.get(`${News_API}/top-headlines/category/${cat[0]}/${cat[1]}.json`).then(res=>res)
})

const imageSlice = createSlice({
    name: 'ImageCall',
    initialState ,
    extraReducers: (builder) => {
        builder.addCase(image.pending, (state) => {
            state.isloading = true;
        });
        builder.addCase(image.rejected, (state, _action:PayloadAction<any>) => {
            console.log("error");
                state.isError = true;
        });
        builder.addCase(image.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        });
    },
    reducers:{}
})
export default imageSlice.reducer;
