import React from "react";

interface Props {
  imageUrl: string;
  label: string;
}

function Card({ imageUrl, label }: Props) {
  return (
    <div className="card bg-dark text-white">
      <img src={imageUrl} className="card-img" alt="placeholder" />
      <div
        className="card-img-overlay"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <h5 className="card-title">{label}</h5>
      </div>
    </div>
  );
}

export default Card;
