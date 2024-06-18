import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../common/constants";

const RestaurantMenu = () => {
    const [resmenu, setResMenu] = useState([]);
    const {resId} = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        const result = jsonData?.data?.cards[2]?.card?.card?.info;
        setResMenu(result);
    }

    return (
        <>
            <h1>{resmenu.name}</h1>
        </>
    );
}

export default RestaurantMenu;