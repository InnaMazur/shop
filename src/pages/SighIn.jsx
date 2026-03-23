
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";

function SignIn() {
    const[name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
     name,
      email
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/my-account");
  };

  return (
 <div className="container-fluid mt-5"
        >
        {message && (
          <div className="signin-alert">
            {message}
          </div>
        )}

      <div className="col-md-6 mx-auto">
        <div className="card p-4 shadow">
        <div className="mb-4">
  <div className="back-link"
    onClick={() => navigate("/")}
  >
    ← Back to shopping
  </div>
</div>
          <h3 className="text-center mb-4">Sign In</h3>

          <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Sign In
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;