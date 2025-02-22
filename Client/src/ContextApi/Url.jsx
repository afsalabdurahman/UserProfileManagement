import React, { createContext, useState } from "react";

// Create context
let UrlContext = createContext();

// Context Provider Component
const UrlContextProvider = ({ children }) => {
  const [data, setData] = useState();
  console.log(data,"url contexst")

  return (
    <UrlContext.Provider value={{ data, setData }}>
      {children} {/* Render the children passed to the provider */}
    </UrlContext.Provider>
  );
};

export { UrlContext, UrlContextProvider };  // Export the context and the provider
