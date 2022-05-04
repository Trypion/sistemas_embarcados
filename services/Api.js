import axios from "axios";

// TODO MAKE HTTP CALLS TO BACKEND
const HTTP = axios.create()


// FAKE API
const AVAIBLE_RENTS = [
  {
    id: 1,
    nome: "Casa de campo",
    quantidade_quartos: 3,
    endereco: "Rua dos campos, nº 0",
    localizacao: {
      latitude: -23.564,
      longitude: -46.633,
    },
    valor: "R$ 1.000,00",
    restricoes: {
      sexo: "masculino",
      numero_pessoas: 2,
      banheiro: "compartilhado",
    },
    mobilia: [],
    area: "100m²",
    fotos: [],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "(11) 99999-9999",
    email: "xuxa@gmail.com",
    regras: "",
  },
  {
    id: 2,
    nome: "Casa de campo",
    quantidade_quartos: 3,
    endereco: "Rua dos campos, nº 0",
    localizacao: {
      latitude: -23.564,
      longitude: -46.633,
    },
    valor: "R$ 1.000,00",
    restricoes: {
      sexo: "masculino",
      numero_pessoas: 2,
      banheiro: "compartilhado",
    },
    mobilia: [],
    area: "100m²",
    fotos: [],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "(11) 99999-9999",
    email: "xuxa@gmail.com",
    regras: "",
  },
  {
    id: 3,
    nome: "Casa de campo",
    quantidade_quartos: 3,
    endereco: "Rua dos campos, nº 0",
    localizacao: {
      latitude: -23.564,
      longitude: -46.633,
    },
    valor: "R$ 1.000,00",
    restricoes: {
      sexo: "masculino",
      numero_pessoas: 2,
      banheiro: "compartilhado",
    },
    mobilia: [],
    area: "100m²",
    fotos: [],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "(11) 99999-9999",
    email: "xuxa@gmail.com",
    regras: "",
  },
];


const USER_SCHEDULED_RENTS = [
  {
    id: 1,
    nome: "Casa de campo",
    quantidade_quartos: 3,
    endereco: "Rua dos campos, nº 0",
    localizacao: {
      latitude: -23.564,
      longitude: -46.633,
    },
    valor: "R$ 1.000,00",
    restricoes: {
      sexo: "masculino",
      numero_pessoas: 2,
      banheiro: "compartilhado",
    },
    mobilia: [],
    area: "100m²",
    fotos: [],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "(11) 99999-9999",
    email: "xuxa@gmail.com",
    regras: "",
  },
  {
    id: 2,
    nome: "Casa de campo",
    quantidade_quartos: 3,
    endereco: "Rua dos campos, nº 0",
    localizacao: {
      latitude: -23.564,
      longitude: -46.633,
    },
    valor: "R$ 1.000,00",
    restricoes: {
      sexo: "masculino",
      numero_pessoas: 2,
      banheiro: "compartilhado",
    },
    mobilia: [],
    area: "100m²",
    fotos: [],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "(11) 99999-9999",
    email: "xuxa@gmail.com",
    regras: "",
  },
];

export async function getAvaibleRents(){
  return AVAIBLE_RENTS
}

export async function getUserScheduledRents(){
  return USER_SCHEDULED_RENTS
}
