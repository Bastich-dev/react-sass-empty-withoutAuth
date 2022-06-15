// __CUSTOMNAME__
// __CUSTOMLOWERNAME__

import React from "react"

const __CUSTOMNAME__Context = React.createContext()

export function use__CUSTOMNAME__() {
  return React.useContext(__CUSTOMNAME__Context)
}

export default function __CUSTOMNAME__ContextProvider({ children, initData }) {
  const [__CUSTOMLOWERNAME__Data, set__CUSTOMNAME__Data] = React.useState(initData)
  const resetData = () => {
    set__CUSTOMNAME__Data(initData)
  }

  return <__CUSTOMNAME__Context.Provider value={{ __CUSTOMLOWERNAME__Data, set__CUSTOMNAME__Data, resetData }}>{children}</__CUSTOMNAME__Context.Provider>
}
