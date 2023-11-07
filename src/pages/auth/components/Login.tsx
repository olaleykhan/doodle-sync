// FirebaseUI
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// React stuff
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Auth service
import { auth } from '../../../services/firebase/firebase';

export default () => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // Action if the user is authenticated successfully
                    console.log(authResult, "authResult", redirectUrl, "redirectUrl");
                    return true;
                },
                uiShown: function() {
                    // This is what should happen when the form is full loaded. In this example, I hide the loader element.
                    document.getElementById('loader')!.style.display = 'none';
                }
            },
            signInSuccessUrl: 'http://localhost:5174/login', // This is where should redirect if the sign in is successful.
            signInOptions: [ 
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: true
                    }
                },
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: true
                    }
                },
                {
                    provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: true
                    }
                },
                {
                    provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: true
                    }
                }
            ],
            // tosUrl: 'https://www.example.com/terms-conditions', // URL to you terms and conditions.
            // privacyPolicyUrl: function() { // URL to your privacy policy
            //     window.location.assign('https://www.example.com/privacy-policy');
            // }
        });
    }, []);

    return (
        <>
            <h1 className="text-center my-3 title">Login Page</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center">Loading form</div>
        </>
    )
}