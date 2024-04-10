export class BaseUser {
    name: string;
    email: string;
    phone: string;
    image: string;
    constructor() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.image = '';
    }
}

export class User extends BaseUser {
    id: string | null;
    constructor() {
        super();
        this.id = null;
    }
}