import { Button } from "@mui/material";
import useConfig from "../UseConfig";

const handleLink = (props) => {
  console.log(props);
};

export const AddLink = (props) => {
  const { url } = props;
  const { config, setConfig } = useConfig();
  handleLink(props);
  console.log(config);

  return (
    <>
      <Button>{props}</Button>
    </>
  );
};
