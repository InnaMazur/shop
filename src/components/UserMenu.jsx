
import { Link } from "react-router-dom";

function UserMenu({ user, handleLogout }) {
  return (
    <ul className="dropdown-menu dropdown-menu-end">
      {!user && (
        <li>
          <Link className="dropdown-item" to="/signin">
            Sign In
          </Link>
        </li>
      )}

      {user && (
        <>
          <li>
            <Link className="dropdown-item" to="/my-account">
              My Account
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/my-orders">
              My Orders
            </Link>
          </li>
          <li>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
}

export default UserMenu;