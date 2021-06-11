import user from '../components/sidebar/user';
import { firebase, FieldValue } from '../lib/firebase'


export async function doesUsernameExist(username) {

    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();


    return result.docs.map((user) => user.data().length > 0)
}

export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))
    return user
}
export async function getSuggestedProfile(userId, following) {
    const result = await firebase
        .firestore()
        .collection('users')
        .limit(10)
        .get();



    return result.docs.map((user) => ({ ...user.data(), docId: user.id }))
        .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}


export async function updateLoggedInUserFollowing(docId, profileId, isFollowingProfile) {

    return firebase
    .firestore()
    .collection('users')
    .doc(docId)
    .update({
        following: isFollowingProfile ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
    })
 
}
export async function updateFollowedUserFollowers(userId,userDocId,docId, isFollowingProfile) {

    return firebase
    .firestore()
    .collection('users')
    .doc(userId,userDocId)
    .update({
        followers: isFollowingProfile ? FieldValue.arrayRemove(docId) : FieldValue.arrayUnion(docId)
    })

}
export async function getPhotos(userId,following) {

    const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId','in',following)
    .get();

    const userFollowedPhotos = result.docs.map((photo)=>({
        ...photo.data(), 
        docId:photo.id
    }));

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async(photo)=>{
            let userLikedPhotos = false;

            if(photo.likes.includes(userId)){
                userLikedPhotos = true;
            }

            const user = await getUserByUserId(photo.userId);
            const {username}=user[0];
            return {username,...photo,userLikedPhotos}
        }))

        return photosWithUserDetails
}