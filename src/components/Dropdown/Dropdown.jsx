import { useState, useEffect, useRef } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import PropTypes from 'prop-types'

const Dropdown = ({buttonText, content}) => {
  const [open, setOpen] = useState(false); 
  const dropdownRef = useRef();

  const [position, setPosition] = useState({ top: 0, left: 0 });
  const toggleDropdown = (e) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
    setOpen((prev) => !prev);
  };


  useEffect(()=>{
    const handler = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setOpen(false);
      }  
    }

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    }
  },[dropdownRef])

  return (
    <div className='relative md:w-[80%]' ref={dropdownRef}>
      <DropdownButton open={open} toggle={toggleDropdown}>{buttonText}</DropdownButton>
      <DropdownContent open={open} position={position}>{content}</DropdownContent>
    </div>
  )
}

Dropdown.propTypes = {
  buttonText: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
}


export default Dropdown