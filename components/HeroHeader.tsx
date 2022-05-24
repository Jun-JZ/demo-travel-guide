import React from "react";
import Image from "next/image";
import headerImage from "../public/images/headerImage.png";

interface Props {
  isSmall?: boolean;
  onSearch: () => void;
}

const HeroHeader = ({ isSmall = false, onSearch }: Props) => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "300px" }}>
      <Image
        src={headerImage}
        alt="image"
        placeholder="blur"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          bottom: "-40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            background: "white",
            borderRadius: "5px",
            width: "66%",
            height: "120px",
            padding: "0 24px",
            border: "1px solid #adb5bd",
            boxShadow: "5px 5px 5px #adb5bd",
          }}
        >
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              aria-label="Destination"
              placeholder="Destination"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={onSearch}
            >
              {isSmall ? (
                <i
                  className="bi bi-search"
                  style={{ width: "32px", height: "32px" }}
                ></i>
              ) : (
                "Search"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
