import { v4 as uuidv4 } from 'uuid'; //bibl tworzy dlugie niepowtarzalne strings

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
export const getUsers = (req,res) => {
    res.send(users)}

//dodanie
export const createUser = (req, res) =>{
    const user = req.body;
    //const userId = uuidv4(); //  stworzenie unikalnego id
    //const userWithId = {...user, id: userId}   //dodanie id do istniejacego uzytk
    users.push({...user, id: uuidv4()})  //skrot do tego z wyzej-- dodanie unikalnego id do istniej uzytk

    res.send(`Uzytkownik: ${user.firstName}`)
}

//szukanie po id
export const getUserById =(req,res) => {
    const {id}= req.params;

    const findUser = users.find((user) => user.id ===id)
    res.send('find id')
}

//usuwanie
export const deleteUser =(req,res) => {
    const {id }= req.params;
    users = users.filter((user) =>user.id !== id);
    res.send(`Uzytkownik o id: ${id} zostal usuniety`)
}

//edycja czesciowa
export const editUser = (req,res) =>{
    const {id }= req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id ===id);
    
        if(firstName) user.firstName = firstName
        if(lastName) user.lastName = lastName
        if(age) user.age = age

    res.send(`Uzytkownik o id: ${id} zostal edytowany`)
}