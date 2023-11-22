import React from 'react'
import Login from './Login';
import { Context } from './Login';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import Cookies from "js-cookie";
// const isauth=()=>{

//  const token = true;
//  return token;
//      const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//      console.log(token);
//     if (value.token === "toto"){
//         return false;
//     }else{
//         return true;
//     }
// }


const Protectedroutes = () => {

    // const userInfoStr = Cookies.get('userInfo');
    // let userInfo;
    // let user;

    // if (userInfoStr) {
    //     try {
    //         userInfo = JSON.parse(userInfoStr);
    //         console.log(userInfo.id);
    //         console.log(userInfo.token);

    //         user = userInfo.token
    //     } catch (error) {
    //         console.error("Erreur lors de la conversion du cookie en objet :", error);
    //     }
    // } else {
    //     console.log("Le cookie 'userInfo' n'existe pas ou a expiré");
    // }
    const token = localStorage.getItem('token');

    return token ? <Outlet/> : <Login/>
}

export default Protectedroutes
