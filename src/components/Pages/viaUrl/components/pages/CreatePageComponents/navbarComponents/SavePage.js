import { Button } from "@mui/material";
import { createPage } from "../../../../api";
import { SaveSvg } from "../tool-icons/NavSVGS";
export const SavePage = (props) => {
  const { config, setConfig, token } = props;
  const handleClick = async () => {
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
    });

    let item = config;
    item.id = token.token;
    item.pageName = token.username;
    item.url = `http://${window.location.hostname}:3000/${token.username}`;
    let promise = await createPage(item);
    console.log(promise);
  };
  return (
    <>
      <Button
        id="demo-customized-Button"
        aria-haspopup="true"
        disableElevation
        onClick={handleClick}
      >
        <SaveSvg />
      </Button>
    </>
  );
};
