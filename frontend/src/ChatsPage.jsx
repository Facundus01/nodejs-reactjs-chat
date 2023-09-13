
import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
    <PrettyChatWindow 
    projectId='d516301c-4d3b-4ea4-b63d-c492930528cb'
    username={props.user.username}
    secret={props.user.secret}
    style={{height:"100%"}}/>
    </div> 
    )
}
 
export default ChatsPage;