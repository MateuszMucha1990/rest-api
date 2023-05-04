import express from 'express';

import { createUser, getUsers, getUserById, deleteUser,editUser } from '../controllers/users.js'; 

const router = express.Router();

let users = [
    // {
    //     firstName : "john",
    //     lastName : "Doe",
    //     age : 25
    // },
    // {
    //     firstName : "Dina",
    //     lastName : "Doe",
    //     age : 35
    // }
]
//szukanie all
router.get('/', getUsers)

//dodanie
router.post('/', createUser)

//szukanie po id
router.get('/:id', getUserById);

//usuwanie
router.delete('/:id', deleteUser)

//edycja czesciowa
router.patch('/:id' , editUser)


export default router;