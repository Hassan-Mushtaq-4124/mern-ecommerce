import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // wait 3 seconds then redirect to home
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container text-center mt-5">
      <h1 style={{ color: "green" }}>
        Order Placed Successfully! 🎉
      </h1>

      <p>You will be redirected to home shortly...</p>
    </div>
  );
};

export default Success;