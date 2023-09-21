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

Se colocar um . após o add é registrado todos os arquivos sem excessão.

Usando o **git status** podemos ver que já esta aparecendo que tem um novo commit para ser salvo.

O commit é usado para criar um novo registro de historico do projeto. O parametro -m é usado para exibir uma mensagem no commit.

```git commit -m"commit inicial"```

Usando o **git log** ele mostra que o commit foi feito, a data e o autor.

Temos a opção de usar um arquivo chamado .gitignore para ignorar pastas e arquivos, fazendo com que não entrem no commit.

```Echo resumos/ > .gitignore```

Para apagarmos o **git init** apagamos a pasta **.git** com o comando:

```rm -rf .git```

Para recuperar arquivos excluídos usamos o comando:

```git restore (arquivo)```

Alterar a mensagem do último commit usamos o comando:

```Git commit –amend -m”nova mensagem“```

**Git reset** é uma ferramenta que permite redefinir o estado de um repositório git, possui 3 parametros principais:

```Git reset --soft (commit)``` = Pega os arquivos no commit anteriores e adiciona os arquivos na área de preparação. Manter as alterações atuais disponíveis para futuros commits. 

```Git reset --mixed (commit)``` = Redefine o índice, mas não a árvore de trabalho (ou seja, os arquivos alterados são preservados, mas não marcados para um commit) e relata o que não foi atualizado. Esta é a ação predefinida.

````Git reset --hard (commit) ````= redefine o indice e a área de trabalho. Quaisquer alterações nos arquivos rastreados na árvore de trabalho deste commit serão descartados.

## Enviando e baixando alterações com o Repositório Remoto

Comando que vamos usar para se conectar a um repositório remoto é:

````git remote add origin https://github.com/seu-usuario/seu-repositorio.git ````


Comando usado para enviar as alterações do repositório local para o repositório remoto é: 

```git push -u origin main```

O parâmetro -u é usado para configurar a branch main e o repositório remoto.

Origin é o apelido do repositório remoto e
Main é o apelido do repositório local

Comando usado para puxar as alterações do repositório remoto para o local é: 

```git pull```