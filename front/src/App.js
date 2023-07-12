import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import TestSocket from './utils/TestSocket'
import SetAvatar from './pages/SetAvatar'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/testSocket" element={<TestSocket />} />
      </Routes>
    </BrowserRouter>)
}