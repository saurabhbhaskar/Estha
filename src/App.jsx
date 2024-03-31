import React from 'react';
import SignupFormDemo from './components/SignupFormDemo';
import MultiStepLoaderDemo from './components/MultiStepLoaderDemo';
import AuthLayout from "./components/AuthLayout";
import { Fnavbar } from './components/Fnavbar.jsx'

function App() {

  return (
    <>
      {/* <SignupFormDemo /> */}
      {/* <AuthLayout authentication={false}>
        <MultiStepLoaderDemo />
      </AuthLayout> */}
      <Fnavbar />
      <MultiStepLoaderDemo />
    </>
  );
}

export default App;


