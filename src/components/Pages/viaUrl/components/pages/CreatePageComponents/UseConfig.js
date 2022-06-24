import { useState } from "react";

export default function useConfig() {
  const configStructure = {
    links: { num: 0, url: [] },
    avatars: 0,
    background: "white",
    template: "column",
  };
  const getConfig = () => {
    const configString = localStorage.getItem("config");
    let userConfig = JSON.parse(configString);

    if (!configString) {
      userConfig = configStructure;
      return userConfig;
    } else if (configString) {
      return userConfig;
    }
  };

  const [config, setConfig] = useState(getConfig());

  const saveConfig = (userConfig) => {
    localStorage.setItem("config", JSON.stringify(userConfig));

    setConfig(userConfig);
  };

  return {
    setConfig: saveConfig,
    config,
  };
}
