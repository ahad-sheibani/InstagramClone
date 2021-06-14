import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";

export default function Profile() {
    const { username } = useParams()
    console.log("🚀 ~ file: profile.js ~ line 8 ~ Profile ~ username", username)
    const [userExists, setUserExists] = useState(false)
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        async function checkUserExists() {
            //  const user = username;
            const user = await getUserByUsername(username);
            if (user.length > 0) {
                setUser(user)
                setUserExists(true);
                console.log("🚀 ~ file: profile.js ~ line 19 ~ checkUserExists ~ setUserExists", setUserExists)
            } else {
                history.push(ROUTES.NOT_FOUND)
            }
        }

        checkUserExists()
        console.log('userr',user)
    }, [username,history])

    return userExists?(
        <div className="bg-gray-background">
            <div className="mx-auto max-w-screen-lg">
                {/* {user.fullName} */}
            </div>
        </div>
    ):null ;
}
