import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const AddStuff = () => {
  //  TODO: add modal functionality, control inputs, submit form
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal add-modal">
        <h1>Add Journey</h1>
        <i className="fas fa-times exit-icon" onClick={() => {}}></i>
        <form onSubmit={() => {}}>
          <div>
            <label>Journey Title</label>
            <input type="text" placeholder="Title" required></input>
          </div>
          <div>
            <label>Initial Hours</label>
            <input
              type="number"
              placeholder="initial hours"
              required
              min="0"
              max="10000"
            ></input>
          </div>
          <div>
            <label>Goal Hours</label>
            <input
              type="number"
              required
              placeholder="goal hours"
              min="0"
              max="10000"
            ></input>
          </div>
          <input type="submit" className="btn btn-block btn-primary"></input>
        </form>
      </div>
    </>
  );
};
const AddModal = () => {
  // TODO: render modal, if not open, return null.

  return (
    <>
      {ReactDOM.createPortal(
        <AddStuff />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { AddModal };
