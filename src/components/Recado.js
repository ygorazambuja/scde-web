import React from "react";
import { Box } from "grommet";

const Recado = ({ recado }) => (
  <Box round border={{ color: "brand" }} pad="small">
    <Box>{recado.author}</Box>
    <Box>{recado.content}</Box>
  </Box>
);
export default Recado;
