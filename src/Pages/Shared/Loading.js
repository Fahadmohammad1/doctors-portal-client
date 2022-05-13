import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-16 border-4 border-blue-400 border-t-transparent border-dashed rounded-full animate-spin h-16"></div>
    </div>
  );
};

export default Loading;
