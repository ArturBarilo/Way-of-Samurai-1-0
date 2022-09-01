import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Anna" id="3"/>
                <DialogItem name="Sveta" id="4"/>
                <DialogItem name="Valera" id="5"/>
                <DialogItem name="Andrey" id="6"/>

            </div>

            <div className={s.messages}>
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>How are you?</div>*/}
                {/*<div className={s.message}>Yo</div>*/}

                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo" />
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo" />

            </div>

        </div>
    )
}

export default Dialogs;
