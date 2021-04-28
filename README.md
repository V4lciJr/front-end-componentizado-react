## Front-end Componentizado :fa-graduation-cap:
<p>
    Código desenvolvido na Aula do Professor Matheus Benites no curso da Digital Innovation One
</p>

>Essas são algumas notas das aulas que separei para entender melhor os conceitos

## Objetivos da Aula
1. **Entendendo Responsabilidades**
2. **Transformando a Interface em Lego**
3. **Transformando o nosso lego em Interface**

### Entendo Responsabilidades

  * Quanto menor a responsabilidade de um componente, melhor ele é, melhor pra dar manutenção, pra escalar, pra expandir e etc.<br>
  * O ideal é cada componente tenha uma responsabilidade única.

#### Exemplo 
!['Imagem de exemplo'](https://i.imgur.com/iB88QGq.png)
>Fonte: Imagem capturada das aulas do Professor Matheus Benites

<p>
	Este componente Profile, possui uma única responsabilidade, que é mostrar os dados de perfil do usuário.
</p>

#### Por que eu devo Componentizar?
* Responsabilidade
* Fácil Manutenção
* Reusabilidade
* Extensibilidade
* Código mais inteligível e fácil de ler

<p>
	Foi construida uma aplicação de pesquisa de usuário no github, onde vamos consumir a API de endpoints da plataforma github.
	Vamos passar um username de usuário e aplicação nos retornará os seguintes dados:
</p>

* Dados do perfil do usuário
* Os repositórios do usuário
* Repositórios em que o usuário marcou com :tw-2b50:

### Transformando a interface em lego :tw-1f3e2:
<p>
	Separar bem  a responsabilidade e montar  de um forma que forma que seja reutilizável.<br>
	Mais por que lego ? Lego é aquele famoso jogo onde temos peças de vários formatos e tamanhos que vamos encaixando até chegarmos no nosso desenho final, se a peça não encaixa bem, é por que ela não faz parte daquele componente.<br>Com isto podemos trazer esta analogia para a programação, onde vamos dividir nossa aplicação em peças que consigam se encaixar perfeitamente umas com as outras, onde cada componente terá uma responsabilidade única, desta forma caímos naquela máxima que os professores nos ensinam, logo quando vamos aprender nossa primeira linguagem orientada a objetos, **"dividir para conquistar"**.
</p>

### Transformando o nosso lego em interface

<p>
	Agora após de termos dividido o problema, é a parte onde montamos o quebra-cabeças e vamos encaixando nossas peças
</p>
