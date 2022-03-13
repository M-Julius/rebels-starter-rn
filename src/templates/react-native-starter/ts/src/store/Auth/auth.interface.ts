export interface LOGIN_INTERFACE {
    username: string,
    password: string,
}

export interface FORGOT_USER_INTERFACE {
    username: string,
}

export interface FORGOT_TOKEN_INTERFACE {
    username: string,
    token: string
}

export interface CHANGE_PASS_INTERFACE {
    password: string,
    retype_password: string
}

export interface REGISTER_INTERFACE {
    username: string,
    name: string,
    phone: string,
    email: string,
    password: string,
    retype_password: string
}