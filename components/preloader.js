"use client";

import { OrbitProgress } from "react-loading-indicators";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white bg-opacity-75">
      <OrbitProgress
        variant="split-disc"
        color="black"
        size="medium"
        text=""
        textColor=""
      />
    </div>
  );
};

export default PreLoader;
