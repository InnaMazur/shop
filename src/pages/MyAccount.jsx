import { Link, useNavigate } from "react-router-dom";
import { Navigate} from "react-router-dom";


function MyAccount() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return(
       <Navigate to="/signin" 
    replace 
    state={{message:"Please sign in to access this page"}}/>
    );
  }

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3>
          Welcome, {user?.name} 
        </h3>

        <p className="text-muted">
          Manage your orders and account settings.
        </p>

        <div className="d-grid gap-2 mt-4">
          <Link to="/my-orders" className="btn btn-outline-dark">
            My Orders
          </Link>

          <Link to="/" className="btn btn-outline-dark">
            Continue Shopping
          </Link>

          <button
            className="btn btn-dark"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;