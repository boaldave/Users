export interface ICredentials {
    userName: string;
    password: string;
}
export interface IPersonalInfo {
    firstName: string;
    lastName: string;
}
export interface IProfileAddress {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
}
export interface IProfilePhone {
    number: string;
    phoneType: string;
    isPrimary: boolean;
}
export interface IUserProfile {
    personalInfo: IPersonalInfo;
    credentials: ICredentials;
    addresses: IProfileAddress[];
    phones: IProfilePhone[];
}
