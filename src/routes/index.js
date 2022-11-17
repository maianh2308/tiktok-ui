import HomePage from 'src/pages/Home';
import Following from 'src/pages/Following';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import HeaderOnly from 'src/components/Layout/HeaderOnly';
import Profile from 'src/pages/Profile';
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/@:nickname',
        component: Profile,
    },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
