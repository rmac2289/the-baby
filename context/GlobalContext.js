import React, { createContext, useState, useEffect } from "react";
import fakeData from "../fakeData.json";
export const GlobalContext = createContext();
export const AuthContext = createContext();
export const NapContext = createContext();
export const NapTimerContext = createContext();

export const GlobalContextProvider = (props) => {
  const [data, setData] = useState(fakeData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [napIsActive, setNapIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (napIsActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!napIsActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [napIsActive, seconds]);

  return (
    <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
      <GlobalContext.Provider value={[data, setData]}>
        <NapContext.Provider value={[napIsActive, setNapIsActive]}>
          <NapTimerContext.Provider value={[seconds, setSeconds]}>
            {props.children}
          </NapTimerContext.Provider>
        </NapContext.Provider>
      </GlobalContext.Provider>
    </AuthContext.Provider>
  );
};
