import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function AccountItem() {
    const cx = classNames.bind(styles)
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0a033663c0b532fe74ad50ca4505b8f1.jpeg?x-expires=1695265200&x-signature=rKGoW2kz5DLRZB8UH%2BwOq37IqQg%3D" alt=""/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>aaaaaaaaaa</span>
            </div>
        </div>
     );
}

export default AccountItem;