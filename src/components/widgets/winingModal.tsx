import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { BlurredBackground, WinModalBody } from "./styles";

interface WinModalProps {
  open: boolean;
  title: string;
  refresh: () => void;
}

const WinModal = ({ open, refresh, title }: WinModalProps) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Modal open={isOpen} onClose={() => {
      setIsOpen(false)
      refresh()
      }}
    >
      <BlurredBackground>
        <WinModalBody>
          <Typography variant="h5">{title}</Typography>
          <Button variant="contained" onClick={() => {
            setIsOpen(false);
            refresh();
            }} 
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </WinModalBody>
      </BlurredBackground>
    </Modal>
  );
};
export default WinModal