import encryptpassword from "./encryption.js";

import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export async function createUser(req, res){
    const newUser = await prisma.user.create({
    data: {
        firstname: 'Testy',
        lastname: 'Testerson',
        username: 'TestMan',
        password: 'boogers'
    }
})
};

export async function seeUsers(req, res){
    const users = await prisma.user.findMany();
    console.log(users);
}

export async function deleteAll(req,res){
    const deleteAll = await prisma.user.deleteMany({});
};

export async function postSignup(req, res){
    try {
        const hashedPassword = await encryptpassword(req.body.password);
        const newUser = await prisma.user.create({
            data: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: hashedPassword
            }
        })
        console.log("Worked!");
        res.redirect("/login");
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
}

export async function getUserByUsername(name){
    const user = await prisma.user.findFirst({
        where:{username: name }
    })
    //console.log(user.username);
    return user;
}

export async function getUserById(id){
    const user = await prisma.user.findUnique({
        where:{id: id}
    })
    return user;
}

export async function checkLocals(req, res){
    console.log(res.locals.user);
    //currently 'undefined'
}
//I don't know why, but using 'module.exports' doesn't work.