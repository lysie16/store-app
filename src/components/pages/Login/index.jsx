import './styles.css';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const LoginPage = () => {

    const [mode, setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    const history = useHistory();

    const loginUser = async(formVals) => {

        try{
            console.log("Login Submitted", formVals)
            const auth = getAuth(); 
            console.log("before", auth);
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            history.push('/');
            console.log("after login", auth);
         } catch(error) {
                console.log("Error connecting to firebase", error)
            }
    }

    const signUpUser = async(formVals) => {
        console.log("Sign Up Submitted", formVals)
        const auth = getAuth();
        try {
            const signUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("New user was created", signUpUser);
            history.push('/');
        }catch (error) {
            //handle incorrect password in here
            console.log("Error")
        }
    }
    
return (
    <div className="pets-page">

        { mode === "login" && (
            <form className="form-layout">
                <h3>Welcome back, please sign in</h3>
                <br />
                <label htmlFor="user">Username</label>
                <input type="email" name="user" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />

                <input type="submit" value="Login" />
                <p>Don't have an account with us yet? Create a new account
                    with your email and password.
                </p>
                <button onClick={() => setMode("signup")}>Sign Up</button>
            </form>
        )

        }

        { mode === "signup" && (
            <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                <h3>Create a new account now!</h3>
                <br />
                <label htmlFor="user">Email</label>
                <input type="email" name="user" required {...reigister('user')} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required {...register('password')}/>

                <label htmlFor="passwordConfirm"> Confirm Password</label>
                <input type="password" name="passwordConfirm" required {...register('passwordConfirm')}/>

                <input type="submit" value="Sign Up" />
                <p>Have an account already?</p>
                <button onClick={() => setMode("login")}>Sign Up</button>
            </form>
        )

        }
    </div>
  )
}
