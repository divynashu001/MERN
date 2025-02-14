import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await axios.get("https://mern-lfl6.onrender.com/user");

      setData(response.data);
      setError("");
    } catch (error) {
      console.error("Error:", error.response.data);
      setError(error.response.data);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://mern-lfl6.onrender.com/user/${id}`);
      setError("Deleted Successfully!");
      setTimeout(() => {
        setError("");
        getData();
      }, 2000);
    } catch (error) {
      console.error("Error:", error.response.data);
      setError(error.response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h1 className="text-center">All Data</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {data?.map((ele) => (
          <div key={ele._id} className="col-4">
            <div className="card mt-3">
              <div className="card-body text-center bg-gradient bg-warning">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-text">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                <button className="btn btn-dark px-4">
                <Link to={`${ele._id}`} className="card-link text-white text-decoration-none ">
                  Edit
                </Link>
                </button>
                <button
                  className="btn btn-danger mx-3 px-3"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
