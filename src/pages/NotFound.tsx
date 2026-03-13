import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ButtonReturnToHome from "@/components/ui/ButtonReturnToHome";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#1b1b1b",
      fontFamily: "Arial, sans-serif",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontSize: "100px", fontWeight: 900, lineHeight: 1,
          background: "linear-gradient(135deg, #ff9000, #ffcc66)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>404</div>
        <p style={{ color: "#aaa", marginBottom: "20px", fontSize: "15px" }}>
          Oops! This page was removed or never existed.
        </p>
        <ButtonReturnToHome />
      </div>
    </div>
  );
};

export default NotFound;