import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);


const defaultFN = () => {};

function Menu({ children, items = [], onChange = defaultFN }) {   

    const [history, setHistory] = useState([{ data:items }])
    console.log(`log1: `,history);
    const current = history[history.length - 1]
    console.log(`log2: `,current);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        }
           
        );
    };

    return (
        <Tippy
            visible
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <h2>
                       {history.length > 1 &&  <Header title="Language" onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                       }} />}
                        {renderItems()}
                        </h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
