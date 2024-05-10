"use client";

import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>Error Page</div>
    </>
  );
};

export default ErrorPage;
