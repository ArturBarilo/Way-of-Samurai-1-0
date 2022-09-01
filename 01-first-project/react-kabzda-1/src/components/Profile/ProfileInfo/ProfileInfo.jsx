import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img
                    src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;