import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";




const AuthContest = createContext();


export  function AuthProvider({children}){

 

  const navigate = useNavigate();

    const [currentUser,setCurrentUser] = useState(null);
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(true)


     // Listen for Login / Logout
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    try {
      if (user) {
        setCurrentUser(user);

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          setUserData(null);
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  });

  return unsubscribe;
}, []);


const saveInterview = async (interviewData)=>{
    if(!currentUser){
     throw new Error("User not logged in");
    }

    try{
        const historyRef=collection(
          db,
          "users",
          currentUser.uid,
          "history"
        );

        const historyDoc = await addDoc(historyRef,{
          ...interviewData,
          createdAt: serverTimestamp(),
        })

        

    }
    catch(error){

    }


}

  // Logout Function
  const logout = async () => {
    await signOut(auth);
    navigate("/Login")
  };

 

  return (
    <AuthContest.Provider value={{
    currentUser,
    userData,
    loading,
    logout,
    saveInterview
  }}>
      {children}
    </AuthContest.Provider>
  );

}

export function useAuth() {
  return useContext(AuthContest);
}