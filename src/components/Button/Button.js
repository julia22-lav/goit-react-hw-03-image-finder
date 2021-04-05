import s from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={s.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
