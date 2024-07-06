"use client"
import { createContext, useContext, useState } from "react"

export const GlobalContext = createContext(null)

export default function GlobalContextProvider({ posts, children }) {
  return (
    <GlobalContext.Provider value={{ posts }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    )
  }
  return context
}
