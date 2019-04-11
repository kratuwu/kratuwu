import React, { forwardRef } from "react";

const Contact = ({ forwardedRef }: any) => {
  return <div ref={forwardedRef}>Contact</div>;
};

export default forwardRef((props, ref) => <Contact forwardedRef={ref} />);
