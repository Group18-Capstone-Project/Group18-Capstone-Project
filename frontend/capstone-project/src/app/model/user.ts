export interface User {
    isLocked: boolean;
    firstname?: string,
    lastname?: string,
    email: string,
    password: string,
    dob?: string,
    phone?: number,
    address?: string,
    locked:boolean
}
