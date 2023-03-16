import { createSlice } from "@reduxjs/toolkit";

interface IAddress {
  city: string | undefined;
  address: string | undefined;
}

interface IInputState {
  name?: string;
  surname?: string;
  isGood?: boolean;
  sex?: string;
  age?: number;
  age2?: number;
  date?: string;
  color?: string;
  address: Array<IAddress>;
}

const initialState = {
  name: "",
  surname: "",
  isGood: false,
  sex: "male",
  age: 0,
  age2: 0,
  date: "",
  color: "",

  address: {
    city: "",
    address: "",
  },
};

const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setFormState(state, action) {
      state = action.payload;
      console.log("redux state", state);
    },
  },
});

export default inputsSlice.reducer;
export const { setFormState } = inputsSlice.actions;
