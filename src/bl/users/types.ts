import { UserCredential } from "firebase/auth";


export type LoginData = {
    email: string;
    password: string;
};
export type UserProfile  = {
    id?: string;
    email?: string;
    avatar?: string;
    image?: string;
    fullName?: string;
  };

  export type FirebaseContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null | undefined;
    logout: () => Promise<void>;
    // login: () => void;
    firebaseRegister: (email: string, password: string) => Promise<UserCredential>;
    // firebaseEmailPasswordSignIn: (email: string, password: string) => Promise<UserCredential>;
    firebaseGoogleSignIn: () => Promise<UserCredential>;
    firebaseGithubSignIn: () => Promise<UserCredential>;
    firebaseTwitterSignIn: () => Promise<UserCredential>;
    // resetPassword: (email: string) => Promise<void>;
    // updateProfile: VoidFunction;
  };

  export interface AuthProps {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null;
    token?: string | null;
  }

  export interface AuthActionProps {
    type: string;
    payload?: AuthProps;
  }