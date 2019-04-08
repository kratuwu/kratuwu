import React, { forwardRef } from "react";

const Home = ({ forwardedRef }: any) => {
  return <div ref={forwardedRef}>Home</div>;
};

export default forwardRef((props, ref) => <Home forwardedRef={ref} />);
