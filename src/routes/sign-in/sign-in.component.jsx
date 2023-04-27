import { signInWithGooglePopup, createUserDocumentfromAuth } from '../../utils/firebase/firebase.utils' 


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentfromAuth(user);
    }

    return(
        <div>
        <h1>Welcome to sign-in page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    );
}

export default SignIn;