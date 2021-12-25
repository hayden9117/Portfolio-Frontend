import AppContext from "../../Context/AppContext";
import { useContext } from "react";
import { Box, Typography } from "@material-ui/core";
import Cards from "./HomeCards/Cards";
import "../../App.css";
function Home() {
  const { setNavTitle } = useContext(AppContext);

  setNavTitle("Richard Haydens Portfolio");

  return (
    <Box sx={{ textAlign: "center", marginTop: "12%" }}>
      <Box
        sx={{
          marginTop: "12%",
          maxWidth: "40%",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          data-testid="bodyText"
          variant="subtitle1"
          sx={{ textAlign: "left" }}
        >
          Neutra intelligentsia selvage, franzen williamsburg banjo lomo
          waistcoat yr. Vinyl brooklyn wayfarers chicharrones banh mi messenger
          bag, lumbersexual letterpress kitsch farm-to-table. Viral vice
          church-key, you probably havent heard of them fanny pack put a bird on
          it prism ethical tumblr flannel palo santo. Direct trade cloud bread
          tote bag keffiyeh, selfies gastropub kombucha chillwave hexagon
          mustache fashion axe tattooed whatever vaporware butcher. Tilde
          unicorn williamsburg, forage adaptogen hexagon 8-bit palo santo
          activated charcoal craft beer snackwave food truck. Dummy text? More
          like dummy thicc text, amirite?
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "12%" }}>
        <Cards />
      </Box>
    </Box>
  );
}
export default Home;
