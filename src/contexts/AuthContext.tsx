import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getAuth, createUserWithEmailAndPassword, UserCredential,  signInWithPopup, onAuthStateChanged, signOut    } from "firebase/auth";

import {LOGIN, LOGOUT} from './auth-reducer/actions';
import authReducer from './auth-reducer/auth';

import Loader from '@/components/Loader';
import { FirebaseContextType, AuthProps } from '@/bl/users';
import { googleAuthProvider, githubAuthProvider, twitterAuthProvider } from '@/services/firebase/firebase';

const initialState: AuthProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
  };

  const AuthContext = createContext<FirebaseContextType | null>(null);
  const auth = getAuth();

  const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user, "user in onAuthStateChanged")
              dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                user:{
                                    id: user.uid,
                                    email: user.email??"invalid email",
                                    fullName: user.displayName??"",
                                    avatar: user.photoURL??"",
                                    image: user.photoURL??"",

                                }
                            }
                        });
            } else {
              // User is signed out
              dispatch({type: LOGOUT});
            }
          });
    },[auth]);

    const firebaseRegister = async (email: string, password: string): Promise<UserCredential> => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    }

    const firebaseGoogleSignIn =  async () => {
        const cred = await signInWithPopup(auth, googleAuthProvider );
        return cred

    }

    const firebaseGithubSignIn = async () => {
        const cred = await signInWithPopup(auth, githubAuthProvider);
        return cred
    }
    const firebaseTwitterSignIn = async () => {
        const cred = await signInWithPopup(auth, twitterAuthProvider);
        return cred
    }
    const logout = async () => {
        try {
            await signOut(auth);            
        } catch (error) {
            console.log(error)   
        }        
    }
    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
      }

    
    return (
        <AuthContext.Provider
          value={{
            ...state,
            firebaseRegister,
            firebaseGoogleSignIn,
            firebaseGithubSignIn,
            firebaseTwitterSignIn,
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
  

