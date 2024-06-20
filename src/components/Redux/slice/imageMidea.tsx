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

export const imageMidea = createAsyncThunk('fetchImage', async(src:any)=>{
   return axios.get(`${News_API}/everything/${src}.json`).then(res=>res)
})

const imageSliceMidea = createSlice({
    name: 'ImageCall',
    initialState ,
    extraReducers: (builder) => {
        builder.addCase(imageMidea.pending, (state) => {
            state.isloading = true;
        });
        builder.addCase(imageMidea.rejected, (state, _action:PayloadAction<any>) => {
            console.log("error");
                state.isError = true;
        });
        builder.addCase(imageMidea.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        });
    },
    reducers:{}
})

export default imageSliceMidea.reducer;
