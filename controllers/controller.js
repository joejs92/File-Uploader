/* const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy; */

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

//I don't know why, but using 'module.exports' doesn't work.