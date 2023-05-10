import { Box, Grid, GridProps, styled, Typography} from "@mui/material";

export const StyledSqr = styled(Grid)<GridProps>(() => ({
    backgroundColor: "#222e50",
    maxHeight: "100px",
    maxWidth: '100px',
    minHeight: '100px',
    minWidth: '100px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
}));

export const StyledText = styled(Grid)(() => ({
    fontSize: "60px",
    color: "#fccb06",
    alignItems: 'center',
    alignSelf:'center',
}));

export const BlurredBackground = styled(Grid)(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zI: 999,
    backdropFilter: "blur(4px)",
}));

export const WinModalBody = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    borderRadius: "10px",
    p: 3,
    minWidth: "300px",
    textAlign: "center",
    padding: '50px'
}));




