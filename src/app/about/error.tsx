"use client";
import React from "react";

type Props = {
  error: Error;
};

const ErrorPage = (props: Props) => {
  const { error } = props;

  return (
    <div className="w-full text-center">
      <div className="text-2xl text-red-500">
        Error due to: {error.message}{" "}
      </div>
      <p>Handled by error.tsx in AppRouter</p>
    </div>
  );
};

export default ErrorPage;
