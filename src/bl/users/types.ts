import { UserCredential } from "firebase/auth";


export type LoginData = {
    email: string;
    password: string;
};
export type SignupData = {
    fullName: string;
    email: string;
    password: string;
    avatar: string;
}
export type UserAuthData =UserCredential['user'];

export type UserProfile  = {
    id?: string;
    email?: string;
    avatar?: string;
    image?: string;
    fullName?: string;
    username?: string;
    sessions?: string[];
    token?: string;
  };

  export type FirebaseContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    // user?: null | undefined|UserAuthData;
    userCredential?: UserAuthData | null;
    logout: () => Promise<void>;
    // login: () => void;
    firebaseRegister: (data: SignupData) => Promise<UserCredential>;
    firebaseEmailPasswordSignIn: (email: string, password: string) => Promise<UserCredential>;
    firebaseGoogleSignIn: () => Promise<UserCredential>;
    firebaseGithubSignIn: () => Promise<UserCredential>;
    firebaseTwitterSignIn: () => Promise<UserCredential>;
    // resetPassword: (email: string) => Promise<void>;
    firebaseUpdateProfile: (data: UserProfile)=>Promise<void>;
  };

  export interface AuthProps {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    userCredential: UserAuthData|null;
    // user: UserProfile | null;
    token?: string | null;
  }

  export interface AuthActionProps {
    type: string;
    payload?: AuthProps;
  }