import React, { useState } from "react";
import CrosswordGrid from "./components/CrosswordGrid";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [grid, setGrid] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ]);

  const correctWords = ["BIB", "UNITS", "RADIO", "SWEEP", "TEND", ""];

  const handleSubmit = () => {
    const enteredWords = grid.map((row) => row.join("").trim());
    if (enteredWords.every((word, index) => word === correctWords[index])) {
      setShowDialog(true); // Show the dialog
    } else {
      alert("The answers are incorrect!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "lightgreen",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Crossword Puzzle
        </h1>
        <CrosswordGrid grid={grid} setGrid={setGrid} />
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "darkgreen",
            color: "white",
          }}
        >
          Submit
        </button>
      </div>

      <div style={{ marginLeft: "20px", textAlign: "left" }}>
        <h2 style={{ fontSize: "2rem" }}>Across</h2>
        <div style={{ marginBottom: "10px" }}>
          <strong>1:</strong> What a baby wears when they eat
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>2:</strong> Miles, minutes and milliliters
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>3:</strong> What we use when the aux is broken
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>4:</strong> Cleaning with a broom
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>5:</strong> Look after or take care of. ___ to.
        </div>
      </div>

      {showDialog && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
              zIndex: 500,
            }}
          />

          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Solved!</h2>

            <div
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                margin: "0 auto",
                overflow: "hidden",
              }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
