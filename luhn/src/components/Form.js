import { useState } from "react";
// import Luhn from "./components/Luhn";

export default function Form(props) {
  //State to hold the form data

  const [formData, setFormData] = useState({
    creditStr: "",
    email: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();

    // console.log(form);//no idea why I am having this, copied from Devin's shopping cart form.

    //pass the creditStr to luhnFun prop, which is apps getMovie function
    props.luhnFunction(formData.creditStr);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.creditStr}
          className="form-control"
          onChange={handleChange}
          name="creditStr"
          placeholder="Enter Credit Card Number"
        />
        <input
          required
          type="email"
          value={formData.email}
          className="form-control"
          onChange={handleChange}
          name="email"
          placeholder="Email address"
        />
        <input type="submit" value="CHECK BALANCE" />
        {/* <button onClick={validate}>Validate Your Card</button> */}
      </form>
    </div>
  );
}
