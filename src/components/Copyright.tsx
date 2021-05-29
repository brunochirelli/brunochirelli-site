import React from "react";
import { Typography } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

const Copyright = () => {
  const date = new Date();

  return (
    <>
      <div className="copyright">
        <Typography
          align="center"
          variant="overline"
          component="div"
          style={{ color: "black", fontSize: "0.6rem" }}
        >
          Bruno Chirelli {date.getFullYear()} - Todos os direitos reservados
        </Typography>
      </div>
    </>
  );
};

export default Copyright;
