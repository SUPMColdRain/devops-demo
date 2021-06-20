import {get, post, put, del} from "../utils/request"

/**
 * 获取列表
 * @param page
 */
export function listApi(page = 1) {
    return get("/api/v1/admin/userConfig", {page});
}

/**
 * 新增用户
 * @param data
 */
export function createApi(data) {
    return post("/api/v1/admin/userConfig", data);
}

/**
 * 根据id获取数据
 * @param id
 */
export function getOneById(id) {
    return get(`/api/v1/admin/userConfig/${id}`);
}

/**
 * 根据id修改数据
 * @param id
 * @param data
 */
export function modifyOne(id, data) {
    return put(`/api/v1/admin/userConfig/${id}`, data);
}

/**
 * 根据id删除用户
 * @param id
 */
export function delOne(id) {
    return del(`/api/v1/admin/userConfig/${id}`);
}
