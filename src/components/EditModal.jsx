import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeEditModal } from "../features/modals/editModalSlice";
import { editCard, editCardFromDatabase } from "../features/cards/cardsSlice";

const EditStuff = ({ cardId, onCloseModal }) => {
  console.log("edit mdoal");
  // TODO: edit modal functionality
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(cardId);
    const card = {
      task: taskName,
      hoursWorked: hours,
      minutesWorked: minutes,
      id: cardId,
    };
    onCloseModal();
    dispatch(editCard({ ...card }));
    dispatch(editCardFromDatabase({ ...card }));
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal edit-modal text-center">
        <i
          className="fas fa-times exit-icon"
          onClick={() => onCloseModal()}
        ></i>
        <h1>Add Hours</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="task name"
            className="task-name"
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <div className="hours-container">
            <label>Hours</label>
            <input
              type="number"
              className="hours-input"
              required
              min="0"
              max="20"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
            <label>minutes</label>
            <input
              type="number"
              className="minutes-input"
              required
              min="0"
              max="59"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
            />
          </div>
          <input type="submit" className="btn btn-primary btn-block" />
        </form>
      </div>
    </>
  );
};

const EditModal = ({ cardId, onCloseModal, isEditModalOpen }) => {
  //TODO: render edit modal, return null if not open
  if (!isEditModalOpen) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <EditStuff cardId={cardId} onCloseModal={onCloseModal} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { EditModal };
