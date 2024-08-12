import React, { createContext, useState } from "react";
import NestingRoute from "./practiceComponent/LearnRouting/NestingRoute";
import FormikForm from "./LearnFormik/FormikForm";
import FormikTutorial from "./LearnFormik/FormikTutorial";
import Project from "./projcetComponent/Project";

export let GlobalVariableContext = createContext();

const MyApp = () => {
  let [token, setToken] = useState(localStorage.getItem("token"))
  return (
    <div>
      {/* <Project></Project> */}
      <GlobalVariableContext.Provider value = {{token: token, setToken: setToken}}>
      <NestingRoute></NestingRoute>
      </GlobalVariableContext.Provider>
      {/* <FormikForm></FormikForm> */}
      {/* <FormikTutorial></FormikTutorial> */}
    </div>
  );
};

export default MyApp;
