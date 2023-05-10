import { Grid, Button } from "@mui/material";
import { useState } from "react";
import { resolveWinningTheGame } from "../utils";
import GameSquare from "./sqr";
import WinModal from "./winingModal";


const TicTacGameWithComputer = () => {
  // creating an array of 9 objects with a trig key to change it when clicking
  const [data, setData] = useState<Array<{ trig: string }>>(
    Array(9).fill({ trig: "empty" })
  );


  const triggerAtIndex = (index: number) => {
    const newData = [...data]; // create a copy of the current state array
    newData[index] = { trig: "cross" }; // update the item at the specified index
    setData(newData); // set the new array as the updated state
    if (resolveWinningTheGame(newData).won === false && newData.every((item) => item.trig !== "empty")) {
        // All squares are filled and no one has won
        setData(Array(9).fill({ trig: "empty" }));
    }
    // call the function to make the computer move
    setTimeout(() => makeComputerMove(newData), 200);
  }

  const makeComputerMove = (gameData: Array<{ trig: string }>) => {
    if (resolveWinningTheGame(gameData).won || gameData.every((item) => item.trig !== "empty")) {
        return; // Game is over, no need to make a move
    }
    let availableSquares: number[] = [];
    gameData.forEach((item, index) => {
        if (item.trig === "empty") {
            availableSquares.push(index);
        }
    });
    const randomIndex = availableSquares[Math.floor(Math.random() * availableSquares.length)];
    const newData = [...gameData];
    newData[randomIndex] = { trig: "zero" };
    setData(newData);
    if (resolveWinningTheGame(newData).won === false && newData.every((item) => item.trig !== "empty")) {
        // All squares are filled and no one has won
        setData(Array(9).fill({ trig: "empty" }));
    }
  }
  
  return (
    <Grid container direction="column">
      {[0, 1, 2].map((rowIndex) => (
        <Grid
          key={rowIndex}
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          marginY={"10px"}
        >
          {[0, 1, 2].map((colIndex) => {
            const index = rowIndex * 3 + colIndex;
            return (
              <GameSquare
                key={index}
                trig={data[index].trig}
                onClick={() => triggerAtIndex(index)}
                isDisabled={data[index].trig !== 'empty'}
              />
            );
          })}
        </Grid>
      ))}

      <Grid item container xs={12} justifyContent={"center"}>
        <Button onClick={() => {
            setData(Array(9).fill({ trig: "empty" }));
        }}
        sx={{ backgroundColor: '#59d2fe', color: ' #191923', borderRadius: '10px' }}
        >
          Start Over
        </Button>
      </Grid>

      {resolveWinningTheGame(data).won && <WinModal open={true} title={resolveWinningTheGame(data).msg} refresh={() => setData(Array(9).fill({ trig: "empty" }))} />}
    </Grid>
  );
};

export default TicTacGameWithComputer;
