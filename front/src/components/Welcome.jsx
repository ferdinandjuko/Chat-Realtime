import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
    console.log(currentUser)
    return (
        <Container>
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <span>{currentUser !== undefined ? currentUser.username : 'Cher utilisateur' }</span>
            </h1>
            <h3>Please select a chat to start Messanging</h3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
    img {
        height: 20rem;
    }
    span {
        color: #4e0eff;
    }
`;