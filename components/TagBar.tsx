import React from "react";

interface Props {
  data: string[];
  isSmall?: boolean;
  onClick: (area: string) => void;
}

const TagBar = ({ data, isSmall = false, onClick }: Props) => {
  return isSmall ? (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => onClick(e.currentTarget.value)}
    >
      {data?.map((el, index) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  ) : (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      {data?.map((el, index) => (
        <button
          key={el}
          type="button"
          className="btn btn-outline-primary"
          style={{ marginRight: "10px" }}
          onClick={() => onClick(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TagBar;
