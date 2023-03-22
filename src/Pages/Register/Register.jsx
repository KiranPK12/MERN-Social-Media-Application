import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Kiran Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aspernatur harum quod perspiciatis laborum? Facere nisi pariatur
            suscipit excepturi adipisci.
          </p>
          <span>Do have a account yet?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
