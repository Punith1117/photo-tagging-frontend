
const Notifications = ({ messages }) => {
    return (
        <div>
            {messages.map(message => (
                <p key={message.id} message={message}>{message.text}</p>
            ))}
        </div>
    )
}

export default Notifications