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
    minWidth: '300px',
    maxWidth: '700px',
    maxHeight: '70vh',
    overflowY: 'hidden',
    scrollbarWidth: '0px',
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
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{ backdropFilter: 'blur(5px)' }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={imgStyle}>
              <Image src={data.img} imageStyle={imgStyle} aspectRatio="1/2" />
            </div>
            <Typography variant="h6" component="h2">
              <div className="modalContents">
                <h2>{data.title}</h2>
              </div>
            </Typography>
            <Typography sx={{ mt: 2 }}>{data.description}</Typography>
            <h3>Technologies used</h3>
            <Typography sx={{ mt: 2, fontSize: '10px' }}>
              <ul>
                {data.tech.map((item) => (
                  <li style={{ overflow: 'hidden' }}>{item}</li>
                ))}
              </ul>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <h3>Link</h3>
              <Typography sx={{ mt: 2 }}>
                <a href={data.link}>{data.link}</a>
              </Typography>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Button onClick={handleOpen}>More info...</Button>
    </div>
  );
}
