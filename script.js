const feiras = [
    {
        "Endereço": "Rua do Livramento",
        "Bairro": "Saúde",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "01-Portuária"
    },
    {
        "Endereço": "Rua Gal. Gurjão",
        "Bairro": "Caju",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "01-Portuária"
    },
    {
        "Endereço": "Rua Tadeu Kosciusko / Carlos Sampaio",
        "Bairro": "Centro",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "02-Centro"
    },
    {
        "Endereço": "Rua Conde Lages",
        "Bairro": "Centro",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "02-Centro"
    },
    {
        "Endereço": "Rua Emilia Guimaraes",
        "Bairro": "Catumbi",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "03-Rio Comprido"
    },
    {
        "Endereço": "Rua Barão de Sertorio",
        "Bairro": "Rio Comprido",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "03-Rio Comprido"
    },
    {
        "Endereço": "Rua Costa Ferraz",
        "Bairro": "Rio Comprido",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "03-Rio Comprido"
    },
    {
        "Endereço": "Praça Cel. Castelo Branco",
        "Bairro": "Cidade Nova",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "03-Rio Comprido"
    },
    {
        "Endereço": "Rua Sampaio Ferraz",
        "Bairro": "Estácio",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "03-Rio Comprido"
    },
    {
        "Endereço": "Rua Gal Argolo",
        "Bairro": "São Cristóvão",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "07-São Cristóvão"
    },
    {
        "Endereço": "Rua Gal Bruce",
        "Bairro": "São Cristóvão",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "07-São Cristóvão"
    },
    {
        "Endereço": "Rua Terezina",
        "Bairro": "Santa Teresa",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "23-Santa Teresa"
    },
    {
        "Endereço": "Rua Arno Konder / Rua Gov. Irineu Bornhausen",
        "Bairro": "Flamengo",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Avenida Augusto Severo",
        "Bairro": "Glória",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Rua Prof. Ortiz Monteiro",
        "Bairro": "Laranjeiras",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Viaduto Jardel Filho",
        "Bairro": "Laranjeiras",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Rua Paulo Barreto",
        "Bairro": "Botafogo",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Rua Vicente de Souza",
        "Bairro": "Botafogo",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Praça Nicaragua",
        "Bairro": "Botafogo",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Rua Rodrigo de Brito",
        "Bairro": "Botafogo",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Rua Barão de Macaubas",
        "Bairro": "Botafogo",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Rua Maria Eugenia",
        "Bairro": "Humaitá",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "Praça Tenente Gil Guilherme",
        "Bairro": "Urca",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "04-Botafogo"
    },
    {
        "Endereço": "PRC Almte Julio de Noronha",
        "Bairro": "Leme",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "05-Copacabana"
    },
    {
        "Endereço": "Praça Serzedelo Correia",
        "Bairro": "Copacabana",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "05-Copacabana"
    },
    {
        "Endereço": "Rua Ronald de Carvalho",
        "Bairro": "Copacabana",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "05-Copacabana"
    },
    {
        "Endereço": "Praça Edmundo Bittencourt",
        "Bairro": "Copacabana",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "05-Copacabana"
    },
    {
        "Endereço": "Praça Nossa Senhora da Paz",
        "Bairro": "Ipanema",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Avenida E Pitácio Pessoa, entre Visconde de Pirajá e Nascimento Silva",
        "Bairro": "Ipanema",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Praça Gal Osorio",
        "Bairro": "Ipanema",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Praça Nossa Senhora Auxiliadora",
        "Bairro": "Leblon",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Avenida Lineu de Paula Machado",
        "Bairro": "Lagoa",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Rua Frei Leandro",
        "Bairro": "Jardim Botânico",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Praça Santos Dumont",
        "Bairro": "Gávea",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "06-Lagoa"
    },
    {
        "Endereço": "Rua Vicente Licinio",
        "Bairro": "Praça da Bandeira",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Rua Garibaldi",
        "Bairro": "Tijuca",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Rua Alzira Brandão",
        "Bairro": "Tijuca",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Rua Aguiar",
        "Bairro": "Tijuca",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Rua Gabriela Prado Maia",
        "Bairro": "Tijuca",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Praça Prof Pinheiro Guimarães",
        "Bairro": "Tijuca",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Rua Visconde de Figueiredo",
        "Bairro": "Tijuca",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "08-Tijuca"
    },
    {
        "Endereço": "Rua Moraes e Silva",
        "Bairro": "Maracanã",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Professor Manoel de Abreu",
        "Bairro": "Maracanã",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Jorge Rudge",
        "Bairro": "Vila Isabel",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Mendes Tavares",
        "Bairro": "Vila Isabel",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Araripe Junior",
        "Bairro": "Andaraí",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Silva Teles",
        "Bairro": "Andaraí",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Duquesa de Bragança",
        "Bairro": "Grajaú",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Mearim",
        "Bairro": "Grajaú",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Avenida Júlio Furtado",
        "Bairro": "Grajaú",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "09-Vila Isabel"
    },
    {
        "Endereço": "Rua Mal Foch",
        "Bairro": "Bonsucesso",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "10-Ramos"
    },
    {
        "Endereço": "Rua Senador Mourão Vieira",
        "Bairro": "Ramos",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "10-Ramos"
    },
    {
        "Endereço": "Rua Felisbelo Freire",
        "Bairro": "Ramos",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "10-Ramos"
    },
    {
        "Endereço": "Rua Antônio Rego",
        "Bairro": "Olaria",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "10-Ramos"
    },
    {
        "Endereço": "Rua Firmino Gameleira",
        "Bairro": "Olaria",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "10-Ramos"
    },
    {
        "Endereço": "Rua Belisário Pena",
        "Bairro": "Penha",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "11-Penha"
    },
    {
        "Endereço": "Rua Gal Silveira Sobrinho",
        "Bairro": "Penha",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "11-Penha"
    },
    {
        "Endereço": "Rua Macapuri",
        "Bairro": "Penha",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "11-Penha"
    },
    {
        "Endereço": "Rua Jacuí",
        "Bairro": "Penha",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "11-Penha"
    },
    {
        "Endereço": "Rua José Rucas",
        "Bairro": "Penha",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "11-Penha"
    },
    {
        "Endereço": "Rua Iricumé",
        "Bairro": "Brás de Pina",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "11-Penha"
    },
    {
        "Endereço": "Rua Valentim Magalhães",
        "Bairro": "Vigário Geral",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "31-Vigário Geral"
    },
    {
        "Endereço": "Rua Franz Liszt",
        "Bairro": "Jardim América",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "31-Vigário Geral"
    },
    {
        "Endereço": "Rua Prof Boscoli",
        "Bairro": "Maria da Graça",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "12-Inhaúma"
    },
    {
        "Endereço": "Rua Bispo Lacerda",
        "Bairro": "Del Castilho",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "12-Inhaúma"
    },
    {
        "Endereço": "Rua Van Gogh",
        "Bairro": "Del Castilho",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "12-Inhaúma"
    },
    {
        "Endereço": "Rua Dona Emília",
        "Bairro": "Inhaúma",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "12-Inhaúma"
    },
    {
        "Endereço": "Rua Mário Ferreira",
        "Bairro": "Engenho da Rainha",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "12-Inhaúma"
    },
    {
        "Endereço": "Rua Rocha do",
        "Bairro": "Rocha",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Vitor Meireles",
        "Bairro": "Riachuelo",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Doutor Manoel Cotrim",
        "Bairro": "Riachuelo",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Manoel Miranda",
        "Bairro": "Engenho Novo",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Grão Para",
        "Bairro": "Engenho Novo",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Joaquim Meier",
        "Bairro": "Lins de Vasconcelos",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Galdino Pimentel",
        "Bairro": "Méier",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Vaz de Caminha",
        "Bairro": "Méier",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Salvador Pires",
        "Bairro": "Méier",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Silva Rabelo",
        "Bairro": "Méier",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Basílio de Brito",
        "Bairro": "Cachambi",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Odorico Mendes",
        "Bairro": "Cachambi",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Afonso Ferreira",
        "Bairro": "Engenho de Dentro",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Gustavo Riedel",
        "Bairro": "Engenho de Dentro",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Catulo Cearence",
        "Bairro": "Engenho de Dentro",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Cruz e Souza",
        "Bairro": "Encantado",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Antônio Vargas",
        "Bairro": "Piedade",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Caminho do Mateus",
        "Bairro": "Piedade",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Teresa Cavalcanti",
        "Bairro": "Piedade",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Rua Casemiro de Abreu",
        "Bairro": "Pilares",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "13-Méier"
    },
    {
        "Endereço": "Avenida Vicente de Carvalho",
        "Bairro": "Vila Kosmos",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua Cambuci do Vale",
        "Bairro": "Vicente de Carvalho",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua Floriania",
        "Bairro": "Vista Alegre",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua Ponta Porã",
        "Bairro": "Vista Alegre",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua Marques de Queluz",
        "Bairro": "Irajá",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua José Sombra",
        "Bairro": "Irajá",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Avenida Tenente Rebelo",
        "Bairro": "Irajá",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua Lopes Ferreira",
        "Bairro": "Irajá",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "14-Irajá"
    },
    {
        "Endereço": "Rua Ana Teles",
        "Bairro": "Campinho",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Eufrásio Correa",
        "Bairro": "Quintino Bocaiuva",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Laurindo Filho",
        "Bairro": "Cavalcanti",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Valério",
        "Bairro": "Engenheiro Leal",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Caetano da Silva",
        "Bairro": "Cascadura",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Ruaenrique Braga",
        "Bairro": "Madureira",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Operário Sadock de Sá",
        "Bairro": "Madureira",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Oliveira Figueiredo",
        "Bairro": "Vaz Lobo",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Jacina",
        "Bairro": "Vaz Lobo",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Rubis",
        "Bairro": "Rocha Miranda",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Jurubaiba",
        "Bairro": "Honório Gurgel",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Adelaide Badajos",
        "Bairro": "Oswaldo Cruz",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Teresa Santos",
        "Bairro": "Bento Ribeiro",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Óbidos",
        "Bairro": "Bento Ribeiro",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Sapopemba",
        "Bairro": "Bento Ribeiro",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Jorge Schmidt",
        "Bairro": "Marechalermes",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "15-Madureira"
    },
    {
        "Endereço": "Rua Fernandes da Fonseca",
        "Bairro": "Ribeira",
        "Dia": "Sábado",
        "Horário": "07:00 às 13:00",
        "RA": "20-Ilha do Governador"
    },
    {
        "Endereço": "Rua Sargento João Lopes",
        "Bairro": "Cacuia",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "20-Ilha do Governador"
    },
    {
        "Endereço": "Rua Arujá",
        "Bairro": "Freguesia(Ilha)",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "20-Ilha do Governador"
    },
    {
        "Endereço": "Avenida Francisco Alves",
        "Bairro": "Jardim Guanabara",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "20-Ilha do Governador"
    },
    {
        "Endereço": "Rua Prof.ilarião da Rocha",
        "Bairro": "Tauá",
        "Dia": "Segunda-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "20-Ilha do Governador"
    },
    {
        "Endereço": "Avenida Carlos Meziano",
        "Bairro": "Ilha do Governador",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "20-Ilha do Governador"
    },
    {
        "Endereço": "Rua Bétula",
        "Bairro": "Guadalupe",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "22-Anchieta"
    },
    {
        "Endereço": "Rua Loasa",
        "Bairro": "Guadalupe",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "22-Anchieta"
    },
    {
        "Endereço": "Rua Eneas Martins",
        "Bairro": "Guadalupe",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "22-Anchieta"
    },
    {
        "Endereço": "Rua Pereira da Rocha/Adequê",
        "Bairro": "Ricardo de Albuquerque",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "22-Anchieta"
    },
    {
        "Endereço": "Rua Ouseley",
        "Bairro": "Coelho Neto",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "25-Pavuna"
    },
    {
        "Endereço": "Rua Prof. Virginia Cidade",
        "Bairro": "Coelho Neto",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "25-Pavuna"
    },
    {
        "Endereço": "Rua Cel. Moreira Cesar",
        "Bairro": "Costa Barros",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "25-Pavuna"
    },
    {
        "Endereço": "Largo do Anil",
        "Bairro": "Jacarepaguá",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua Gal. Olívio Uzêda",
        "Bairro": "Jacarepaguá",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua Vossio Brigido, Gal.",
        "Bairro": "Jacarepaguá",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Avenida Eng. Souza Filho",
        "Bairro": "Jacarepaguá",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Avenida das Lagoas",
        "Bairro": "Gardênia Azul",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua Edgard Cavaleiro",
        "Bairro": "Cidade de Deus",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "34-Cidade de Deus"
    },
    {
        "Endereço": "Rua Moisés",
        "Bairro": "Cidade de Deus",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "34-Cidade de Deus"
    },
    {
        "Endereço": "Rua Araguaia",
        "Bairro": "Freguesia(Jacarepaguá)",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua Ariapo",
        "Bairro": "Taquara",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua José Perigault",
        "Bairro": "Taquara",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Ruas Alexandre Ramos e Coronel Tedim",
        "Bairro": "Tanque",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua Barão",
        "Bairro": "Praça Seca",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Rua das Margaridas",
        "Bairro": "Vila Valqueire",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Avenida Jambeiro",
        "Bairro": "Vila Valqueire",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "16-Jacarépaguá"
    },
    {
        "Endereço": "Praça São Perpétuo",
        "Bairro": "Barra da Tijuca",
        "Dia": "Domingo",
        "Horário": "07:00 às 13:00",
        "RA": "24-Barra da Tijuca"
    },
    {
        "Endereço": "Praça São Perpétuo",
        "Bairro": "Barra da Tijuca",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 13:00",
        "RA": "24-Barra da Tijuca"
    },
    {
        "Endereço": "Rua Olímpio de Castro",
        "Bairro": "Campo dos Afonsos",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Rua Abrantes",
        "Bairro": "Magalhães Bastos",
        "Dia": "Sexta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Rua São Caetano",
        "Bairro": "Magalhães Bastos",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Rua Magoari",
        "Bairro": "Realengo",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Rua Mal Modestino",
        "Bairro": "Realengo",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Rua Eunapio Deiro",
        "Bairro": "Realengo",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Estrada Manuel Nogueira de Sá",
        "Bairro": "Realengo",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "33-Realengo"
    },
    {
        "Endereço": "Ruaelianto",
        "Bairro": "Padre Miguel",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Praça Iguatama",
        "Bairro": "Bangu",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Rua Prof. Clemente Ferreira",
        "Bairro": "Bangu",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Rua Mal Marciano",
        "Bairro": "Bangu",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Rua Cherburgo",
        "Bairro": "Bangu",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Rua Urucum",
        "Bairro": "Bangu",
        "Dia": "Quinta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Rua Carnauba",
        "Bairro": "Senador Camara",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "17-Bangu"
    },
    {
        "Endereço": "Rua Campo Maior / Avenida Mariana",
        "Bairro": "Campo Grande",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "18-Campo Grande"
    },
    {
        "Endereço": "Rua Laudelino Vieira de Campos",
        "Bairro": "Campo Grande",
        "Dia": "Domingo",
        "Horário": "07:00 às 14:30",
        "RA": "18-Campo Grande"
    },
    {
        "Endereço": "Rua Campeiro-Mor",
        "Bairro": "Santa Cruz",
        "Dia": "Terça-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "19-Santa Cruz"
    },
    {
        "Endereço": "Rua Floresta",
        "Bairro": "Sepetiba",
        "Dia": "Sábado",
        "Horário": "07:00 às 14:30",
        "RA": "19-Santa Cruz"
    },
    {
        "Endereço": "Rua Roberto da Silveira/Parque União",
        "Bairro": "Maré",
        "Dia": "Quarta-Feira",
        "Horário": "07:00 às 14:30",
        "RA": "30-Complexo da Maré"
    }
];

let feirinhasList = document.getElementById('feirinhas-list');
feiras.forEach(feira => {

    const diaSemana = feira['Dia'].replace('Feira', 'feira');

    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(feira['Bairro'] + ', ' + feira['Endereço'])}`;

    var newElem = `
        <div class="container mt-3 pb-3 border-bottom">
            <div class="row">

                <div class="col">
                    <div class="custom-weight bairro">
                        <a class="text-body-secondary" href="${googleMapsLink}" target="_blank">${feira['Bairro']}</a>
                    </div>                     
                    <div class="endereco text-body-tertiary">${feira['Endereço']}</div>
                </div>

                <div class="col dia text-body-secondary">
                    ${diaSemana}
                </div>

                <div class="col hora text-body-secondary">
                    ${feira['Horário']}
                </div>
                
            </div>
        </div>`;
    
    feirinhasList.innerHTML += newElem;
    
});

// Manipular evento de digitação na caixa de busca
document.getElementById('search-input').addEventListener('input', function () {
    let searchTerm = this.value.toLowerCase();
    let feiraElements = feirinhasList.getElementsByClassName('container');
  
    // Percorrer os elementos de feira e mostrar/esconder com base no termo de busca
    for (let i = 0; i < feiraElements.length; i++) {
      let feiraElement = feiraElements[i];
      let bairro = feiraElement.querySelector('.bairro').textContent.toLowerCase();
      let endereco = feiraElement.querySelector('.endereco').textContent.toLowerCase();
      let dia = feiraElement.querySelector('.dia').textContent.toLowerCase();
      let hora = feiraElement.querySelector('.hora').textContent.toLowerCase();
  
      if (bairro.includes(searchTerm) || endereco.includes(searchTerm) || dia.includes(searchTerm) || hora.includes(searchTerm)) {
        feiraElement.style.display = 'block'; // Mostrar elemento
      } else {
        feiraElement.style.display = 'none'; // Esconder elemento
      }
    }
  });
