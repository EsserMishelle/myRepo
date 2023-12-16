import { useState } from "react";
// import Luhn from "./components/Luhn";

export default function Form(props) {
  //State to hold the form data

  const [form, setForm] = useState({
    creditStr: "",
    email: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        onChange={handleChange}
        name="creditStr"
        placeholder="Enter Credit Card Number"
      />
      <input
        type="email"
        value={form.email}
        onChange={handleChange}
        name="email"
        placeholder="Email address"
      />
      <input type="submit" value="CHECK BALANCE" />
    </form>
  );
}
