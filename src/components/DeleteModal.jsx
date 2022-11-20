import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeDeleteModal } from "../features/modals/deleteModalSlice";
import { deleteCard } from "../features/cards/cardsSlice";
import { deleteCardFromDatabase } from "../features/cards/cardsSlice";

const DeleteStuff = ({ id, onCloseModal }) => {
  // TODO: delete modal functionality

  const dispatch = useDispatch();
  console.log("delete modal", id);

  const onDelete = () => {
    //dispatch(closeDeleteModal());
    onCloseModal();
    dispatch(deleteCard(id));
    dispatch(deleteCardFromDatabase(id));
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal edit-modal text-center">
        <i className="fas fa-times exit-icon" onClick={onCloseModal}></i>
        <h1>Are you sure you want to delete?</h1>
        <button className="btn btn-primary" onClick={onDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

const DeleteModal = ({ id, onCloseModal, isDeleteModalOpen }) => {
  //TODO: render delete modal, return null if not open
  if (!isDeleteModalOpen) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <DeleteStuff id={id} onCloseModal={onCloseModal} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { DeleteModal };
