import './styles.css';
import {useState} from 'react';
import {useForm} from 'react-hook-form';

export const LoginPage = () => {

    const [mode, setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    const loginUser = (formVals) => {
        console.log("Login Submitted", formVals)
    }

    const signUpUser = (formVals) => {
        console.log("Sign Up Submitted", formVals)
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
