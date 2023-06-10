import {useState} from 'react';
import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import { createUserDocumentfromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'

const defaultformFields = {
    email:'',
    password:'',
}

const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentfromAuth(user);
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const {email, password} = formFields

    const resetFormFields = () => {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(response);
            resetFormFields();
        }catch(error){

            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error)
            }

        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
 
    return(
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>
            <div className='buttons-container'>
            <Button type="submit" onClick={handleSubmit}>Sign In</Button>
            <Button type="button" buttonType='google' onClick={signInWithGoogle}>Goggle sign in</Button>
            </div>
        </form>
    </div>
 )   
}

    export default SignInForm;