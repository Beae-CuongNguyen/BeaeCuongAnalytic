import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const url = "https://duy.beae.dev";

const token ="hahaahah";

export const axiosClient = axios.create({
    baseURL: `${url}`,
    headers: {
        "Content-Type": "application/json",
        "X-Crisp-Tier": "plugin",
        "Authorization": `Beaer: ${token}`,
    }
});