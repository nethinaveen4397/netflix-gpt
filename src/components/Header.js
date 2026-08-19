import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });

    // with out signout API
    // dispatch(removeUser());
    // navigate("/");
  };

  return (
    <div className="absolute w-screen px-8 py-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
        alt="logo"
      />
      {user && <div className="flex p-4">
        <img
          className="w-12 h-12"
          src="https://occ-0-4857-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWQLL7bT3pYDF0xKXID9tpW4PldTqv3UQKdTRZkA2-RWg7H8sxekkU5LOjLBZLmHSe5GoOaOjjokJgKpeEQQ-rS5VZsHg9Q.png?r=e6e"
          alt="logout"
        ></img>
        <button className="font-bold text-white" onClick={handleSignOut}>
          Sign out
        </button>
      </div>}
    </div>
  );
};

export default Header;
