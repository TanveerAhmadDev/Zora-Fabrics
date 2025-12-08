import { createContext } from "react";

const serverURL = import.meta.env.VITE_SERVER_URL;
export const ServerContextApi = createContext();

console.log(serverURL);

const ServerContext = ({ children }) => {
  return (
    <ServerContextApi.Provider value={{ serverURL }}>
      {children}
    </ServerContextApi.Provider>
  );
};

export default ServerContext;
