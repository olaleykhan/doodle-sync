import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getAuth, createUserWithEmailAndPassword, UserCredential,  signInWithPopup, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword     } from "firebase/auth";
import { createUser, getUserById } from '@/services/firebase/userServices';

import {LOGIN, LOGOUT} from './auth-reducer/actions';
import authReducer from './auth-reducer/auth';

import Loader from '@/components/Loader';
import { FirebaseContextType, AuthProps, SignupData, UserProfile } from '@/bl/users';
import { googleAuthProvider, githubAuthProvider, twitterAuthProvider } from '@/services/firebase/firebase';

const initialState: AuthProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
    userCredential: null,
  };

  const AuthContext = createContext<FirebaseContextType | null>(null);
  const auth = getAuth();

  const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        onAuthStateChanged(auth, async (userCred) => {
          console.log("ON AUTH STATE CHANGED")
            if (userCred) {
              console.log("userCred", userCred.uid)
              const userDetails = await getUserById(userCred.uid);

              dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                userCredential: userCred,
                                user:userDetails
                            }
                        });
            } else {
              // User is signed out
              dispatch({type: LOGOUT});
            }
          });
    },[auth.currentUser]);

    const firebaseRegister = async (data:SignupData): Promise<void> => {
    
        
      const cred = await createUserWithEmailAndPassword(auth, data.email, data.password);    
      const UserProfile:UserProfile = {        
        id: cred.user.uid,
          email: data.email,
          displayName: data.displayName,
          photoURL:cred.user.photoURL?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          username: data.username,
          sessions:[]
      }
      await firebaseUpdateProfile(data as UserProfile);
      await createUser(UserProfile);
    }

    const firebaseGoogleSignIn =  async () => {
        const {user} = await signInWithPopup(auth, googleAuthProvider );
        const userProfile:UserProfile = {
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          // use email as username. user is allow to change it
          username: user.email,
          sessions:[]
        }
        await createUser(userProfile);

    }

    const firebaseGithubSignIn = async () => {
      const {user} = await signInWithPopup(auth, githubAuthProvider );
      const userProfile:UserProfile = {
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        username: user.email,
        sessions:[]
      }
      await createUser(userProfile);
    };
    
    // TODO: fix twitter. it does not work yet
    const firebaseTwitterSignIn = async () => {
         await signInWithPopup(auth, twitterAuthProvider);
    }
    const firebaseUpdateProfile = async (data:UserProfile) => {
      
        try {
            const user = auth.currentUser;

            // console.log(user, "user from google", state.user, "state user")
            if (user) {
              await updateProfile(user,{photoURL: data.photoURL, displayName: data.displayName} );
            }
          } catch (error) {
            console.log(error)   
          }
    }
    const logout = async () => {
        try {
            await signOut(auth);            
        } catch (error) {
            console.log(error)   
        }        
    }

    const firebaseEmailPasswordSignIn = async (email: string, password: string) => {
         await signInWithEmailAndPassword(auth, email, password);
    }
    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
      }

    
    return (
        <AuthContext.Provider
          value={{
            ...state,
            firebaseEmailPasswordSignIn,
            firebaseRegister,
            firebaseGoogleSignIn,
            firebaseGithubSignIn,
            firebaseTwitterSignIn,
            firebaseUpdateProfile,
            logout,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
    
  }

  export default AuthProvider;

  
export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) throw new Error('context must be use inside provider');
  
    return context;
  };
  

