import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Import Types
import { TCharacter } from "../../@types/Character/index";

const initialState: TCharacter = {
	name: '',
	birth_year: '',
	eye_color: '',
	gender: '',
	hair_color: '',
	height: '',
	mass: '',
	skin_color: '',
	homeworld: '',
	films: [],
	species: [],
	starships: [],
	vehicles: [],
	url: '',
	created: '',
	edited: ''
};

export const characterDetailReducer = createSlice({
  name: "characterDetails",
  initialState,
  reducers: {
    changeDetails: (state, action: PayloadAction<TCharacter>) => {
      state.name = action.payload.name;
			state.birth_year = action.payload.birth_year;
			state.eye_color = action.payload.eye_color;
			state.gender = action.payload.gender;
			state.hair_color = action.payload.hair_color;
			state.height = action.payload.height;
			state.mass = action.payload.mass;
			state.skin_color = action.payload.skin_color;
			state.homeworld = action.payload.homeworld;
			state.films = action.payload.films;
			state.species = action.payload.species;
			state.starships = action.payload.starships;
			state.vehicles = action.payload.vehicles;
			state.url = action.payload.url;
			state.created = action.payload.created;
			state.edited = action.payload.edited;			
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDetails } = characterDetailReducer.actions;

export default characterDetailReducer.reducer;
