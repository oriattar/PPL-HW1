## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
   1. [5 points] Object Oriented
   1. [5 points] Functional
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?

Answer:
1.i) Imperative paradigm - treat the program as a sequence of instructions or commands, and run them one by one.
1.ii) Object Oriented paradigm - the entities in the program are objects, and a program is a sequence of massage passing between those objects.
1.iii) Functional paradigm - treat the program as an expression, and running the program means calculating the expression and finding its value.

2) The object-oriented paradigm improves on the imperative paradigm by adding layers of abstraction.
In OOP, it is possible to define more complex structures, or types, and give them meaning through interfaces.
This makes code easier to read, allows users to work with objects without knowing their implementation, and helps define clear roles for classes in a program.

3) The functional paradigm improves on OOP in situations where simplicity and predictability are important.
In functional programming, functions have no side effects, meaning they do not modify the program’s state. 
The paradigm also emphasizes immutability and avoids shared state, which makes programs easier to understand, test, and debug.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

Answer:
```ts
const getDiscountedProductAveragePriceFP = (inventory:Product[]) : number => inventory.filter((p : Product) : boolean => 
p.discounted).reduce((acc : number[], curr : Product) : number[] => ([acc[0] + curr.price, acc[1]+1]),[0,0])
.reduce((acc :number,curr:number):number=>curr === 0 ? 0:acc/curr);
```

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `<T>(x : T[], y :(element : T) =>boolean)):boolean => x.some(y)`
2. [3 points] `(x: number[]):number[] => x.map((y :number):number => y * 2)`
3. [3 points] `<T>(x :T[], y:(element :T)=>boolean):T[] => x.filter(y)`
4. [3 points] `(x : number[]) => x.reduce((acc:number, cur:number):number => acc + cur, 0)`
5. [3 points] `<T>(x : boolean, y : T[]):T => x ? y[0] : y[1]`
6. [3 points] `<T,H>(f:(element :T) => H,g:(input:number)=> T):((input:number) => H) => x => f(g(x+1))`
