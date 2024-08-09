import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RegistrationFormV1 = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch({ type: "UPDATE_USER", payload: { name: e.target.value } });
  };

  const handleNextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="registration-form">
      <h2>Registration Form V1</h2>
      <p>Current Step: {user.step}</p>
      <label>
        Name:
        <input type="text" value={user.name} onChange={handleNameChange} />
      </label>

      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default RegistrationFormV1;
