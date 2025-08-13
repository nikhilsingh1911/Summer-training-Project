import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="bg-red-500 rounded hover:bg-red-600 hover:underline px-2 py-1 text-white font-semibold text-2xl"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
