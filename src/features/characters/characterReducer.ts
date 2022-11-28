import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Import Types
import { TCharacters } from "../../../@types/Character/index";


const initialState: TCharacters = {
  searchWord : '',
  perPage: 10,
	actualPage: 0,
  totalPage: 0,
  count: 0,
	next: '',
	previous: '',
	results: []
};

export const characterReducer = createSlice({
  name: "character",
  initialState,
  reducers: {
    changeResults: (state, action: PayloadAction<TCharacters>) => {
      state.results = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.actualPage = state.actualPage + 1;
      state.totalPage = Math.trunc(state.count / state.perPage);

      if(!state.previous){
        state.actualPage = 1;
      }else if( !state.next ){
        state.actualPage = state.totalPage;
      }else{
        const regex = /(\d+)/;
        const validId = state.next.match(regex);
        const newPage = validId ? parseInt(validId[0]) : 1;
        state.actualPage = newPage - 1;
      }
    },
    /*likeManage: (state, action: PayloadAction<any>) => {
      state.list[action.payload.id].liked = action.payload.liked
      window.localStorage.setItem('posts', JSON.stringify(state.list))
    },*/
  },
});

// Action creators are generated for each case reducer function
export const { changeResults } = characterReducer.actions;

export default characterReducer.reducer;
