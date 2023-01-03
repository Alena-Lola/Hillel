function genealogicalTree(arr){


const peoples = [
    {
        name: 'Alina',
        money: 2700.32,
        cities: 'Lviv, Kyiv, Ternopil',
        children: [
            {
                name: 'Oliver',
                age: 6,
            }
        ]
    },
    {
        name: 'Andrii',
        money: 9301.32,
        cities: 'Paris, Madrid, Rivne',
        children: []
    },
    {
        name: 'George',
        money: '35000',
        cities: 'Stambul',
        children: [
            {
                name: 'Olha',
                age: 8,
            },
            {
                name: 'Olena',
                age: 2,
            }
        ]
    }
];


// властивість name повинна бути приведена до верхнього регістра
for (let i=0;i<peoples.length;i++) {
    const parents = peoples[i];
    parents.name = parents.name.toUpperCase();
    console.log(parents.name);

}


// властивість cities повинна бути розбита по комі і перетворена в масив
    for (let i=0;i<peoples.length;i++) {
        const parents = peoples[i];
       console.log(parents.cities.split(','));

}


// властивість money повинна бути округлена до цілого числа.
//     Якщо властивість money передано у вигляді стрічки повинно привести її до числового типу, якщо після приведення до типу значення рівне NaN вивести повідомлення в консоль
for (let i=0;i<peoples.length;i++) {
    const parents = peoples[i];
    console.log(Number.parseInt(parents.money));
}

// властивість name повинна бути приведена до верхнього регістра
for (let i=0;i<peoples.length;i++) {
    for (let q = 0; q < peoples[i].children.length; q++) {
        const children = peoples[i].children[q];
        children.name = children.name.toUpperCase();
        console.log(children.name);
    }
}


// в властивість children додати новий елемент з імям 'Stepan' і згенерувати випадковий вік до 18 років
for (let i=0;i<peoples.length;i++) {
    for (let q = 0; q < peoples[i].children.length; q++) {
        const children = peoples[i].children[q];
        children.name={}
        console.log(children.name.name= 'Stepan',Math.floor(Math.random()*19));
    }

}
return arr;
}
arr=[];
console.log(genealogicalTree(arr));