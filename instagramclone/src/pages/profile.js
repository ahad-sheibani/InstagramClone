
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const { username } = useParams()
  const [userExists, setUserExists] = useState(false)
  const [user, setUser] = useState(null)
  
  const history = useHistory()
  console.log("🚀 ~ file: profile.js ~ line 9 ~ Profile ~ username", username)

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      console.log("🚀 ~ file: profile.js ~ line 18 ~ checkUserExists ~ user", user)
      if (user?.userId) {
        setUser(user);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, history]);
  
  return userExists?( 
  <div className="bg-gray-background">
    {username}
  </div>
  ): "ahad"
}