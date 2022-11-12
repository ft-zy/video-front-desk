
//存储token
export function setToken(token) {
    return sessionStorage.setItem("token", token)
}
export function getToken() {
    return sessionStorage.getItem("token")
}
//存储用户id
export function setUid(uid) {
    console.log(uid + "------------------")
    return sessionStorage.setItem("uid", uid)
}
export function getUid() {
    return sessionStorage.getItem("uid")
}

//存储用户id
export function setNetName(netName) {
    return sessionStorage.setItem("netName", netName)
}
export function getNetName() {
    return sessionStorage.getItem("netName")
}

//清空
export function clearSession() {
    return sessionStorage.clear()
}