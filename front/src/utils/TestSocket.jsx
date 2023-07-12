import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

export default function TestSocket() {

  useEffect(() => {
    const socket = io("http://localhost:5001");
    console.log("Socket", socket);
  }, [])

  return (
    <div>testSocket</div>
  )
}
