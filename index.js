let products = [
    {
        id: '1',
        name: 'Kohlroulade',
        price: '12,39€',
        description: 'Lieblingsessen an Weihnachtstagen'
    },
    {
        id: '2',
        name: 'Pfannkuchen',
        price: '2,39€',
        description: 'Sehr beliebtes Dessert'
    },
    {
        id: '3',
        name: 'Kuttelsuppe',
        price: '5,49€',
        description: 'Sehr beliebtes Essen im Süden Rumäniens'
    },
    {
        id: '4',
        name: 'Mischmasch',
        price: '0,45€',
        description: 'Lieblingsessen am Feiertag'
    },
    {
        id: '5',
        name: 'Tomatensalat',
        price: '1,25€',
        description: 'Sehr beliebtes Vorspeise.'
    },
    {
        id: '6',
        name: 'Kartoffelpüree',
        price: '4,67€',
        description: 'Mit gegrilltem Fleisch servieren'
    }

];

function generateProduct(product) {
    return `
    <p id="name-price">${product.id}. ${product.name} ${product.price} - ${product.description}</p>
    `;
}

window.onload = function () {
    products.forEach(product => {
        document.getElementById('list').insertAdjacentHTML("beforeend", generateProduct(product));
    });
}