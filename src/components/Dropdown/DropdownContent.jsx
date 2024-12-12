import PropTypes from "prop-types";
import "./Dropdown.css";
import { createPortal } from "react-dom";

const DropdownContent = ({children, open, position}) => {
  return createPortal(
    <div className={`${open ? "content-open" : ""} dropdown-content bg-background`} style={{
      top: position.top,
      left: position.left,
    }}>{children}</div>, 
  document.body)
}

DropdownContent.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
};

export default DropdownContent