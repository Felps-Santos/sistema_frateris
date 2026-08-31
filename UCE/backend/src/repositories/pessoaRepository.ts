import { prisma } from "../config/prisma";
import { CreatePessoaDTO } from "../types/pessoa";
import { UpdatePessoaDTO } from "../types/pessoa";

export function findAll() {
    return prisma.pessoa.findMany();
}

export function findByID(id: number){
    return prisma.pessoa.findUnique({
        where: {id},
    });
}

export function create(data: CreatePessoaDTO){
    return prisma.pessoa.create({data});
}   

export function update( 
    id: number,
    data: UpdatePessoaDTO)
    {
        return prisma.pessoa.update({
            where: {id},
            data,
            });
    }
export function remove( id: number){
    return prisma.pessoa.delete({
        where: {id},
    });
}

