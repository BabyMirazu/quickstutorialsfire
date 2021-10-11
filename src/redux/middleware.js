const routerMiddleware = (history) => {

    const token = localStorage.getItem('token');
    let isLogin = false;

    if (token || history.location.pathname === '/register' || history.location.pathname === '/reset' || history.location.pathname === '/verify') {
        isLogin = true;
    } else {
        history.replace('/login');
    }
    return () => next => action => {
        if (isLogin){
            return next(action);
        }
    }
}

export default routerMiddleware;