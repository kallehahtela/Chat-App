import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return ( 
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='f16f136a-9079-4e73-9280-8e1ee44dff04'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
                />
        </div>
    )
}

export default ChatsPage