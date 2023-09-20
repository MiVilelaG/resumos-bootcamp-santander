# Resumo Modulo 1 - Git e GitHub

## Criando e Clonando Repositórios 😜

Com a primeira aula aprendemos a criar e clonar repósitorios utilizando Git.
Para começar precisamos abrir o Git Bash e criar uma pasta nova, utilizando o comando **mkdir**.

``` mkdir aula1 ```

Após isso, acessamos a pasta com **cd** e usamos o comando **git init** que é utilizado para iniciar um novo repósitorio Git em um diretório local.

``` git init ```

Entramos no repositório Git utilizando o comando:

``` cd .git ```

Este diretório é responsavel por gerenciar o controle de versão do repositório.

Entrando no site [GitHub](https://github.com) vamos criar um repositório e clonar ele para repositório local.

Usando o comando **git clone** vamos clonar o repositório do github para o git.

```git clone (URL do repositório)```

Para renomear a pasta, repetimos o comando acima e na frente colocamos o novo nome da pasta.

```git clone (URL do repositório) (novo nome da pasta)```

Comando para ver o status do repositório: 
```git status```

Comando para ver os logs do repositório:
```git log```

Para escrever um arquivo .md dentro do repositório, usamos a linguagem de marcação de texto MARKDOWN. 
A forma mais facil de criar um texto em MARKDOWN é utilizando um site que já vai te proporcionar o código completo.

[Site de MARKDOWN](https://readme.so/pt)
__________________________________________________
[Documentação MARKDOWN](https://markdown.net.br/sintaxe-basica/)


## Salvando alterações no repositório local 😎

Utilizando o **git add** podemos preparar mudanças em arquivos para serem registradas no repositório git.

```git add (arquivo)```

Usando o **git status** podemos ver que já esta aparecendo que tem um novo commit para ser salvo.

O commit é usado para criar um novo registro de historico do projeto. O parametro -m é usado para exibir uma mensagem no commit.

```git commit -m"commit inicial"```

Usando o **git log** ele mostra que o commit foi feito, a data e o autor.


