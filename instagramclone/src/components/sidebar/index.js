import useUser from "../../hooks/use-user"
import Suggestion from "./suggestion"
import User from "./user"

export default function SideBar(){

    const {
        user:{ docId,fullName,username,userId,following}
    }=useUser()
        console.log("🚀 ~ file: index.js ~ line 10 ~ SideBar ~ docId", docId)

    
    return(
        <div className="p-4">

            <User username={username} fullName={fullName}/>
            <Suggestion userId={userId} following={following} docId={docId}/>

        </div>
    )
}
