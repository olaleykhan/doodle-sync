// action - state management
import { REGISTER, LOGIN, LOGOUT } from './actions';

// types
import { AuthProps, AuthActionProps } from '@/bl/users';

// initial state
export const initialState: AuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
  userCredential: null
};


const auth = (state = initialState, action: AuthActionProps) => {
  switch (action.type) {
    case REGISTER: {
      const {  userCredential, user } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        userCredential,
        user
      };
    }
    case LOGIN: {
      const { userCredential, user } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        userCredential,
        user,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null,
        userCredential: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
