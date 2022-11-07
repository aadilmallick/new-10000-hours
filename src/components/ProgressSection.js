import React, { useState } from "react";
import { AddModal } from "./AddModal";
import { openModal, closeModal } from "../features/modals/addModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { EditModal } from "./EditModal";
import { openEditModal } from "../features/modals/editModalSlice";
import { DeleteModal } from "./DeleteModal";
import { openDeleteModal } from "../features/modals/deleteModalSlice";
const ProgressSection = () => {
  // TODO: card fetching
  const { cards, isLoading } = useSelector((store) => store.cards);
  const dispatch = useDispatch();
  let isempty = cards.length === 0;

  if (isLoading) {
    return (
      <Section>
        <div className="loading"></div>
      </Section>
    );
  }
  if (isempty) {
    return (
      <Section>
        <Empty />
      </Section>
    );
  }

  return (
    <Section>
      {cards.map((card) => (
        <ProgressCard
          title={card.title}
          currentHours={card.currentHours}
          goalHours={card.goalHours}
          id={card.id}
          key={card.id}
        />
      ))}
      <div className="empty">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(openModal())}
        >
          Add journey
        </button>
      </div>
    </Section>
  );
};

const Section = ({ children }) => {
  return (
    <section id="home-a">
      <AddModal />
      <div className="container">
        <h2 className="section-title">My Journies</h2>
        <div className="divider"></div>
        {children}
      </div>
    </section>
  );
};

const Empty = () => {
  // * dispatch the openModal action when clicking on the addJourney button
  const dispatch = useDispatch();
  return (
    <div className="empty">
      <h3>Add a journey to get started!</h3>
      <button className="btn btn-primary" onClick={() => dispatch(openModal())}>
        Add journey
      </button>
    </div>
  );
};

const ProgressCard = ({ title, currentHours, goalHours, id }) => {
  // TODO: Add edit modal functionality, add delete functionality.

  const dispatch = useDispatch();
  return (
    <>
      <EditModal id={id} />
      <DeleteModal id={id} />
      <div className="card">
        <div className="titles">
          <h3 className="card-title">{title}</h3>
          <h3 className="hours-title">
            {Number(currentHours).toFixed(1)}/{goalHours} hrs
          </h3>
        </div>
        <ProgressBar currentHours={currentHours} goalHours={goalHours} />
        <div className="buttons">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(openEditModal())}
          >
            Edit
          </button>
          {/* * Todo: add delete functionality */}
          <button
            className="btn btn-dark"
            onClick={() => dispatch(openDeleteModal())}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

const ProgressBar = ({ currentHours, goalHours }) => {
  return (
    <div className="progress">
      <div
        style={{ width: `${Math.floor((currentHours / goalHours) * 100)}%` }}
      >
        <p>{Number(((currentHours / goalHours) * 100).toFixed(2))}%</p>
      </div>
    </div>
  );
};
export { ProgressSection };
