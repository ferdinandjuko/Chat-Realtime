import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios'
import { loginRoute } from '../utils/APIRoutes';

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const toastifyError = {
        position: 'top-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
    }

    useEffect(() => {
        if (localStorage.getItem("chat-app-user")) {
            navigate('/')
        }
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!handleValidation()) {
            return;
        }

        const { username, password } = user;

        try {
            const { data } = await axios.post(loginRoute, {
                username,
                password,
            });

            if (data.status === false) {
                toast.error(data.msg, toastifyError);
                return;
            }

            if (data.status === true) {
                localStorage.setItem(
                    "chat-app-user",
                    JSON.stringify(data.user)
                );

                navigate("/");
            }
        } catch (error) {
            console.error("Login error:", error);
            console.error("Backend response:", error.response?.data);

            toast.error(
                error.response?.data?.msg ||
                "Unable to connect to the server.",
                toastifyError
            );
        }
    };

    const handleValidation = () => {
        const { username, password } = user;
        if (password === "" || username === "") {
            toast.error('Username and Password is required', toastifyError)
            return false
        }
        return true
    }

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    return (<>
        <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="Logo" />
                </div>
                <input type="text" name="username" placeholder='Username' id="" onChange={(e) => handleChange(e)} />
                <input type="password" name="password" placeholder='Password' id="" onChange={(e) => handleChange(e)} />
                <button type="submit">Login In</button>
                <span>Don't have an acount ? <Link to="/register">Register</Link></span>
            </form>
        </FormContainer>
        <ToastContainer />
    </>)
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 8rem;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: .1rem #997af0 solid;
                outline: none;
            }
        }
        button {
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;   
            border: none;
            font-weight: bold;
            border-radius: 0.4rem;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 1rem;
            &:hover {
                background-color: #4e0eff;
            }
        }
        span {
            color: #fff;
            text-transform: uppercase;
            a {
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
`
export default Login