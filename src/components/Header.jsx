import ToggleButton from './ToggleButton'
import PropTypes from 'prop-types';

const Header = ({mode, setMode}) => {
  return (
    <>
        <ToggleButton mode={mode} setMode={setMode} />
    </>
  )
}

Header.propTypes = {
    mode: PropTypes.bool.isRequired,       
    setMode: PropTypes.func.isRequired,
};

export default Header