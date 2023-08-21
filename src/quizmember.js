import React, { useState } from "react";

function QuizMember() {
  const [confirm, setConfirm] = useState(false);
  const [member, setMember] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMember((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    document.getElementById("details").innerHTML =
      "First name: " +
      member.firstName +
      "<br />Second name: " +
      member.secondName +
      "<br />Age: " +
      member.age;
    setConfirm(true);
    document.getElementById("check").innerHTML =
      "Please check the details you entered. If they are correct, press the confirm button below. <br /><br />";
  };

  const handleConfirm = () => {
    document.getElementById("form").style.display = "none";
    document.getElementById("confirmed").innerHTML =
      "Thank you for registering for our quiz. Here are the details you registered with:";
    document.getElementById("confirmButton").style.display = "none";
    document.getElementById("check").innerHTML = "";
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <p>
          You need to register online to take part in our quiz. Enter your
          details using the form.
        </p>
        <input
          required
          name="firstName"
          value={member.firstName}
          placeholder="First name"
          onChange={handleChange}
        />
        <br />
        <input
          required
          name="secondName"
          value={member.secondName}
          placeholder="Last name"
          onChange={handleChange}
        />
        <br />
        <input
          required
          type="number"
          name="age"
          value={member.age}
          placeholder="Age"
          onChange={handleChange}
        />
        <br />
        <button id="submitButton">Submit</button>
      </form>
      <div>
        <p id="confirmed"></p>
        <h2>Your details:</h2>
        <p id="check"></p>
        <p id="details">Your details will appear here when you start typing.</p>
        <button id="confirmButton" onClick={handleConfirm} disabled={!confirm}>
          Confirm?
        </button>
      </div>
    </>
  );
}

export default QuizMember;
