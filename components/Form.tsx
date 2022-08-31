import { Step, Stepper } from 'react-form-stepper';

const CustomStepper = () => {
    return(
        <Stepper activeStep={1}>
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
      </Stepper>
    )
  };
  
  export default CustomStepper;