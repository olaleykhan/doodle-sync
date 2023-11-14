import { UserCredential } from "firebase/auth";


export type LoginData = {
    email: string;
    password: string;
};
export type SignupData = {
  displayName: string;
    email: string;
    password: string;
    username: string;
}
export type UserAuthData =UserCredential['user'];

export type UserProfile  = {
    id?: string;
    email?: string|null;
    photoURL?: string|null;
    displayName?: string|null;
    username?: string|null;
    sessions?: string[];
    token?: string;
  };

  export type FirebaseContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: null | undefined|UserProfile;
    userCredential?: UserAuthData | null;
    logout: () => Promise<void>;
    // login: () => void;
    firebaseRegister: (data: SignupData) => Promise<void>;
    firebaseEmailPasswordSignIn: (email: string, password: string) => Promise<void>;
    firebaseGoogleSignIn: () => Promise<void>;
    firebaseGithubSignIn: () => Promise<void>;
    firebaseTwitterSignIn: () => Promise<void>;
    // resetPassword: (email: string) => Promise<void>;
    firebaseUpdateProfile: (data: UserProfile)=>Promise<void>;
  };

  export interface AuthProps {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    userCredential: UserAuthData|null;
    user: UserProfile | null;
    token?: string | null;
  }

  export interface AuthActionProps {
    type: string;
    payload?: AuthProps;
  }