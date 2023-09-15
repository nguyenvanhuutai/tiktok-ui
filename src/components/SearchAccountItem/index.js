import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function AccountItem() {
    const cx = classNames.bind(styles)
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/512053fb70a4f21fd79fa1df754cb8ba~c5_100x100.jpeg?x-expires=1694930400&x-signature=oV3A5953fp7FY9F2vsInl06%2F4FI%3D" alt=""/>
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