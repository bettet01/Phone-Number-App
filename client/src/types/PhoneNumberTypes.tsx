

export interface PhoneNumberResponse {
    numbers: PhoneNumber[];
}

export interface PhoneNumber {
    _id: string;
    name: string;
    description: string;
    number: string;
    createdAt: Date;
    updatedAt: Date;
}