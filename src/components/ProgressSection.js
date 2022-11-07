import React, { useState } from "react";

const ProgressSection = () => {
  // TODO: Add modal functionaltiy with onAdd prop
  // TODO: card fetching
  const cards = [];
  let isempty = cards.length === 0;
  return (
    <section id="home-a">
      <div className="container">
        <h2 className="section-title">My Journies</h2>
        <div className="divider"></div>
        {isempty ? (
          <Empty onAdd={() => {}} />
        ) : (
          cards.map((card) => (
            <ProgressCard
              title={card.title}
              currentHours={card.currentHours}
              goalHours={card.goalHours}
              id={card.id}
              key={card.id}
            />
          ))
        )}
        {!isempty && (
          <div className="empty">
            <button className="btn btn-primary" onClick={() => {}}>
              Add journey
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Empty = ({ onAdd }) => {
  return (
    <div className="empty">
      <h3>Add a journey to get started!</h3>
      <button className="btn btn-primary" onClick={onAdd}>
        Add journey
      </button>
    </div>
  );
};

const ProgressCard = ({ title, currentHours, goalHours, id }) => {
  // TODO: Add edit modal functionality, add delete functionality.
  return (
    <>
      <div className="card">
        <div className="titles">
          <h3 className="card-title">{title}</h3>
          <h3 className="hours-title">
            {Number(currentHours).toFixed(1)}/{goalHours} hrs
          </h3>
        </div>
        <ProgressBar currentHours={currentHours} goalHours={goalHours} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={() => {}}>
            Edit
          </button>
          {/* * Todo: add delete functionality */}
          <button className="btn btn-dark" onClick={() => {}}>
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
