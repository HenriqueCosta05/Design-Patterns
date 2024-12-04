export abstract class ProductComponent {
    abstract getPrice(): number;
    //Leaf não pode ter os métodos abaixo, por isso não serão abstratos
    add(product: ProductComponent): void {}
    remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
         super();
    }

    getPrice(): number {
        return this.price;
    }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];
  
    add(...products: ProductComponent[]): void {
        products.forEach((product) => this.children.push(product))
  }
    remove(product: ProductComponent): void {
      const productIndex = this.children.indexOf(product);
      if (productIndex !== -1) this.children.splice(productIndex, 1);
    }
    
    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
    }
}

//Client 
const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Celular', 500);
const tShirt = new ProductLeaf('Camiseta', 40);

const productBox = new ProductComposite();
productBox.add(tShirt, pen, smartphone);

console.log(productBox);
console.log(productBox.getPrice());