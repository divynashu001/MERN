import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, age };

    try {
      const response = await axios.post("http://localhost:3000/user", addUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setName("");
      setEmail("");
      setAge(0);
      setError("")
      navigate("/")
      
    } catch (error) {
      console.error("Error adding user:", error.response.data);
      setError(error.response.data)
    }
  };

  return (
    <div className="container my-2">
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <h2 className="text-center">Enter Data Here!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;