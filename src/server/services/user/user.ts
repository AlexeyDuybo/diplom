import UserModel from './user.model';

class User {
    static create(name: string, surname: string) {
        (new UserModel({ name, surname } as UserModel)).save();
    }
}

export default User;
