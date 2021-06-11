import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfile } from "../../services/firebase";
import SuggestedProfile from "./suggestedProfile";

export default function Suggestion({ userId,following,docId }) {
    const [profile, setProfile] = useState(null)


    useEffect(()=>{
        async function suggestedProfile(){
            const response = await getSuggestedProfile(userId,following);
            setProfile(response);
        }

        if(userId){

            suggestedProfile()
        }
 
        console.log('profile',profile)
    },[userId])


    return (!profile ? (
        <Skeleton count={1} height={150} className="mt-5" />
    ) : profile.length > 0 ? (
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-items justify-between mb-2">
                <p className="font-bold text-gray-base">Suggestion for you</p>
            </div>
            <div className="mt-4 grid gap-5">

                {profile.map((item)=>(
                    <SuggestedProfile
                        key={item.docId}
                        userDocId={item.docId}
                        username={item.username}
                        profileId={item.userId}
                        userId={userId}
                        docId={docId}
                    />
                ))}

            </div>
        </div>
    ) : null);

}

Suggestion.propTypes = {
    userId: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    following: PropTypes.array.isRequired
}