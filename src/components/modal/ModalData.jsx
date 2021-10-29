import { useState } from 'react';

import { Modal, Button, Typography, Fade, Box } from '@material-ui/core';

export default function ModalData(data) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '250px',
    width: 'auto',
    color: 'white',
    bgcolor: 'rgba(16, 36, 61, 0.5)',
    border: '1px dotted black',
    borderRadius: '10px',
    boxShadow: '4px 4px 4px rgba(0,0,0,0.5)',
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <img src={data.img} height="200px" width="auto" alt="" />
            <Typography variant="h6" component="h2">
              <div className="modalContents">{data.title}</div>
            </Typography>
            <Typography sx={{ mt: 2 }}>{data.description}</Typography>
            <Typography sx={{ mt: 2 }}>
              Link: <a href="https://nates.glitch.me">{data.link}</a>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Button onClick={handleOpen}>More info...</Button>
    </div>
  );
}
