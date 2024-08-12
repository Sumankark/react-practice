import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  city: "Kathmandu",
  province: 3,
};

export const counterSlice = createSlice({
  // give unique
  name: "address",
  //this name can be any, note the type of action will be name/reducer eg counter you /in
  // just remember use name unique
  initialState: initialStateValue,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeProvince: (state, action) => {
      state.province = action.payload;
    },
  },
});

export const { changeCity, changeProvince } = counterSlice.actions;

export default counterSlice.reducer;
