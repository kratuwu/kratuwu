import React, { forwardRef } from "react";

const About = ({ forwardedRef }: any) => {
  return <div ref={forwardedRef}>About</div>;
};

export default forwardRef((props, ref) => <About {...props} forwardedRef={ref} />);
