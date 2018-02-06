/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginLoading(loading) {
    return {
        type: LOGIN_LOADING,
        payload: loading
    }
}
export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export function login() {
    return function (dispatch) {
        // 假接口，看看就行
        dispatch(loginLoading(true));
        fetch('http://192.168.2.68:3000/api/trial_cars.json', {method: 'get', type: 'json'})
            .then((res) => {
              dispatch(loginLoading(false));
              res.json().then(function (data) {
                // 这里可以格式化数据，可以使用normalizr等辅助工具处理数据
                dispatch(loginSuccess(data));
              })
            })
            .catch((error) => {
                dispatch(loginLoading(false));
                dispatch(loginFailure(error));
            });
    }
}
