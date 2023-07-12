import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
export default function Contacts({contacts, currentUser}) {
    const [currentUsername, setCurrentUsername] = useState(undefined)
    const [currentUserImage, setCurrentUserImage] = useState(undefined)
    const [currentSelected, setCurrentSelected] = useState(undefined)

    useEffect(() => {
        if(currentUser) {
            setCurrentUsername(currentUser.username)
            setCurrentUserImage(currentUser.avatarImage)
        }
    }, [currentUser])

    const changeCurrentChat = (index, contact) => {}
        return (<>
        {
            currentUserImage && currentUsername && (
                <Container>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h1>Snappy</h1>
                    </div>
                    <div className="contacts">
                        {
                           /* contacts.map((contact, index) => {
                                return (
                                    <div className={`contact ${
                                        index === currentSelected ? "selected" : ""
                                    }`} key={index} >
                                        <div className="avatar">
                                            <img
                                                src={`data:image/svg+xml;base64,${contact.avatarImage}`} 
                                                alt="avatar" 
                                            />
                                        </div>
                                        <div className="username">
                                            <h3>{contact.username}</h3>
                                        </div>
                                    </div>
                                )
                            })*/
                        }
                    </div>
                    <div className="current-user">
                        <div className="avatar">
                            <img 
                                src={`data:image/svg+xml;base64,${currentUserImage}`} 
                                alt="avatar" 
                            />
                        </div>
                        <div className="username">
                            <h1>{currentUsername}</h1>
                        </div>
                    </div>
                </Container>
            )
        }
        </>)
    }
    const Container = styled.div`

    `