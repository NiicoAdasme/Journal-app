import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import Swal from 'sweetalert2';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // const {msgError} = useSelector(state => state.ui);

    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: ''
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);


    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ){
            dispatch( startRegisterWithEmailPasswordName(name, email, password) );
        }

        reset();
    };

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            // dispatch( setError('Name is required') );
            Swal.fire({
                title: 'Error!',
                text: 'Name is required',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }else if( !validator.isEmail( email ) ){
            // dispatch( setError('Email is not valid') );
            Swal.fire({
                title: 'Error!',
                text: 'Email is not valid',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }else if( password !== password2 ){
            // dispatch( setError('Password not match') );
            Swal.fire({
                title: 'Error!',
                text: 'Password not match',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }else if( password.length <5 ){
            // dispatch( setError('Password is too weak or common to use') );
            Swal.fire({
                title: 'Error!',
                text: 'Password is too weak or common to use',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        dispatch( removeError() );
        return true;

    };


    return (
        <>
        <h3 className="auth__title mb-5">Register</h3>

        <form 
            onSubmit={handleRegister}
            className="animate__animated animate__fadeIn"
        >

            {
                // (msgError) &&
                // <div className="auth__alert-error">
                //     <span> {msgError}</span>
                // </div>
            }

            <input
                type="text"
                name="name"
                placeholder="Name"
                className="auth__input"
                autoComplete="off"
                onChange={handleInputChange}
                value={name}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="auth__input"
                autoComplete="off"
                onChange={handleInputChange}
                value={email}
            />

            <input type="password"
                name="password"
                placeholder="Password"
                className="auth__input"
                onChange={handleInputChange}
                value={password}
            />

            <input type="password"
                name="password2"
                placeholder="Confirm Password"
                className="auth__input"
                onChange={handleInputChange}
                value={password2}
            />

            <button 
                type="submit"
                className="btn btn-primary btn-block mb-5"
            >
                Register
            </button>

            <hr />

            <Link 
                to="/auth/login"
                className="link" 
            >
                Alredy register
            </Link>

        </form>

    </>
    )
}
