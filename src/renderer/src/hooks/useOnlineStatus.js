import { useState } from "react"
import { checkOnlineStatus } from "../helpers/checkOnlineStatus"


const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState()

    setInterval(async () => {
        const result = await checkOnlineStatus();
        setIsOnline(result);
    }, 1000)
    return isOnline
}

export default useOnlineStatus;