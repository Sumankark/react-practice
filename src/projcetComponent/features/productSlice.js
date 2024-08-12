import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "Apple",
  quantity: 1,
  price: 23,
};

export const counterSlice = createSlice({
  // give unique
  name: "infoSlice",
  //this name can be any, note the type of action will be name/reducer eg counter you /in
  // just remember use name unique
  initialState: initialStateValue,
  reducers: {
    changeP_Name: (state, action) => {
      state.name = action.payload;
    },
    changeQuantity: (state, action) =>{
        state.quantity = action.payload;
    },
    changePrice: (state, action) =>{
        state.price = action.payload;
    }
  },
});

export const { changeP_Name, changeQuantity, changePrice} = counterSlice.actions;

export default counterSlice.reducer;
