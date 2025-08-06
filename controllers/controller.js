import encryptpassword from "./encryption.js";

import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

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
    return user;
}

export async function getUserById(id){
    const user = await prisma.user.findUnique({
        where:{id: id}
    })
    return user;
}

export async function postNewFolder(req, res){
    const newFolder = await prisma.folders.create({
        data: {
            foldername: req.body.foldername,
            userId: req.user.id
        }
    })
    res.redirect("/profile");
}

export async function postNewFolderName(req, res){
    const id = parseInt(req.params.folderId);
    const updateFolderName = await prisma.folders.update({
        where: {folderId: id},
        data: {foldername: req.body.newName}
    })
    res.redirect("/profile");
}

export async function seeFolders(req, res){
    const folders = await prisma.folders.findMany();
    console.log(folders);
}

export async function getFolders(req, res){
    const folders = await prisma.folders.findMany({
        where: {
            userId: {
                equals: req.user.id
            }
        }
    })
    return folders;
}

export async function getSpecificFolder(req, res){
    const id = parseInt(req.params.folderId);
    const folder = await prisma.folders.findUnique({
        where:{folderId: id}
    })
    return folder;
}

export async function deleteFolder(req, res){
    const id = parseInt(req.params.folderId);
    const folders = await prisma.folders.delete({
        where: {folderId: id}
    })
    res.redirect("/profile");
}

export async function postFile(req, res){
    const id = parseInt(req.params.folderId);
    const newFile = await prisma.files.create({
        data: {
            filename: req.file.originalname,
            folderId: id,
            userId: req.user.id,
            path: req.file.path
        }
    })
}

export async function seeAllFiles(req, res){
    const id = parseInt(req.params.folderId);
    const files = await prisma.files.findMany({
        where: {
            folderId: {
                equals: id
            }
        }
    })
    console.log(files);
}

export async function deleteAllFiles(req, res){
    const id = parseInt(req.params.folderId);
    const deleteAll = await prisma.files.deleteMany({
        where:{
            folderId: {
                equals: id 
            }
        }
    });
    console.log("Deleted");
}

export async function getFiles(req, res){
    const id = parseInt(req.params.folderId);
    const files = await prisma.files.findMany({
        where: {
            folderId: {
                equals: id
            }
        }
    })
    return files;
}

//I don't know why, but using 'module.exports' doesn't work.
//When deleting these functions, make sure you also delete the references to
//those functions in the routes!!