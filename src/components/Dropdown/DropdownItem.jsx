import PropTypes from 'prop-types'
import "./Dropdown.css"

const DropdownItem = ({children, onClick, textColor = "text-black"}) => {
  return (
    <div className={`p-1.5 w-[100%] rounded-lg cursor-pointer hover:bg-container ${textColor}`} onClick={onClick}>{children}</div>
  )
}

DropdownItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    textColor: PropTypes.string,
}

export default DropdownItem

