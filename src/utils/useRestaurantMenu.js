import { MENU_API } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestaurantMenu =(resId)=>{
  const [resinfo, setResInfo] = useState(null);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json?.data);
  }

  return resinfo;
}

export default useRestaurantMenu;