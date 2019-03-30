import React from "react";
import { Global } from "@emotion/core";
import "./styles.css";
export function GlobalStyle() {
  return (
    <Global
      styles={{
        body: {
          background: "#fff",
          // fontFamily: BODY_FONT,
          color: "#212121",
          fontSize: "14px",
          lineHeight: "1.5"
        }
      }}
    />
  );
}
