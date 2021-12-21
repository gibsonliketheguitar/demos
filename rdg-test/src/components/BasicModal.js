//https://codesandbox.io/s/e61pj?file=/demo.js:0-1197
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import useTableState from '../hooks/useTableState';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { tableState, dispatch } = useTableState()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const { targetIndx, width } = data
    const trgIndx = parseInt(targetIndx)
    const w = parseInt(width)

    const newColumns = tableState.columns.map((column, indx) => {
      return (indx === trgIndx) ? { ...column, width: w } : { ...column }
    })
    dispatch(({ type: 'update', data: { columns: newColumns } }))
  };


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Width of Column: index range 0 : 1
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("targetIndx")} />
            {errors.id && <span>This field is required</span>}
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("width", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.width && <span>This field is required</span>}
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}