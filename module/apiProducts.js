var categorias = {
    categorias: [
        { id: 1, nome: 'Pizza', foto: '../img/Vector (1).png' },
        { id: 2, nome: 'Bebidas', foto: '../img/Kawaii Soda.png' },
        { id: 3, nome: 'Pizzas Vegetarianas', foto: '../img/Watermelon.png' },
        { id: 4, nome: 'Pizzas Salgadas', foto: '../img/Pizza.png' },
        { id: 5, nome: 'Pizzas Doces', foto: '../img/Ice Cream Sundae.png' },
        { id: 6, nome: 'Sobremesas', foto: '../img/Kawaii Cupcake.png' }
    ]
}

var produtos = {
    nome_fantasia: 'Tony Pizzaria',
    produtos:
        [
            {

                id: 1,
                nome: 'Pizza de calabreza com queijo',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[3]
                ],
                foto: '../img/pizza_calabresa_com_queijo.jpg',
                preco: '16.00',
                descricao: 'Hmm delicia',
                favorita: true,
                avaliacao: 5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 2,
                            foto: '../img/Ellipse 7.png',
                            nome: 'Maria da Silva',
                            data: '15/03/2022',
                            avaliacao: 5,
                            titulo: 'Pizza muito boa!',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '../img/Ellipse 8.png',
                            nome: 'Pedro Gomes Dias',
                            data: '21/05/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 2,
                nome: 'Pizza de peperoni com queijo',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[3]
                ],
                foto: '../img/pepperoni_com_queijo.jpg',
                preco: '19.00',
                descricao: 'Hmm delicia muito bom',
                favorita: true,
                avaliacao: 4,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '01/07/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '30/10/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 3,
                nome: 'Pizza de calabreza com queijo',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[3]
                ],
                foto: '../img/pizza calabresa.png',
                preco: '16.00',
                descricao: 'Hmm delicia muito bom que otima',
                favorita: false,
                avaliacao: 4,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '27/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '15/05/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 4,
                nome: 'Pizza de peperoni com queijo e tomate',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[3]
                ],
                foto: '../img/pepperoni_com_queijo_tomate.jpg',
                preco: '17.00',
                descricao: 'Hmmm',
                favorita: false,
                avaliacao: 4,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '23/11/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '18/06/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 5,
                nome: 'Pizza brotinho com queijo e tomate',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[3]
                ],
                foto: '../img/brotinho_qjo_tomate.jpg',
                preco: '12.00',
                descricao: 'Hmmm',
                favorita: false,
                avaliacao: 4,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 5,
                nome: 'Pizza palmito com mussarela',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[2]
                ],
                foto: '../img/palmito_qjo.png',
                preco: '16.50',
                descricao: 'Hmmm',
                favorita: true,
                avaliacao: 5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 6,
                nome: 'Pizza de Brócolis, Palmito e Azeitona ',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[2]
                ],
                foto: '../img/brocolis_palmito_azeitona.jpg',
                preco: '18.50',
                descricao: 'Hmmm',
                favorita: false,
                avaliacao: 4,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 7,
                nome: 'Pizza Marguerita',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[2]
                ],
                foto: '../img/pizza-margherita.jpg',
                preco: '15.80',
                descricao: 'Hmmm',
                favorita: false,
                avaliacao: 3.5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 8,
                nome: 'Pizza Mussarela, shimeji refogado no shoyo',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[2]
                ],
                foto: '../img/shimeji_queijo.webp',
                preco: '18.80',
                descricao: 'Hmmm',
                favorita: true,
                avaliacao: 5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 9,
                nome: 'Pizza Morango com chocolate',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[4]
                ],
                foto: '../img/morango_chocolate.webp',
                preco: '13.00',
                descricao: 'Hmmm',
                favorita: true,
                avaliacao: 5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 10,
                nome: 'Pizza de Brownie',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[4]
                ],
                foto: '../img/brownie_pizza.jpg',
                preco: '16.00',
                descricao: 'Hmmm',
                favorita: true,
                avaliacao: 5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 11,
                nome: 'Pizza Banoffe',
                categoria: [
                    categorias.categorias[0],
                    categorias.categorias[4]
                ],
                foto: '../img/banoffe_pizza.jpg',
                preco: '15.00',
                descricao: 'Hmmm',
                favorita: true,
                avaliacao: 5,
                comentarios:
                    [
                        {
                            id: 1,
                            id_usuario: 1,
                            foto: '',
                            nome: 'Fulano da Silva',
                            data: '10/02/2022',
                            avaliacao: 5,
                            titulo: 'Pizza legal!',
                            comentario: 'Nossa muito bom, adorei.'
                        },
                        {
                            id: 2,
                            id_usuario: 3,
                            foto: '',
                            nome: 'Pedro Gomes Dias',
                            data: '17/03/2022',
                            avaliacao: 5,
                            titulo: 'Essa pizza é demais, recomendo.',
                            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                        }
                    ]
            },
            {
                id: 12,
                nome: 'Cheesecake',
                categoria: [
                    categorias.categorias[5]
                ],
                foto: '',
                descricao: 'Torta leve à base de cream cheese com massa de biscoito e calda de frutas vermelhas',
                preco: 15.99
            },
            {
                id: 13,
                nome: 'Petit Gateau',
                categoria: [
                    categorias.categorias[5]
                ],
                foto: '',
                descricao: 'Bolinho feito com chocolate belga, servido quente com sorvete de creme',
                preco: 13.99
            },
            {
                id: 14,
                nome: 'Tiramisù Tradicional',
                categoria: [
                    categorias.categorias[5]
                ],
                foto: '',
                descricao: 'Preparado com creme de queijo mascarpone, biscoito champanhe e calda de café',
                preco: 14.99
            },
            {
                id: 15,
                nome: 'Coca-cola',
                categoria: [
                    categorias.categorias[1]
                ],
                tamanho: '2L',
                foto: '../img/coca.png',
                descricao: 'Refrigerante Garrafa 2l Embalagem Econômica',
                preco: 14.99
            },
            {
                id: 16,
                nome: 'Cerveja Heineken',
                categoria: [
                    categorias.categorias[1]
                ],
                tamanho: '600ml',
                foto: '../img/cerveja.png',
                descricao: 'Refrigerante Garrafa 2l Embalagem Econômica',
                preco: 17.99
            },
            {
                id: 17,
                nome: 'Suco Dell Vale',
                categoria: [
                    categorias.categorias[1]
                ],
                tamanho: '290ml',
                foto: '../img/del_valle_uva.webp',
                descricao: 'Suco Lata 290ml sabor Uva',
                preco: 8.99
            },
            {
                id: 18,
                nome: 'Chá gelado',
                categoria: [
                    categorias.categorias[1]
                ],
                tamanho: '300ml',
                foto: '../img/cha_gelado.webp',
                descricao: 'Iced Tea Garrafa Leao Zero sabor Pêssego ',
                preco: 10.99
            },
            {
                id: 19,
                nome: 'Sprite',
                categoria: [
                    categorias.categorias[1]
                ],
                tamanho: '350ml',
                foto: '../img/sprite_lata.jpg',
                descricao: 'Refrigerante Lata 350ml',
                preco: 9.99
            }
        ]
}

module.exports = {
    produtos,
    categorias
}