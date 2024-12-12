import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.svg";
import Dropdown from "./Dropdown/Dropdown";
import DropdownItem from "./Dropdown/DropdownItem";
import { useState } from "react";

const TodoForm = ({ showModal, setShowModal }) => {
  const categories = [
    { id: 1, text: "Home", color: "text-sky-400" },
    { id: 2, text: "Work", color: "text-lime-400" },
    { id: 3, text: "Personal", color: "text-pink-400" },
    { id: 4, text: "Health/Fitness", color: "text-green-400" },
    { id: 5, text: "Education/Learning", color: "text-yellow-400" },
    { id: 6, text: "Other", color: "text-purple-400" },
  ];

  const [selectedPriority, setSelectedPriority] = useState("");

  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"> 
          <div className="bg-container p-6 rounded-lg shadow-lg w-[90vw] md:w-[50vw] max-h-[90vh] overflow-y-auto overscroll-contain relative">
            <div
              className="absolute top-4 right-4 rounded-full p-3 hover:bg-background"
              onClick={() => setShowModal(false)}
            >
              <img src={closeIcon} className="w-4" />
            </div>
            <h2 className="text-primary text-xl font-semibold mb-4">
              Create a New To-Do
            </h2>
            <form className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full px-2 py-1 bg-background rounded-md focus:outline-none focus:ring-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Deadline
                </label>
                <input
                  type="datetime-local"
                  placeholder="Enter title"
                  className="w-full px-2 py-1 bg-background rounded-md appearance-none focus:outline-none focus:ring-1"
                  style={{ "color-scheme": "dark" }}
                />
              </div>
              <div className="md:flex items-center">
                <div className="w-[100%] md:w-[50%] mb-3 md:mb-0" /* dropdown container */>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Category
                  </label>
                  <Dropdown
                    buttonText="Select a category"
                    content={
                      <>
                        {categories.map((item) => (
                          <DropdownItem key={item.id} textColor={item.color}>
                            {item.text}
                          </DropdownItem>
                        ))}
                      </>
                    }
                  />
                </div>
                <div className="w-[100%] md:w-[50%]" /* priority check */>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Priority
                  </label>
                  <div className="flex justify-around">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="High"
                        name="priority"
                        className="mr-2"
                        checked={selectedPriority === "High"}
                        onChange={handleChange}
                      />
                      <span className="text-rose-500">High</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="Moderate"
                        name="priority"
                        className="mr-2"
                        checked={selectedPriority === "Moderate"}
                        onChange={handleChange}
                      />
                      <span className="text-amber-400">Moderate</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="Low"
                        name="priority"
                        className="mr-2"
                        checked={selectedPriority === "Low"}
                        onChange={handleChange}
                      />
                      <span className="text-emerald-400">Low</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Enter description"
                  className="w-full px-2 py-1 bg-background rounded-md focus:outline-none focus:ring-1"
                  rows="3"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-background transition-all duration-300"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-container px-4 py-2 rounded-md hover:bg-background hover:text-primary transition-all duration-300"
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

TodoForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default TodoForm;
