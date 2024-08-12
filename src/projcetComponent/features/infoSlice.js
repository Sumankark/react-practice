import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "Ram",
  age: 23,
  isMarried: false,
};

export const counterSlice = createSlice({
  // give unique
  name: "infoSlice",
  //this name can be any, note the type of action will be name/reducer eg counter you /in
  // just remember use name unique
  initialState: initialStateValue,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeAge: (state, action) =>{
        state.age = action.payload;
    },
  },
});

export const { changeName, changeAge} = counterSlice.actions;

export default counterSlice.reducer;
