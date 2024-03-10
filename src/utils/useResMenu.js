import { useEffect,useState } from "react"
import { MENU_URL } from './constants'

const useResMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    })
    const fetchData = async() => {
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();
        console.log("hook json", json);
        setResInfo(json.data);
    }
    return resInfo;
}
export default useResMenu;