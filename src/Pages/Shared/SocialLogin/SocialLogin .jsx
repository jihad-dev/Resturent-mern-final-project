import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const SaveUser = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(SaveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center mb-5 gap-4">
      <Link>
        <img
          className="h-16 rounded-full"
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon-768x768.png"
          alt=""
        />
      </Link>

      <Link onClick={handleGoogleLogin}>
        <img
          className=" h-12 mt-2 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
          alt=""
        />
      </Link>
      <Link>
        <img
          className=" h-14 mt-2 rounded-full"
          src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1704379378~exp=1704379978~hmac=f07eb88218acdc43882af53741fa6136255479d79a20537013101fb25d2a4f61"
          alt=""
        />
      </Link>
    </div>
  );
};

export default SocialLogin;
