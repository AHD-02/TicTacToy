import { useState } from "react";
import { StyledSqr, StyledText } from "./styles";


type IProps = {
    trig: string;
    onClick: () => void;
    isDisabled: boolean;
}

const GameSquare = ({ onClick, trig, isDisabled }: IProps) => {
    return(
        <StyledSqr 
           {...(isDisabled) ? {} : {
            onClick: onClick
           }}
        >
            <StyledText>
                {trig == "cross" ? "X" : trig == "zero" ? "O" : ""}
            </StyledText>
        </StyledSqr>
    )
}
export default GameSquare;