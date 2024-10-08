import {defineField, defineType} from 'sanity'

export const pessoaType = defineType({
  name: 'pessoa',
  title: 'Pessoa',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: Rule => Rule.required().integer(),
    },
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'dataNascimento',
      title: 'Data de Nascimento',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'telefone',
      title: 'Telefone',
      type: 'string',
    },
    {
      name: 'imagemPerfil',
      title: 'Imagem de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ativo',
      title: 'Ativo',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'endereco',
      title: 'Endereço',
      type: 'endereco',
    },
  ],
})