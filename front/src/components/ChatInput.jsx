import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

export default function ChatInput({ handleSendMsg }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState("")

    const emojiRef = useRef(null);

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker((prev) => !prev);
    };

    const handleEmojiClick = (emojiData) => {
        setMsg((prev) => prev + emojiData.emoji);
    };

    const sendChat = (event) => {
        event.preventDefault()
        if (msg.trim().length > 0) {
            handleSendMsg(msg);
            setMsg("")
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                emojiRef.current &&
                !emojiRef.current.contains(event.target)
            ) {
                setShowEmojiPicker(false);
            }
        };

        const handleEspace = (event) => {
            if (event.key === 'Escape') {
                setShowEmojiPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside
            );

            document.removeEventListener(
                'keydown',
                handleEscape
            );
        };
    }, []);

    return (<>
        <Container>
            <div className="button-container">
                <div className="emoji" ref={emojiRef}>
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {showEmojiPicker && (
                        <div className='emoji-picker'>
                            <Picker
                                onEmojiClick={handleEmojiClick}
                                theme='dark'
                            />
                        </div>
                    )}
                </div>
            </div>

            <form className="input-container" onSubmit={(e) => sendChat(e)}>
                <input
                    type="text"
                    placeholder="type your message here"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button
                    type="submit"
                    className="submit"
                    aria-label="Send message"
                >
                    <IoMdSend />
                </button>
            </form>
        </Container>
    </>)
}

const Container = styled.div`
    display: grid;
    height: 20%;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem 0.3rem;

    @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0 1rem;
        gap: 1rem;
    }
    .button-container {
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;

        .emoji {
            position: relative;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
                margin: -9px;
            }
            
            .emoji-picker {
                position: absolute;

                /* Better than top: -450px */
                bottom: 3rem;
                left: 0;

                z-index: 1000;

                .EmojiPickerReact {
                    background-color: #080420;
                    box-shadow: 0 5px 10px #9a86f3;
                    border-color: #9186f3;
                    .emoji-scroll-wrapper::-webkit-scrollbar-track {
                        background-color: #080420;
                        width:  5px;
                        &-thumb {
                            background-color: #9186f3;
                        }
                    }
                    .emoji-categories {
                        button {
                            filter: contrast(0);
                        }
                    }
                    .emoji-search {
                        background-color: transparent;
                        border-color: #9186f3;
                    }
                }
            }
        }

    }
    .input-container {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background-color: #ffffff34;

        input {
            width: 90%;
            height: 60%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;

            &::selection {
                background-color: #9a86f3;
            }

            &:focus {
                outline: none;
            }
        }

        button {
            padding: .3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            cursor: pointer;

            svg {
                font-size: 2rem;
                color: white;
            }

            @media screen and (min-width: 720px) and (max-width: 1080px) {
                padding: .3rem 1rem;

                svg {
                    font-size: 1rem;
                }
            }
        }
    }
`