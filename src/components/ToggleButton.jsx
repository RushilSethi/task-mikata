import PropTypes from "prop-types";

const ToggleButton = ({mode, setMode}) => {
  return (
    <div className="flex items-center justify-between w-50 border mt-6 rounded-2xl bg-primary">
      <div
        className={`rounded-2xl py-1 px-3 text-center w-20 transition-all duration-300 ease-in-out ${
          mode ? "bg-container text-primary" : "bg-primary text-background"
        }`}
      >
        <button onClick={() => setMode(true)}>
          Normal
        </button>
      </div>
      <div
        className={`rounded-2xl py-1 px-3 text-center w-20 transition-all duration-300 ease-in-out ${
          mode ? "bg-primary text-background" : "bg-container text-primary"
        }`}
      >
        <button onClick={() => setMode(false)}>
          Focus
        </button>
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
    mode: PropTypes.bool.isRequired,       
    setMode: PropTypes.func.isRequired,
  };

export default ToggleButton;
