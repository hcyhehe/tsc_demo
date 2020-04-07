//泛型
function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity(666);
console.log(output1, typeof (output1), output2, typeof (output2));
