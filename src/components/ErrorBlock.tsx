import React from "react";
const ErrorBlock: React.FC<{ title: string; message: string }> = (props) => {
  return (
    <>
      <p>{props.title}</p>
      <p>{props.message}</p>
    </>
  );
};
export default ErrorBlock;
