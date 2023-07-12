import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import loader from '../assets/loader.gif'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios'
import { setAvatarRoute } from '../utils/APIRoutes';
import { Buffer } from 'buffer'
import { async } from 'q'
// import { setAvatar } from '../../../back/controllers/userController'

export default function SetAvatar() {
    const api = "https://api.multiavatar.com/45678945"
    const navigate = useNavigate()
    const [avatars, setAvatars] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState(undefined)
    const toastifyError = {
        position: 'bottom-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
    }

    const setProfilePicture = async () => {
        if(selectedAvatar === undefined) {
            toast.error('Please select an avatar', toastifyError)
        } else {
            const user = await JSON.parse(localStorage.getItem("chat-app-user"))
            console.log('user', user._id, user)
            const {data} = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar],
            })

            if(data.isSet) {
                user.isAvatarImageSet = true
                user.avatarImge = data.image
                localStorage.setItem("chat-app-user", JSON.stringify(user))
                navigate('/')
            } else {
                toast.error('Error setting the avatar', toastifyError)
            }
        }
    };
    useEffect(() => {
        if(!localStorage.getItem("chat-app-user")) {
            navigate('/login')
        }
    }, [])
    useEffect(() => {
        async function setAvatarList() {
            const data = []
            for(let i=0; i<4; i++) {
                const image = await axios.get(
                    `${api}/${Math.round(Math.random() * 1000)}`
                );
                /*const buffer = Buffer.from(image.data, 'base64')
                data.push(buffer.toString('base64'))*/
                const buffer = new Buffer(image.data)
                data.push(buffer.toString('base64'))
                setAvatars(data)
                setIsLoading(false)
            }

        }
        setAvatarList()
    }, [api])
    return (
        <>
        {
            isLoading ? (<Container>
                <img src={loader} alt="loader" className='loader' />
            </Container>) : (

                <Container>
                <div className="title-container">
                    <h1>Pick an avatar as your profile picture</h1>
                </div>
                <div className="avatars">
                    {
                        avatars.map((avatar, index) => {
                            return (<div key={index} className={`avatar ${
                                selectedAvatar === index ? "selected": ""}`}>
                                    <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" 
                                        onClick={() => setSelectedAvatar(index)}
                                    />
                                </div>)
                        })
                    }
                </div>
                <button onClick={()=>setProfilePicture()} className="submit">Set as profile picture</button>
            </Container>
        )}
            <ToastContainer />
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-color: #131324;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    .loader {
        max-inline-size: 100%;
    }

    .title-container {
        h1 {
            color: #fff;
        }
    }
    .avatars {
        display: flex;
        gap: 2rem;
        .avatar {
            border: 0.4rem solid transparent;
            padding: 0.4rem;
            border-radius: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;
            img {
                height: 10rem;
            }
        }
        .selected {
            border: 0.4rem solid #4e0eff; // #997af0;
        }
    }
    .submit {
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
    .title-container {}`