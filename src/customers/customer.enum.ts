export enum SucessMessage {
  CREATE_ALL = "Sucesso ao inserir os clientes no Banco de Dados",
  DELETE_ONE = "Sucesso ao deletar um cliente no Banco de Dados",
  DELETE_ALL = "Sucesso ao deletar todos os clientes no Banco de Dados",
}

export enum ErrorMessage {
  CREATE_ALL = "Erro ao inserir os clientes no Banco de Dados",
  FIND_ONE = "Erro ao tentar encontrar um cliente no Banco de Dados",
  FIND_ALL = "Erro ao tentar encontrar todos os clientes no Banco de Dados",
  GROUP_BY_GENDER = "Erro ao tentar agrupar todos os clientes por Gênero",
  GROUP_BY_STATE = "Erro ao tentar agrupar todos os clientes por Estado",
  FIND_BY_EMAIl = "Erro ao tentar encontrar clientes a partir de um Domínio de Email",
  FIND_BY_NAME_RANGE = "Erro ao tentar encontrar clientes a partir de um determinado Intervalo de letras",
  UPDATE_ONE = "Erro ao tentar atualizar um cliente no Banco de Dados",
  DELETE_ONE = "Erro ao tentar deletar um cliente no Banco de Dados",
  DELETE_ALL = "Erro ao tentar deletar todos os clientes no Banco de Dados",
}
