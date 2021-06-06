import { useEffect } from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar/index";
import TimeLine from "../components/timeine";
import "../styles/app.css"



export default function Dashboard(){
    useEffect(()=>{
        document.title='instagram'
    },[])

    return (
        <div className="bg-gray-background">
        <Header/>
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <TimeLine/>
            <SideBar/>

        </div>


        </div>
    )
}