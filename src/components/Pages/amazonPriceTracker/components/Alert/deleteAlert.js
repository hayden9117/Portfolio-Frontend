import { Button, Snackbar } from "@mui/material";

import { deleteProduct } from "../../api/api";
export const DeleteAlert = (props) => {
  const { open, setOpenSnack, id } = props;

  const handleDelete = (prop) => {
    if (prop) {
      deleteProduct(id);
      setOpenSnack(false);
    } else {
      setOpenSnack(false);
    }
  };
  return (
    <>
      <Snackbar
        open={open}
        message="Are you sure you want to delete this product?"
        action={
          <>
            {" "}
            <Button onClick={() => handleDelete(true)}>yes</Button>
            <Button onClick={() => handleDelete(false)}>no</Button>
          </>
        }
      ></Snackbar>
    </>
  );
};
