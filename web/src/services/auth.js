import {post} from "../utils/request"

/**
 *  用户登录
 * @param user
 */
export function loginApi(user) {
    return post("api/v1/auth/admin_login", user);
}
