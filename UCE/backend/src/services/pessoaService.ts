import { AppError } from "../middlewares/AppError";
import * as pessoaRepository from "../repositories/pessoaRepository";
import { CreatePessoaDTO, UpdatePessoaDTO } from "../types/pessoa";

export function findAll(){
    return pessoaRepository.findAll();
}

export function create(data: CreatePessoaDTO){
    if(!data.cpf || !data.cpf || !data.dataNasc || !data.nome){
        throw new AppError("Dados faltando",400);
    }
    return pessoaRepository.create(data);
}

export async function findByID(id:number) {
    const pessoa = await pessoaRepository.findByID(id);

    if( !pessoa ){
        throw new AppError("Pessoa não encontrada", 404);
    }
    return pessoa;
}

export async function update(
  id: number,
  data: UpdatePessoaDTO )
  {
    await findByID(id);
    return pessoaRepository.update( id, data);
  }

export async function remove(id: number) {
  await findByID(id);
  return pessoaRepository.remove(id);
}

