import React, { useState } from "react";

import propTypes from "prop-types";

function Stepper(props) {

  //
  const { steps, initialStep } = props;
  // steps berbentuk Object/Array
  // Object.keys untuk mengambil semua key
  const stepsKeys = Object.keys(steps);

  //CurrentStep yaitu step yang sedang aktif
  // indexOf mencari pada stepsKeys index yang sesuai dengan initialStep 
  const [CurrentStep, setCurrentStep] = useState(
    // Jika initialStep ada maka inisialisasi CurrentStep berisi initialStep
    // JIka tidak maka key pertama [0] pada stepsKeys (jadi tampilan default)
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );

  // mengambil panjang array pada dari stepsKeys
  const totalStep = stepsKeys.length;

  //indexStep berisi index dari stepsKey dengan key/CurrentStep
  const indexStep = stepsKeys.indexOf(CurrentStep);
  
  // function untuk mengurangi indexStep apabila indexStep > 0
  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }

  // function untuk menambah indexStep apabila indexStep < totalStep
  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

export default Stepper;

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string.isRequired
}

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
