import { Dialog, Typography , DialogTitle} from "@material-ui/core";

import React from "react";



export default function CardsDialog(props){
    const [open, setOpen] = React.useState(false);

    const truncate = (str) => {
        if (str.length > 150) return str.slice(0, 150);
        return `${str}...`;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Typography style={{ justifyContent: "flex-end" }} data-testid="principal-seymour-skinner">
                {truncate(props.description)}
                <Typography sx={{ color: "rebeccapurple" }} onClick={handleClickOpen}>
                    ...See More
                </Typography>
            </Typography>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle sx={{ mb: -3, marginRight: "auto", marginLeft: "auto" }}>Description</DialogTitle>
                <Typography sx={{ padding: 2 }}>{props.description}</Typography>
            </Dialog>
        </>
    );
}