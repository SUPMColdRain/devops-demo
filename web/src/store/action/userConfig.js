import {listApi} from '../../services/userConfig';

export const loadUserConfig = (payload) => async dispatch => {
    console.log('list action payload = ', payload);
    const res = await listApi(payload.data);
    // 当异步操作完成之后通过dispatch触发reducer改变数据
    dispatch({
        type: 'USERCONFIG_LOADED',
        payload: {
            ...res,
            page: payload.page
        }
    })
}