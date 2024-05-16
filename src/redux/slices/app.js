import {createSlice} from '@reduxjs/toolkit';

//

const initialState={slidebar:{
    open:false,
    type:"CONTACT",// can be CONTACT,STARRED,SHARED
}}

const slice=createSlice({
    name:"app",
    initialState,
    reducers:{
        //Toggle Sidebar
        toggleSidebar(state,action){
            state.slidebar.open=!state.slidebar.open;
        },
        updateSidebarType(state,action){
            state.slidebar.type=action.payload.type;
        }
    }
})

// Reducer
export default slice.reducer;

//
export function ToogleSidebar(){
    return async (dispatch,getState)=>{
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType(type){
    return async(dispatch)=>{
        dispatch(slice.actions.updateSidebarType({
            type,
        }))
    }
}