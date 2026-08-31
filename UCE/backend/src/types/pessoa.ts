export interface CreatePessoaDTO {
  nome : string;
  cpf: string
  dataNasc: string;
}
export interface UpdatePessoaDTO {
  nome? : string;
  cpf?: string
  dataNasc?: string;
}