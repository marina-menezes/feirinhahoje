const feiras = [
    {
        "Endereço": "Av. Álvares Cabral entre Praça Afonso Arinos e Rua da Bahia",
        "Bairro": "Centro",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça Íris Valadares, Av. Celso Porfírio Machado esq. com Rua Carmine Zuppo",
        "Bairro": "Belvedere",
        "Dia": "Terça e sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Av.Paulo Camilo Pena entre Rua João Antônio Azevedo e Av.Jornalista Djalma Andrade",
        "Bairro": "Belvedere",
        "Dia": "Quinta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Silva Jardim entre Rua Itajubá e Av.do Contorno",
        "Bairro": "Floresta",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Ceará entre Rua dos Inconfidentes e Rua Santa Rita Durão",
        "Bairro": "Funcionários",
        "Dia": "Quinta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Av.Carandaí entre Rua Ceará e Rua Piauí",
        "Bairro": "Funcionários",
        "Dia": "Quinta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Gonçalves Dias esquina com Rua Pernambuco",
        "Bairro": "Funcionários",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Bernardo Guimarães entre Rua Piauí e Rua Ceará",
        "Bairro": "Funcionários",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça Marília de Dirceu",
        "Bairro": "Lourdes",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Rio Grande do Sul entre Rua Gonçalves Dias e Rua Alvarenga Peixoto",
        "Bairro": "Lourdes",
        "Dia": "Quinta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Levindo Lopes entre Rua Sergipe e Rua Antônio de Albuquerque",
        "Bairro": "Lourdes",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Jornalista Felipe Drumond esquina com Av.Guaicuí",
        "Bairro": "Luxemburgo",
        "Dia": "Quinta-feira e sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Av. Bandeirantes esquina com Rua Estevão Pinto",
        "Bairro": "Mangabeiras",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Grão Pará entre Rua Domingos Vieira e Rua Ulhoa Cintra",
        "Bairro": "Santa Efigênia",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Grão Pará entre Rua dos Otoni e Rua Padre Rolim",
        "Bairro": "Santa Efigênia",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Araguari entre Rua Rodrigues Caldas e Rua Matias Cardoso",
        "Bairro": "Santo Agostinho",
        "Dia": "Terça-feira e sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Benjamin Flores entre Rua Matipó e Rua Abre Campo",
        "Bairro": "Santo Antônio",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça Emídio de Brito com Rua João de Freitas",
        "Bairro": "Santo Antônio",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua São Domingos do Prata entre Rua Leopoldina e Rua Santo Antônio do Monte",
        "Bairro": "Santo Antônio",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Herval entre Rua Palmira e Rua Joanésia",
        "Bairro": "Serra",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Chicago esquina com Rua Venezuela",
        "Bairro": "Sion",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Mantena entre Rua Pium-í e Rua Chile",
        "Bairro": "Sion",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça República do Líbano",
        "Bairro": "São Bento I",
        "Dia": "Quarta-feira e sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Dona Senhorinha esquina de Av.Elísio de Brito",
        "Bairro": "Boa Vista",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Varginha entre Rua Ponte Nova e Rua Guanhães",
        "Bairro": "Colégio Batista",
        "Dia": "Sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Itacoatiara esquina com Rua São Joaquim",
        "Bairro": "Sagrada Família",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça Coronel José Persilva",
        "Bairro": "Santa Tereza",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Caiana esquina com Av. Contagem",
        "Bairro": "Santa Inês",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Itaité entre Rua Aperé e Praça São Geraldo",
        "Bairro": "São Geraldo",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça 13 de Maio (Rua Tancredo da Silva c/Rua João Lourival Dias e Rua Biaggio Polizzi)",
        "Bairro": "Nova Floresta",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Praça São João Batista esquina com Rua Ester de Lima",
        "Bairro": "Santa Cruz",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Itapagipe entre Rua Macaé e Rua Jurema",
        "Bairro": "Bairro da Graça",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua José da Silva Martins entre Rua Pimenta da Veiga e Rua Júlio Otaviano Ferreira",
        "Bairro": "Cidade Nova",
        "Dia": "Quinta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Bacuri esquina com Rua Frei Conceição",
        "Bairro": "Alto dos Pinheiros",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Felicidade entre Rua Marambaia e Rua Cananéia",
        "Bairro": "Caiçara",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Progresso entre Rua Humaitá e Rua Aquidabã",
        "Bairro": "Padre Eustáquio",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua José Oscar Barreira entre Av.Cristiano Guimarães e Rua Jornalista Waldir Lau",
        "Bairro": "Planalto",
        "Dia": "Terça e sexta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Iracema de Souza entre Av.Gen.Carlos Guedes e Rua Cap.Leônidas Soares",
        "Bairro": "Planalto",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Av. André Cavalcanti esquina com Rua Marechal Hermes",
        "Bairro": "Gutierrez",
        "Dia": "Terça-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Oeste entre Rua dos Andes e Rua Calcedônia",
        "Bairro": "Calafate",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Joaquim Nabuco entre Rua Teodoro Abreu e Rua Monte Branco",
        "Bairro": "Nova Suíça",
        "Dia": "Quinta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Desembargador Fernando Bhering esquina com Rua Ministro Orozimbo Nonato",
        "Bairro": "Dona Clara",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Frei Manoel da Cruz entre Av.Isabel Bueno e Rua Júlio Ferraz",
        "Bairro": "Liberdade",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Av. das Palmeiras esquina com Av.Chafir Ferreira",
        "Bairro": "São Luiz",
        "Dia": "Quarta-feira",
        "Horário": "07:00 às 13:00"
    },
    {
        "Endereço": "Rua Santo Antônio entre Rua da Matriz e Rua São Benedito",
        "Bairro": "Venda Nova",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00"
    }
];