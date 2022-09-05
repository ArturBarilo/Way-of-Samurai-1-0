import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newMessageElement = React.createRef();

    let send = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>
        <div className={s.dialog}>{props.message}</div>
        <div>
        <textarea ref={newMessageElement}></textarea>
            <button onClick={ send }>Send</button>

        </div>
        </div>
    );
}

export default Message;
