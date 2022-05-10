import axios from "axios";

// TODO MAKE HTTP CALLS TO BACKEND
const HTTP = axios.create();

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
    mobilia: ["Cadeira ,", "Mesa ,", "Cama ,", "Colchão ,"],
    area: "100m²",
    fotos: [
      "https://www.estilofontana.com.br/blog/wp-content/uploads/2019/05/apartamento-decorado-1-1170x780.jpg",
      "https://swellconstrucoes.com.br/wp-content/uploads/2021/04/apartamento-de-luxo-1.png",
      "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg",
    ],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "+55 48 9852-7483",
    email: "xuxa@gmail.com",
    regras: "Não pode fazer coco na pia da sacada porém pode na da cozinha",
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
    fotos: [
      "https://www.estilofontana.com.br/blog/wp-content/uploads/2019/05/apartamento-decorado-1-1170x780.jpg",
      "https://swellconstrucoes.com.br/wp-content/uploads/2021/04/apartamento-de-luxo-1.png",
      "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg",
    ],
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
    fotos: [
      "https://www.estilofontana.com.br/blog/wp-content/uploads/2019/05/apartamento-decorado-1-1170x780.jpg",
      "https://swellconstrucoes.com.br/wp-content/uploads/2021/04/apartamento-de-luxo-1.png",
      "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg",
    ],
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telefone: "(11) 99999-9999",
    email: "xuxa@gmail.com",
    regras: "",
  },
];

const USER_SCHEDULED_RENTS = [
  // {
  //   id: 1,
  //   nome: "Casa de campo",
  //   quantidade_quartos: 3,
  //   endereco: "Rua dos campos, nº 0",
  //   localizacao: {
  //     latitude: -23.564,
  //     longitude: -46.633,
  //   },
  //   valor: "R$ 1.000,00",
  //   restricoes: {
  //     sexo: "masculino",
  //     numero_pessoas: 2,
  //     banheiro: "compartilhado",
  //   },
  //   mobilia: [],
  //   area: "100m²",
  //   fotos: [
  //     "https://www.estilofontana.com.br/blog/wp-content/uploads/2019/05/apartamento-decorado-1-1170x780.jpg",
  //     "https://swellconstrucoes.com.br/wp-content/uploads/2021/04/apartamento-de-luxo-1.png",
  //     "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg"
  //   ],
  //   descricao:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   telefone: "(11) 99999-9999",
  //   email: "xuxa@gmail.com",
  //   regras: "",
  // },
  // {
  //   id: 2,
  //   nome: "Casa de campo",
  //   quantidade_quartos: 3,
  //   endereco: "Rua dos campos, nº 0",
  //   localizacao: {
  //     latitude: -23.564,
  //     longitude: -46.633,
  //   },
  //   valor: "R$ 1.000,00",
  //   restricoes: {
  //     sexo: "masculino",
  //     numero_pessoas: 2,
  //     banheiro: "compartilhado",
  //   },
  //   mobilia: [],
  //   area: "100m²",
  //   fotos: [
  //     "https://www.estilofontana.com.br/blog/wp-content/uploads/2019/05/apartamento-decorado-1-1170x780.jpg",
  //     "https://swellconstrucoes.com.br/wp-content/uploads/2021/04/apartamento-de-luxo-1.png",
  //     "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg"
  //   ],
  //   descricao:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   telefone: "(11) 99999-9999",
  //   email: "xuxa@gmail.com",
  //   regras: "",
  // },
];

export async function getAvaibleRents() {
  return AVAIBLE_RENTS;
}

export async function getUserScheduledRents() {
  return USER_SCHEDULED_RENTS;
}

export async function addUserScheduledRent(rent) {
  USER_SCHEDULED_RENTS.push(rent);
  // console.log(USER_SCHEDULED_RENTS);
}

export async function findScheduledRent(id) {
  return USER_SCHEDULED_RENTS.find((r) => r.id === id);
}

export async function removeScheduledRent(id) {
  const index = USER_SCHEDULED_RENTS.findIndex((r) => r.id === id);

  if (index !== -1) {
    USER_SCHEDULED_RENTS.splice(index, 1);
  }
}
