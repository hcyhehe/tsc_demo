//泛型

function identity<T>(arg: T): T {
    return arg
}

let output1 = identity<string>("myString")
let output2 = identity<number>(666)

console.log(output1, typeof(output1), output2, typeof(output2))
