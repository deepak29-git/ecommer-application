import check from "../../assets/check.png";
import "../Toast/Toast.css";
export const Toast = ({ text }) => {
  return (
    <div className="alert success-outline icon-alert toast-container">
      <img className="icon toast" src={check} alt="check-icon" />
      {text}
    </div>
  );
};
