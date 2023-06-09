import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const ConfirmationDialog = (props) => {
  const { open, onClose, onConfirm, title, description } = props;
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="cancel-popup"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          type="button"
          onClick={() => onClose()}
          style={{color:"white",backgroundColor:"#f14d54"}}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirm();
          }}
          autoFocus
          style={{color:"white",backgroundColor:"#80be32"}}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
