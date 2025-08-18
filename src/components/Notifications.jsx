import styled from "styled-components"

const StyledNotifications = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    margin: 3rem;
    font-size: 1.2rem;
    z-index: 1000;
    color: white;
    font-weight: 800;
    text-shadow: 3px 3px 1px black;
`

const Notifications = ({ messages }) => {
    return (
        <StyledNotifications>
            {messages.map(message => (
                <p key={message.id} message={message}>{message.text}</p>
            ))}
        </StyledNotifications>
    )
}

export default Notifications