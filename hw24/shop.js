const categories = ["Bags", "Clothes", "Electronics"];
const items = [
    {
        name:"Lisa",
        material:"Leather",
        category:"Bags",
        price:"$120",
        description:"About bags!"
    },
    {
        name:"Mila",
        material:"Leather",
        category:"Bags",
        price:"$100",
        description:"About bags!"

    },
    {
        name:"Jin",
        material:"Leather",
        category:"Clothes",
        price:"$110",
        description:"About clothes!"
    },
    {
        name:"Jin",
        material:"Metal",
        category:"Electronics",
        price:"$110",
        description:"About electronics!"
    },{
        name:"Bob",
        material:"Metal",
        category:"Electronics",
        price:"$160",
        description:"About electronics!"
    }
]


const categoryListElement = document.getElementById("category-list")
const itemsListElement = document.getElementById("items-list")
const infoListElement = document.getElementById("info-list")

for(let i=0; i < categories.length; i++ ) {
    const buttonElement = document.createElement('button')
    buttonElement.innerHTML = categories[i]
    buttonElement.id = categories[i]
        buttonElement.classList.add("btn")

    buttonElement.addEventListener("click",function(){
        itemsListElement.innerHTML=''
        showItems(categories[i])
    })

    categoryListElement.appendChild(buttonElement)
}

function showItems(category) {

    for (let b = 0; b < items.length; b++) {
        if (category===items[b].category) {
            const itemElement = document.createElement('div');
            itemElement.classList.add("itemElement")


            const itemElementName = document.createElement('p');
            itemElementName.innerHTML = 'name:' + items[b].name
            itemElementName.id = items[b].name
            itemElementName.classList.add("item")


            const itemElementMaterial = document.createElement('p');
            itemElementMaterial.innerHTML = 'material:' + items[b].material
            itemElementMaterial.id = items[b].material
            itemElementMaterial.classList.add("item")

            const itemElementCategory = document.createElement('p');
            itemElementCategory.innerHTML = 'category:' + items[b].category
            itemElementCategory.id = items[b].category
            itemElementCategory.classList.add("item")

            const itemElementPrice = document.createElement('p');
            itemElementPrice.innerHTML = 'price:' + items[b].price
            itemElementPrice.id = items[b].price
            itemElementPrice.classList.add("item")

            itemElement.appendChild(itemElementName)
            itemElement.appendChild(itemElementMaterial)
            itemElement.appendChild(itemElementCategory)
            itemElement.appendChild(itemElementPrice)

            itemsListElement.appendChild(itemElement)


            itemElement.addEventListener("click",function(){
                infoListElement.innerHTML=''
                showInfo(items[b])
            })
            itemsListElement.appendChild(itemElement)
        }


 function showInfo (description) {
     // co description === items.description ;

            const itemElement = document.createElement('div');
            itemElement.classList.add('itemElement')

            const itemElementDescription = document.createElement('p');
               itemElementDescription.innerHTML = "Description"+items.description


            itemElement.appendChild(itemElementDescription)

            infoListElement.appendChild(itemElement)
        }


    }
}
