import React from "react";

const CrosswordGrid = ({ grid, setGrid }) => {
  const gridSize = 6;

  const blackOutCells = {
    0: [3, 4, 5],
    1: [5],
    2: [5],
    3: [5],
    4: [4, 5],
  };

  const handleChange = (e, rowIndex, colIndex) => {
    const { value } = e.target;
    const upperValue = value.toUpperCase();

    if (upperValue.length > 1) return;

    const newGrid = grid.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? upperValue : cell
      )
    );

    setGrid(newGrid);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 40px)`,
        gap: "5px",
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isBlackOut = blackOutCells[rowIndex]?.includes(colIndex);

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                border: "1px solid gray",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: isBlackOut ? "black" : "white",
              }}
            >
              {colIndex === 0 && !isBlackOut && (
                <span
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    fontSize: "10px",
                    color: "gray",
                  }}
                >
                  {rowIndex + 1}
                </span>
              )}

              {!isBlackOut && (
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => handleChange(e, rowIndex, colIndex)}
                  maxLength="1"
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    fontSize: "20px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default CrosswordGrid;
