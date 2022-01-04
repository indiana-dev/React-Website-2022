import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const CursorContext = createContext()

export default function CursorContextProvider({children}) {
    const [type, setType] = useState(0)
    return <CursorContext.Provider value={{type, setType}}>{children}</CursorContext.Provider>
}