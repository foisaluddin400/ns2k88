import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  specialization: {},
  studio: {},
  certification: {},
  agreementAccepted: false,
};

const trainerRegisterSlice = createSlice({
  name: "trainerRegister",
  initialState,
  reducers: {
    savePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    saveSpecialization: (state, action) => {
      state.specialization = action.payload;
    },
    saveStudio: (state, action) => {
      state.studio = action.payload;
    },
    saveCertification: (state, action) => {
      state.certification = action.payload;
    },
    acceptAgreement: (state) => {
      state.agreementAccepted = true;
    },
    resetRegister: () => initialState,
  },
});

export const {
  savePersonalInfo,
  saveSpecialization,
  saveStudio,
  saveCertification,
  acceptAgreement,
  resetRegister,
} = trainerRegisterSlice.actions;

export default trainerRegisterSlice.reducer;
