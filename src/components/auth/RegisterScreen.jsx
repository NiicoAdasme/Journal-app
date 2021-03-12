import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm/useForm'
import validator from 'validator';

export const RegisterScreen = () => {


    const initialForm = {
        name: 'Nicolas Adasme',
        email: 'nico@nicoadasme.cl',
        password: '12345',
        password2: '12345'
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);


    const {name, email, password, password2} = formValues;


    const handleRegister = (e) => {
        e.preventDefault();

        isFormValid();

        if( isFormValid() ){
            console.log('Formulario valido');
        }

        reset();
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            console.log('Name is required');
            return false;
        }else if( !validator.isEmail( email ) ){
            console.log('Email is not valid');
            return false;
        }else if( password !== password2 ){
            console.log('Password not match');
            return false;
        }else if( password.length <5 ){
            console.log('Password is too weak or common to use');
            return false;
        }

        return true;

    }


    return (
        <>
        <h3 className="auth__title mb-5">Register</h3>

        <form onSubmit={handleRegister}>

            <div className="auth__alert-error">
                <p>Datos invalidos</p>
            </div>

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
