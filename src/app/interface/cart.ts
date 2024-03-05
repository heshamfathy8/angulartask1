export interface cart {
    status:         string;
    message:        string;
    numOfCartItems: number;
    data:           Data;
}

export interface Data {
    _id:            string;
    cartOwner:      string;
    products:       ProductElement[];
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
    totalCartPrice: number;
}

export interface ProductElement {
    count:   number;
    _id:     string;
    product: string;
    price:   number;
}
