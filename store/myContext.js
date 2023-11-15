"use client";
import { createContext, useContext } from "react";

export const myContext = createContext(null);

export function MyProvider({ children }) {
  const info = "please subscribe my channel";
  const value = 1000;
  return (
    <myContext.Provider value={{ info, value }}>{children}</myContext.Provider>
  );
}

export function useMyContext() {
  const ContextValue = useContext(myContext);
  if (!ContextValue) {
    throw new Error("Error");
  }
  return ContextValue;
}
