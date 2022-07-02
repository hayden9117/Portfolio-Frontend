import { Button } from "@mui/material";
import { PreviewSVG } from "../tool-icons/NavSVGS";
export const Preview = (props) => {
  const { token } = props;
  return (
    <>
      <Button
        id="demo-customized-Button"
        aria-haspopup="true"
        href={`http://${window.location.hostname}:3000/ViaURL/${token.username}`}
        disableElevation
      >
        <PreviewSVG />
      </Button>
    </>
  );
};
