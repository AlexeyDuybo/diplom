import mongose, { Schema } from 'mongoose';

type UserModel = {
    name: string,
    surname: string
}

const userSchema = new Schema({
    name: String,
    surname: String,
});

const UserModel = mongose.model('UserModel', userSchema);

export default UserModel;
