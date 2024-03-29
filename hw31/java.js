const generateList = function generateList(ary) {
     const ul = document.createElement('ul');

    ary.forEach(function(el) {
        const li = document.createElement('li');
        let childElement;

        if (Array.isArray(el)) {
            childElement = generateList(el);
        } else {
            childElement = document.createTextNode(el)
        }

        li.appendChild(childElement);
        ul.appendChild(li);
    })

    return ul;
}

document.body.appendChild(generateList([1, 2, 3]))
document.body.appendChild(generateList([1, 2, [1.1, 1.2, ['1.2.1', '1.2.2'], 1.3], 3]))
