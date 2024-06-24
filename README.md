# Design Patterns

## Introdução
Esse repositório tem como objetivo principal armazenar os conhecimentos adquiridos sobre padrões de projeto. 

### O que são padrões de projeto?
>[!NOTE]
>São **soluções elegantes para problemas conhecidos** reccorentes no desenvolvimento de software que foram utilizados e testados no passado e continuam relevantes nos dias atuais.

Esses padrões de projeto foram catalogados e popularizados pelo livro "**Padrões de projeto - Soluções reutilizáveis de software orientado a objetos**".

## Categorias 
1. **De Criação**: visam abstrair o processo de como os objetos são criados na aplicação.
2. **Estruturais**: lidam com a composição de classes e objetos.
3. **Comportamentais**: caracterizam como as classes e objetos interagem e distribuem responsabilidades na aplicação.

> [!WARNING]  
> Padrões de projeto são **APENAS SUGESTÕES** de software que podem ser aplicadas a qualquer linguagem de programação.

## Benefícios e Problemas 

### Benefícios

* Padrões universais facilitam o entendimento do projeto
* Evita refatoração desnecessária
* Ajuda na reutilização de código (conceito **DRY** - Don't Repeat Yourself)
* Abstrai e nomeia partes particulares do projeto.
* Ajuda na aplicação dos princípios do design orientado a objetos (**SOLID**)
* Facilitam a criação de teste unitários

### Problemas

* Alguns padrões podem ser complexos até que você os compreenda
* Muito código para atingir um objetivo simples
* Podem trazer otimizações prematuras ao seu código (**YAGNI** - You Ain't Gonna Need It)
* Se usados incorretamente, podem atrapalhar ao invés de ajudar.

## Uma visão geral sobre SOLID

**SOLID** é um acrônimo dado para cinco princípio da programação orientada a objetos que facilitam no desenvolvimento de software, tornando-os fáceis de manter e estender!

* **Single Responsibility Principle**: uma classe deve ter apenas *um motivo* para mudar.
* **Open/closed principle**: classes ou objetos devem estar abertos para extensão, mas fechados para modificações
* **Liskov substitution principle**: classes derivadas devem ser capazes de substituir totalmente classes-bases
* **Interface segregation principle**: os clientes não devem ser forçados a depender de interfaces que não utilizam
* **Dependency inversion principle**: módulos de alto nível não devem ser dependentes de módulos de baixo nível, ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.