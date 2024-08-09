import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RegistrationFormV2 = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch({ type: "UPDATE_USER", payload: { email: e.target.value } });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_USER" });
  };

  return (
    <div className="registration-form">
      <h2>Registration Form V2</h2>
      <p>Current Step: {user.step}</p>
      <p>Name: {user.name}</p>
      <label>
        Email:
        <input type="email" value={user.email} onChange={handleEmailChange} />
      </label>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RegistrationFormV2;
