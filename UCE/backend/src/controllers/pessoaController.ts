import { Request, Response } from "express";
import * as pessoaService from "../services/pessoaService";

export async function list(req: Request, res: Response) {
    const pessoas = await pessoaService.findAll();
    res.json(pessoas);
}

export async function getByID(req:Request, res: Response) {
    const id = Number(req.params.id);
    const pessoa = await pessoaService.findByID(id);
    res.json(pessoa);
}

export async function create(req :Request, res: Response) {
    const pessoa = await pessoaService.create(req.body);
    res.status(201).json(pessoa);
}

export async function update(req :Request, res: Response) {
    const id = Number(req.params.id);
    const pessoa = await pessoaService.update(id, req.body);
    res.json(pessoa);
}

export async function remove(req: Request, res: Response) {
    const id = Number(req.params.id);
    await pessoaService.remove(id);
    res.status(204).send()
}