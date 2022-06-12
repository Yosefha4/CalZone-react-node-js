import React from "react";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "gmail";
const TEMPLATE_ID = "template_sbqhb9e";
const USER_ID = "61A9ZY39zaKAsIHPE";

function Sender() {
  const [email, setEmail] = React.useState("");

  function handleClick() {
    console.log(email)
    var data = {
      to_email:email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Enter your email here
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <button type="submit" onClick={handleClick()}>
            Send mail
          </button>
        </p>
      </header>
    </div>
  );
}

export default Sender;