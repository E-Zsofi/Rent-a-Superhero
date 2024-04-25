import { useEffect, useState } from 'react';
import Header from "./Header";
import "./Messages.css"



function Messages() {
  const [messages, setMessages] = useState([])

  const fetchMessages = async () => {
    const response = await fetch("/api/messages")
    return await response.json()
  }

  useEffect(() => {
    fetchMessages()
      .then((res) => {
        setMessages(res)
      })
  }, [])

  return (
    <div>
      <Header></Header>
      <div className="MessageTable">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th>Contact info</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message.name}</td>
                <td>{message.message}</td>
                <td>{message.phoneNumber} / {message.email}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Messages