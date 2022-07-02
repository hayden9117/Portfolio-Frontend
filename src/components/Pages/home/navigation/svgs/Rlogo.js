import {
  PinkText,
  BorderCircle,
  BlackText,
  BlueText,
} from "./RlogoParts/RlogoParts";
import { AboutMeSVG } from "./RlogoParts/AboutMeSVG";
import { ExperienceSVG } from "./RlogoParts/ExperienceSVG";
import { PortfolioSVG } from "./RlogoParts/PortfolioSVG";
import { SkillsSVG } from "./RlogoParts/SkillsSVG";
import { ContactSVG } from "./RlogoParts/ContactSVG";
import { useState, useEffect } from "react";

const Rlogo = (props) => {
  const [toggle, setToggle] = useState(false);
  const { width, height, title } = props;
  useEffect(() => {
    setToggle(!toggle);
  }, [title]);
  if (title === "About Me")
    return <AboutMeSVG width={width} height={height} toggle={toggle} />;
  if (title === "Skill Sets")
    return <SkillsSVG width={width} height={height} />;
  if (title === "Experience")
    return <ExperienceSVG width={width} height={height} />;
  if (title === "My Portfolio")
    return <PortfolioSVG width={width} height={height} />;
  if (title === "Contact Me")
    return <ContactSVG width={width} height={height} />;
  else {
    return <AboutMeSVG width={width} height={height} />;
  }
};

export default Rlogo;
