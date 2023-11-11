import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getAuth, createUserWithEmailAndPassword, UserCredential,  signInWithPopup, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword     } from "firebase/auth";

import {LOGIN, LOGOUT} from './auth-reducer/actions';
import authReducer from './auth-reducer/auth';

import Loader from '@/components/Loader';
import { FirebaseContextType, AuthProps, SignupData, UserProfile } from '@/bl/users';
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
              dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                user:{
                                    id: user.uid,
                                    email: user.email??state.user?.email,
                                    fullName: user.displayName?? state.user?.fullName,
                                    avatar: user.photoURL??state.user?.avatar,
                                    image: user.photoURL??state.user?.avatar,

                                }
                            }
                        });
            } else {
              // User is signed out
              dispatch({type: LOGOUT});
            }
          });
    },[auth.currentUser]);

    const firebaseRegister = async (data:SignupData): Promise<UserCredential> => {
    
        
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password); 
        dispatch({
          type: LOGIN,
          payload: {
              isLoggedIn: true,
              user:{
                  email: data.email,
                  fullName: data.fullName,
                  avatar: data.avatar
              }
          }
      })       
      await firebaseUpdateProfile(data as UserProfile);

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
    const firebaseUpdateProfile = async (data:UserProfile) => {
      
        try {
            const user = auth.currentUser;

            console.log(user, "user from google", state.user, "state user")
            if (user) {
              await updateProfile(user,{photoURL: data.avatar, displayName: data.fullName} );
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
        const cred = await signInWithEmailAndPassword(auth, email, password);
        return cred
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
  

