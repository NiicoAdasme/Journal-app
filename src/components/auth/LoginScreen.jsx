import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startFacebookLogin, startGithubLogin, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../hooks/useForm/useForm'
import { 
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton

} from "react-social-login-buttons";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });


    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    };

    const handleFacebookLogin = () => {
        dispatch( startFacebookLogin() );
    }

    const handleGithubLogin = () => {
        dispatch( startGithubLogin() );
    }

    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <hr />

                <div className="auth__social-newtworks">
                    <p>Login Social Networks</p>

                    {/* <div
                        className="google-btn mb-5 mt-1"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div> */}

                    {/* <button className="loginBtn loginBtn--google">
                        Login with Google
                    </button> */}

                    <GoogleLoginButton onClick={handleGoogleLogin} size="30px" />

                    <FacebookLoginButton onClick={handleFacebookLogin} size="30px" />

                    <GithubLoginButton onClick={handleGithubLogin} size="30px" />

                    {/* <button 
                        type="button"
                        className="loginBtn loginBtn--facebook"
                        onClick={handleFacebookLogin}
                    >
                        Sign in with Facebook
                    </button> */}

                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new Account
                </Link>

            </form>
        </>
    )
}
