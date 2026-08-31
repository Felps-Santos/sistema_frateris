import { Router } from "express";
import * as pessoaController from "../controllers/pessoaController";

/**
 * @openapi
 * components:
 *   schemas:
 *     Pessoa:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: Maria Silva
 *         cpf:
 *           type: string
 *           example: "12345678900"
 *         dataNasc:
 *           type: string
 *           format: date
 *           example: "2000-05-20"
 *     PessoaInput:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - dataNasc
 *       properties:
 *         nome:
 *           type: string
 *           example: Maria Silva
 *         cpf:
 *           type: string
 *           example: "12345678900"
 *         dataNasc:
 *           type: string
 *           format: date
 *           example: "2000-05-20"
 */

const router = Router();

/**
 * @openapi
 * /pessoas:
 *   get:
 *     summary: Lista todas as pessoas
 *     tags: [Pessoas]
 *     responses:
 *       200:
 *         description: Lista de pessoas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pessoa'
 */
router.get("/", pessoaController.list);

/**
 * @openapi
 * /pessoas/{id}:
 *   get:
 *     summary: Busca uma pessoa pelo ID
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Pessoa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 *       404:
 *         description: Pessoa não encontrada
 */
router.get("/:id", pessoaController.getByID);

/**
 * @openapi
 * /pessoas:
 *   post:
 *     summary: Cria uma nova pessoa
 *     tags: [Pessoas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PessoaInput'
 *     responses:
 *       201:
 *         description: Pessoa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 */
router.post("/", pessoaController.create);

/**
 * @openapi
 * /pessoas/{id}:
 *   put:
 *     summary: Atualiza uma pessoa existente
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PessoaInput'
 *     responses:
 *       200:
 *         description: Pessoa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 *       404:
 *         description: Pessoa não encontrada
 */
router.put("/:id", pessoaController.update);

/**
 * @openapi
 * /pessoas/{id}:
 *   delete:
 *     summary: Remove uma pessoa
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       204:
 *         description: Pessoa removida com sucesso
 *       404:
 *         description: Pessoa não encontrada
 */
router.delete("/:id", pessoaController.remove);

export default router;