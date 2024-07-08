# Composite

## Introdução - Padrões Estruturais
> [!NOTE]
> Os padrões estruturais se preocupam com a forma como os objetos são composotos para formar estruturas maiores.

## Intenção Oficial
Compor objetos em estruturas de árvore para representar hierarquias partes/todo. O composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

## Sobre o Composite
* É um padrão da categoria estrutural (structural)
* Faz mais sentido em estruturas que podem ser tratadas hierarquicamentes (como árvores)
* Pode ser uma solução para estruturas complexas que podem ser tratadas de maneira uniforme
* Prioriza composição em vez de herança
* Exemplo: produto solto com preço e caixa com vários do mesmo produto com preço

## Estrutura
<img src='./assets/Composite.png' alt="Composite"/>

### Observações
* Leaf e Composite fazem parte de uma estrutura de árvore, onde Leafs são nós externos (que não possuem filhos) e Composite são nós internos (possuem filhos).
* Component é um protocolo que é implementado pelo composite, com operações e/ou atributos em comum
* Component e composite possuem uma relação de agregação, permitindo a criação de novos composites implementando o component.

## Aplicabilidade
Usar o padrão Composite quando:
* Uma estrutura de objetos possa ser representada hierarquicamente, como estruturas do tipo árvore.
* O código cliente trata os objetos compostos e objetos simples da mesma maneira.

## Prós e Contras
### Bom
* É muito fácil criar objetos complexos por composição
* É fácil gerar uma hierarquia de objetos
* É fácil usar polimorfismo e recursão
* É fácil adicionar novos tipos de elementos na estrutura (OCP)

### Ruim 
* Dependendo da estrutura, pode quebrar o princípio de segregação de interfaces, pois objetos do tipo 'Leaf' tendem a ter método qeu não usam ou não fazem nada.