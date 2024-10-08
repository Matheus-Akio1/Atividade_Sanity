import {defineField, defineType} from 'sanity'

export const enderecoType = defineType({
    name: 'endereco',
    title: 'Endereço',
    type: 'object',
    fields: [
      {
        name: 'rua',
        title: 'Rua',
        type: 'string',
      },
      {
        name: 'numero',
        title: 'Número',
        type: 'string',
      },
      {
        name: 'bairro',
        title: 'Bairro',
        type: 'string',
      },
      {
        name: 'cidade',
        title: 'Cidade',
        type: 'string',
      },
      {
        name: 'estado',
        title: 'Estado',
        type: 'string',
      },
      {
        name: 'cep',
        title: 'CEP',
        type: 'string',
      },
    ],
  })
  