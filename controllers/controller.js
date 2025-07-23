const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(){
    const user = await prisma.User.create({
    data: {
        firstname: 'Testy',
        lastname: 'Testerson',
        username: 'TestMan',
        password: 'boogers'
    }
}); 
console.log(user)
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconect()
})
/* await prisma.User.create({
    data: {
        firstname: 'Testy',
        lastname: 'Testerson',
        username: 'TestMan',
        password: 'boogers'
    }
}) */