import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Login = React.lazy(() => import('./views/Login'));
const Register = React.lazy(() => import('./views/Register'));


const routes=[
    { path:"/", component:Home},
    { path:"/login", component:Login},
    { path:"/register", component:Register}
]


export default routes;