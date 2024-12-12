import PropTypes from "prop-types";

const CreateTodoButton = ({ setShowModal }) => {
  return (
    <div className="fixed bottom-8 right-8 lg:right-40 lg:bottom-8 bg-primary text-container font-semibold rounded-full px-4 py-3 hover:bg-container hover:text-primary transition-colors duration-300 cursor-pointer" 
    onClick={() => setShowModal(true)}>
      <button
        className="flex items-center justify-center"
      >
        Create a todo
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 ml-1 fill-current"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect x={0} fill="none" width={24} height={24} />{" "}
            <g>
              {" "}
              <path d="M21 14v5c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5v2H5v14h14v-5h2z" />{" "}
              <path d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4" />{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

CreateTodoButton.propTypes = {
    setShowModal: PropTypes.func.isRequired,
}

export default CreateTodoButton;

