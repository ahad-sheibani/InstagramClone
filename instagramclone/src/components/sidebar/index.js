import useUser from "../../hooks/use-user"
import Suggestion from "./suggestion"
import User from "./user"

export default function SideBar(){

    const {
        user:{fullName,username,userId}
    }=useUser()

    
    return(
        <div className="p-4">

            <User username={username} fullName={fullName}/>
            <Suggestion userId={userId}/>

        </div>
    )
}