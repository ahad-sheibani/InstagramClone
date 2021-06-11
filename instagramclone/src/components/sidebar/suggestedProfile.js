
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateFollowedUserFollowers, updateLoggedInUserFollowing } from '../../services/firebase';

export default function SuggestedProfile({ userId, username, profileId, userDocId,docId }) {
    const [followed, setFollowed] = useState(false);


    async function handleFollowUser(){
        setFollowed(true);

        await updateLoggedInUserFollowing(docId,profileId,false)

        await updateFollowedUserFollowers(userId,userDocId,false)
    }

    return !followed ? (<div className="flex flex-row items-center align-items justify-between">
        <div className="flex items-center justify-between">
            <img
                className="rounded-full w-8 flex mr-3"
                src={`/images/avatars/${username}.jpg`}
                alt=""
            />
            <Link to={`/p/${username}`}>
                <p className="font-bold text-sm">{username}</p>
            </Link>

        </div>
        <button
            className="text-xs font-bold text-blue text-blue-medium"
            type="button"
            onClick={ handleFollowUser}
        >
            Follow
            </button>


    </div>) : null

}


SuggestedProfile.propTypes = {
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userDocId: PropTypes.string.isRequired,

}