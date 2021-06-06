import { useEffect } from "react"
import "../styles/app.css"



export default function NotFound () {
    useEffect(()=>{
        document.title= "Not Found!";        
    }, [])
    return (
        <div className="bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
            <p className="text-center text-2xl">Not Found!</p>

            </div>

        </div>
    )

}