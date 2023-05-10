import { Grid, Button } from "@mui/material";
import { useState } from "react";
import GameSquare from "./widgets/sqr";
import WinModal from "./widgets/winingModal";
import { resolveWinningTheGame } from "./utils";

const TicTacGame = () => {
  // creating an array of 9 objects with a trig key to change it when clicking
  const [data, setData] = useState<Array<{ trig: string }>>(
    Array(9).fill({ trig: "empty" })
  );
  // determine weither if its cross or zero turn
  const [isCrossTurn, setTurn] = useState<boolean>(true);

  const triggerAtIndex = (index: number) => {
    const newData = [...data]; // create a copy of the current state array
    newData[index] = { trig: isCrossTurn ? "cross" : "zero" }; // update the item at the specified index
    setData(newData); // set the new array as the updated state
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
                onClick={() => {
                  triggerAtIndex(index);
                  setTurn(!isCrossTurn);
                }}
                isDisabeled={data[index].trig != 'empty'}
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

export default TicTacGame;
