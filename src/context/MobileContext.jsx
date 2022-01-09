import { createContext, useEffect, useState } from "react";

export function getWidth() {
    return document.documentElement.clientWidth
}

export function getHeight() {
    return document.documentElement.clientHeight
}

export const MobileContext = createContext()

export default function MobileContextProvider({children}) {
    const [mobile, setMobile] = useState(getWidth() < 540)

    useEffect(() => {
        const update = () => {
            const isMobile = getWidth() < 540

            console.log(getHeight())

            if (isMobile && !mobile) setMobile(true)
            else if (!isMobile && mobile) setMobile(false)
        }

        window.addEventListener('resize', update)
        
        return () => {
            window.removeEventListener('', update)
        }
    }, [mobile])

    return <MobileContext.Provider value={mobile}>{children}</MobileContext.Provider>
}