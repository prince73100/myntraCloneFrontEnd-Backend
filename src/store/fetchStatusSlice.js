import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name:'fetchStatus',
    initialState:{
        fetchDone:false,
        currentlyfetching:false
    },
    reducers:{
        markfetchDone:(state)=>{
            return state.fetchDone = true;
        },
        markfetchingStarted:(state)=>{
            return state.currentlyfetching = true;
        },
        markfetchingDone:(state)=>{
            return state.currentlyfetching = false;
        }
    }
});

export const fetchActions = fetchStatusSlice.actions

export default fetchStatusSlice;