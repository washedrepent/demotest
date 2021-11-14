const args = process.argv.slice(2);//get command line arguments
console.log(args);

const num = args[0];

for(let i = 0; i < num; i++) {
    console.log("I am here");
}
/*
let arr = [
    1,
    2,
    3,
    '1'
];



console.log(arr);*/