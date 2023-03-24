import React from "react";
import Error from "components/pages/Error";

import SvgTaken from "draws/Taken";

const Error404 = () => (
  <Error
    image={<SvgTaken />}
    title="Página não encontrada"
    description="Ops! Essa página foi abduzida."
  />
);

export default Error404;
