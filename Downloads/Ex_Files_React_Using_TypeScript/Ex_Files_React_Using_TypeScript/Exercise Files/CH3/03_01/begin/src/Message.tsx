import React from 'react'
interface userMessage{
  name:string;
  message:string;
}
const Message: React.FC<userMessage> = ({name,message}) => {
    return (
      <p>{name}, {message}</p>  
    )
}

export default Message
