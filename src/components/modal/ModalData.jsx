import { useState } from 'react';
import Image from 'material-ui-image';
import { Modal, Button, Typography, Fade, Box } from '@material-ui/core';

export default function ModalData(data) {
  // Style for the modal
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

  //Style for image within modal
  const imgStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '15px',
    alignSelf: 'center',
  };

  //Handle modal open/close. Data in modal is mapped from external data.js values
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <div style={imgStyle}>
              <Image src={data.img} imageStyle={imgStyle} aspectRatio="1/2" />
            </div>
            <Typography variant="h6" component="h2">
              <div className="modalContents">{data.title}</div>
            </Typography>
            <Typography sx={{ mt: 2 }}>{data.description}</Typography>
            <Typography sx={{ mt: 2 }}>
              Link: <a href={data.link}>{data.link}</a>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Button onClick={handleOpen}>More info...</Button>
    </div>
  );
}
