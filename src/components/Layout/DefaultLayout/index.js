import classNames from 'classnames/bind';
import styles from './Default.module.scss';

import Header from 'src/components/Layout/Header';
import SideBar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
