import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  let { id } = useParams();
  const getSingleUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setAge(response.data.age);
      setError("");
    } catch (error) {
      console.error("Error:", error.response.data);
      setError(error.response.data);
    }
  };

  const handleUpdate = async (e)=>{
    e.preventDefault();

    const updateUser = { name, email, age };

    try {
      const response = await axios.patch(`http://localhost:3000/user/${id}`, updateUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      setError("")
      navigate("/")
      
    } catch (error) {
      console.error("Error adding user:", error.response.data);
      setError(error.response.data)
    }
  }

  useEffect(() => {
    getSingleUserData();
  }, []);
  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center">Edit the Data!</h2>
      <form onSubmit={handleUpdate}>
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

export default Update;
