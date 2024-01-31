import { Link } from "react-router-dom";

const Navbar: React.FC<{ user: any }> = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:9000/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          eFurniture
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            {user.photos && user.photos[0] && (
              <img src={user.photos[0].value} alt="" className="avatar" />
            )}
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
