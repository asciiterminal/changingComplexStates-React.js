import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    //We will be updating contact using setContact. onChange={handleChange}
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target; //From {event.target} we would need
    //name & value

    setContact((prevValue) => {
      //We have to secure the previous entered value also in the field to make sure
      //all the information stays intact.

      if (name === "fName") {
        return {
          //Returning a JS Object requires {} curly braces
          fName: value, //If its an fName get the value and maintain the previous entries for lName and email if entered.
          lName: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
