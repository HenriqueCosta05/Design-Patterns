# Factory Method

## Intenção Oficial
>[!IMPORTANT]
> Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O factory method permite *adiar* a instanciação para as subclasses.

* Fábricas são simplemente operações que criam objetos.

## Factory em geral

 ```typescript
type Car = {
    model: string;
    engine: string;
}

type CarPrototype = {
    showDetails(): void;
}

const carPrototype: CarPrototype = {
    showDetails(): void {
        console.log(this);
    }
}

const carFactory = (model: string, engine: string): Car & CarPrototype => {
    const idAsPrivateMember = Math.floor(Math.random() * 1000);
    const carObj = Object.create(carPrototype);
    return Object.assign(carObj, {id: idAsAPrivateMember, model, engine});
};

const car1 = carFactory('Fusca', 'V8');
car1.showDetails(); //{id: 239, model: 'Fusca', engine: 'V8'}
```

## Sobre o Factory Method
* É um padrão de projeto de criação (lida com a criação de objetos).
* Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas.
* É obtido através de herança. O método fábrica pode ser criado ou sobescrito por subclasses.
* Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar o código já escrito (OCP).
* Pode usar parâmetros para determinar o tipo dos objetos a serem criados ou os parâmetros a serem enviados aos objetos sendo criados.

## Estrutura
<img src="./assets/Factory-Method.png" alt="Factory method"/>

### Observações

* **Product**: É a interface em comum para produtos finais. Classes que implementam o factory method devem retornar produtos que implementam essa interface.

* **ConcreteProduct**: Produtos concretos que serão retornados pelas classes que implementarem o factory method.

* **Creator**: Responsável pela criação de um factory method abstrato (também pode implementar um factory method). Essa classe pode e deve conter outros membros (métodos e atributos) para sua lógica interna.

* **Concrete Creator**: A única responsabilidade dessas classes é implementar o factory method informando qual produto será retornado. Também pode implementar lógica para a criação de produtos.

## Implementação

```typescript
    interface Product {
        sayHi(): void;
    }

    class ConcreteProduct implements Product {
        sayHi(): void {
            console.log('Hi');
        }
    }

    abstract class Creator {
        abstract factoryMethod(): Product;

        createAndShow(): void {
            const product = this.factoryMethod;
            console.log(product);
        }
    }

    class ConcreteCreator extends Creator {
        factoryMethod(): Product {
            return new ConcreteProduct();
        }
    }

    const creator = new ConcreteCreator();
    const product = creator.factoryMethod();
    product.sayHi();
    creator.createAndShow();

```

## Aplicabilidade

* Use o Factory Method quando não souber com certeza quais os tipos de objetos o seu código vai precisar.

* Use o Factory Method para permitir a extensão de suas factories para criação de novos objetos (isso ajuda a aplicar o Open/Closed Principle).

* Use o Factory Method para desacoplar o código que cria do código que usa as classes (Single Responsibility Principle).

* Use o Factory Method para dar um hook (gancho) à subclasses para permitir que elas decidam a lógica de criação dos objetos.

* Use o factory method para eliminar a duplicação de código na criação de métodos.

## Prós e Contras

### Prós
* Ajuda a aplicar o Open/Closed Principle. Seu código vai estar aberto para extensão.
* Ajuda na aplicação do Single Responsibility Principle. Separa o código que cria (1) do código que usa (2) o objeto.
* Ajuda no desacoplamento do código.

### Contras
* Se usado sem necessidade, pode causar uma explosão de subclasses.
* Será necessária uma classe ConcreteCreator para cada ConcreteProduct.