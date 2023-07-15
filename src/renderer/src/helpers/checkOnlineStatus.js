export const checkOnlineStatus = async () => {
    try {
        const online = await fetch("https://jsonplaceholder.typicode.com/users");
        return online.status >= 200 && online.status < 300
    } catch (error) {
        return false;
    }
}

