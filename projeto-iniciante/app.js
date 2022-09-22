console.log("Bem vindo ao sistema Codecademy!");



//Criação do objeto instituição e suas propriedades
const instituicao = {

    nome: 'Codecademy', 
    objetivo: 'Ensinar programação para interessados',
    cursosGratuitos: true,
    cursosPagos: true,
    roadmap: true,


    //Curso que a instituição oferece e suas propriedades
    curso: {

        nome: 'Learn Javascript',

        vantagens:
        ['Certificado',
        '12 Projetos',
        '11 Atividades',
        'Amigável para iniciantes'],

        sumario: 
        ['Bem vindo a aprendizagem de Javascript',
        'Introdução',
        'Condicionais',
        'Funções',
        'Escopo',
        'Arrays',
        'Loops', 
        'Iteradores',
        'Objetos'],

        
    },

    menu: {

        catalogo:
        ['Python',
        'HTML & CSS',
        'Front-End',
        'Full-Stack',
        'Cursos mais populares'],

        recursos:
        ['Projetos',
        'Desafios de entrevista',
        'Docs',
        'Mapas',
        'Artigos',
        'Videos',
        'Blog',
        'Centro de Carreira'
        ],

        comunidade:
        ['Forums',
        'Discord',
        'Capítulos',
        'Eventos',
        'Histórias de Aprendizagem',
        ],

        precos:
        ['Individual',
        'Para estudantes',
        'Para times'
        ],

        'Solucoes de Emprego':[
            'Ciência da Computação',
            'Ciência de Dados',
            'Desenvolvimento Web',
            'Fundamentos de Código'
        ]

    },

    //Método de marketing
    marketing(){

        console.log('Conheça mais de Codecademy.'); 
        console.log('Ganhe certificado de conclusão com o nosso Plano Pro.');
    },

    //Criação do aluno e suas propriedades
    aluno: {

        nome: 'Amanda',
        acoes:
        ['Pesquisar',
        'Página inicial',
        'Catálogo',
        'Recursos',
        'Comunidade',
        'Preços',
        'Soluções de trabalho',
        'Perfil',
        'Experimente Plano Pro de graça'],

        perfil: {

            _foto: 'avatar.png',

            _nome: 'Amanda',

            _link: 'Github.com',

            ativo: '2 horas atrás',

            entrou: '2 de Julho de 2022',

            'Ultimos Cursos': 
            ['Learn JavaScript', 'PHP'],

            'Ultimos Certificados': 'Learn JavaScript',

            'Objetivos': 'Estudar 4x na semana',

           

        },


        //Criação de metodos

        //Pesquisa de cursos
        pesquisarCurso(nomeDoCurso){

            if (instituicao.curso.nome.indexOf(nomeDoCurso)){

                console.log('Curso encontrado');

                return true;

            } else {

                console.log('Curso não encontrado. :(');

                return false;
            }

        },


        //Página inicial
        paginaInicial(){

            console.log(`Olá, ${this._nome}`);
            console.log('Acesse os seus cursos!')
        },

        //Catálogo

        catalogo(){

            console.log('Bem vindo ao nosso catálogo!');
            console.log(instituicao.menu.catalogo.join());

            /*Método join() para concatenar os elementos do array
            e retornar um String.*/



        },

        recursos(){

            console.log('Esses são os nossos recursos:');
            console.log(instituicao.menu.recursos.join());

            /*Método join() para concatenar os elementos do array
            e retornar um String.*/
        },

        comunidade(){

            console.log('Essas são as nossas comunidades:');
            console.log(instituicao.menu.comunidade.join());

            /*Método join() para concatenar os elementos do array
            e retornar um String.*/
        },

        precos(){

            console.log('Selecione o tipo de plano');
            console.log(instituicao.menu.precos.join());

            /*Método join() para concatenar os elementos do array
            e retornar um String.*/
        },

        solucoesDeEmprego(){
            console.log('Essas são as nossas soluções:');
            console.log(instituicao.menu['Solucoes de Emprego'].join());

            /*Método join() para concatenar os elementos do array
            e retornar um String.*/
        },  


        //Edicao de perfil
        set nome(novoNome){
            perfil._nome = novoNome;
            console.log("Nome editado com sucesso!");
            console.log(`Seu novo nome é ${novoNome}`);
        },

        //Edição de biografia
        set biografia(novaBiografia){
            
            perfil._biografia = novaBiografia;
            console.log('Biografia atualizada com sucesso!');
            console.log(`Sua nova biografia é ${novaBiografia}`);
        },

        set foto(novaFoto){
            
            perfil._foto = novaFoto;
            console.log('Foto atualizada com sucesso!');
            console.log(`Sua nova foto é ${novaFoto}`);
        },

        set link(novoLink){
            
            perfil._link = novoLink;
            console.log('Link atualizado com sucesso!');
            console.log(`Seu novo link é ${novoLink}`);
        }

    }

}

instituicao.aluno.pesquisarCurso('Learn JavaScript');
//Curso encontrado

instituicao.aluno.paginaInicial();
//Mensagem do método de pagina inicial

instituicao.aluno.catalogo();
//Array com os valores do catálogo

instituicao.aluno.recursos();
//Array com os valores dos recursos

instituicao.aluno.comunidade();
//Array com os valores da comunidade

instituicao.aluno.precos();
//Array com os tipos de planos

instituicao.aluno.solucoesDeEmprego();
//Array com as soluções de emprego

instituicao.aluno.novoNome = 'Thiago';
console.log(instituicao.aluno.novoNome);
//Mostrará o novo nome

instituicao.aluno.novaBiografia = 'Nova bio!';
console.log(instituicao.aluno.novaBiografia);
//Mostrará a nova biografia

instituicao.aluno.novaFoto = 'nova-foto.png';
console.log(instituicao.aluno.novaFoto);
//Mostrará a nova foto

instituicao.aluno.novoLink = 'LinkedIn.com';
console.log(instituicao.aluno.novoLink);
//Mostrará a novo link





/*

    Calculo de média das atividades para aprovação
    e conquista de certificado.

    Esta área é totalmente fictícia.


*/


console.log('Bem vindo a area de atividades!');



const atividade = () => {

    var pontuacao = 0;

    perguntas =
    ['O que é JavaScript?', 
    'O que é um objeto?',
    'O que é um array?']

    respostas = 
    ['Uma linguagem de programação.',
    'Uma referência no local da memória que tem características reais',
    'Uma grande variável onde é possível guardar vários valores.'
    ]

    for (var i = 0; i < perguntas.length; i++){
        console.log(perguntas[i]);
        console.log(respostas[i]);  

        pontuacao++;
    }

    console.log(`Pontuação final: ${pontuacao}`);
    if (pontuacao == 3){
        console.log('Parabéns! Você foi aprovado.')

    } else {
        console.log('Não foi dessa vez :(')
    }

}

atividade();




//Alunos favoritos da Codecademy!
const alunosFavoritos = 
['Amanda',
'Thiago',
'Victor',
'Beatriz',
'Sara',
'João',
'Vinicius',
'Caio'];

alunosFavoritos.forEach(aluno => {

    console.log(aluno + ' É um aluno favorito!');
});




//Criando um aluno com Factory Function
const criarAluno = (nome, idade, objetivo) => {


    return {

        nome: 'José',
        idade: 19,
        objetivo: 'Ser programador'
    },

    console.log('Olá, mundo!');


}


const pessoa = {

    nome: 'Amanda',
    instituicao: 'Codecademy',
    tecnico: 'Desenvolvimento de Sistemas',
    unidade: 'SENAI Lauro de Freitas',
    estuda: 'JavaScript',
    idade: 18,


    get curso(){

        if(typeof this.tecnico === 'string'){

            return this.nome + ' é dev!';
        } else {

            return this.nome + ' não é dev :(';
        }

    }


}

//Atribuição desestruturada

const { idade } = pessoa;
console.log(idade + ' anos.');
//18

console.log(pessoa.curso);


for (index in pessoa) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos,
    faz curso técnico de ${pessoa.tecnico}
    no ${pessoa.unidade}
    e está estudando ${pessoa.estuda} na ${pessoa.instituicao}!`);
}

