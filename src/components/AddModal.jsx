import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { openModal, closeModal } from "../features/modals/addModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../features/cards/cardsSlice";

const AddStuff = () => {
  //  TODO: add modal functionality, control inputs, submit form
  const dispatch = useDispatch();

  const [formstate, setFormstate] = React.useState({
    title: "",
    initHours: 0,
    goalHours: 10000,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const { title, initHours, goalHours } = formstate;
    dispatch(addCard({ title, initHours, goalHours }));
    dispatch(closeModal());
  };
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal add-modal">
        <h1>Add Journey</h1>
        <i
          className="fas fa-times exit-icon"
          onClick={() => dispatch(closeModal())}
        ></i>
        <form onSubmit={submitHandler}>
          <div>
            <label>Journey Title</label>
            <input
              type="text"
              placeholder="Title"
              required
              value={formstate.title}
              onChange={(e) =>
                setFormstate({ ...formstate, title: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label>Initial Hours</label>
            <input
              type="number"
              placeholder="initial hours"
              required
              min="0"
              max="10000"
              value={formstate.initHours}
              onChange={(e) =>
                setFormstate({
                  ...formstate,
                  initHours: Number(e.target.value),
                })
              }
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
              value={formstate.goalHours}
              onChange={(e) =>
                setFormstate({
                  ...formstate,
                  goalHours: Number(e.target.value),
                })
              }
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
  const isOpen = useSelector((store) => store.addModal.isOpen);
  if (!isOpen) return null;
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
