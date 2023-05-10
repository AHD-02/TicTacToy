import { useState } from "react";
import { StyledSqr, StyledText } from "./styles";


type IProps = {
    trig: string;
    onClick: () => void;
    isDisabeled: boolean;
}

const GameSquare = ({ onClick, trig, isDisabeled }: IProps) => {
    return(
        <StyledSqr 
           {...(isDisabeled) ? {} : {
            onClick: onClick
           }}
        >
            {trig == "cross" ? 
                <StyledText>
                  X
                </StyledText> 
            :
            trig == "zero" ? 
               <StyledText>
                 O
               </StyledText> 
            : 
            ""
            }

        </StyledSqr>
    )
}
export default GameSquare;