import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";

const EditStuff = () => {
  // TODO: edit modal functionality

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal edit-modal text-center">
        <i className="fas fa-times exit-icon" onClick={() => {}}></i>
        <h1>Add Hours</h1>
        <form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="task name"
            className="task-name"
            required
          />
          <div className="hours-container">
            <label>Hours</label>
            <input
              type="number"
              className="hours-input"
              required
              min="0"
              max="20"
            />
            <label>minutes</label>
            <input
              type="number"
              className="minutes-input"
              required
              min="0"
              max="59"
            />
          </div>
          <input type="submit" className="btn btn-primary btn-block" />
        </form>
      </div>
    </>
  );
};

const EditModal = () => {
  //TODO: render edit modal, return null if not open

  return (
    <>
      {ReactDOM.createPortal(
        <EditStuff />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { EditModal };
