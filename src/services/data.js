const delay = (data, error = '', delay = 1000) => 
    new Promise((resolve, reject) => 
        setTimeout(() => error ? reject(error) : resolve(data), 
    delay) 
);

const data = [
    {
        id: 1,
        name: 'Крупа гречана Повна Чаша ядриця швидкорозварювана',
        store: 'Fora',
        src: 'https://content.fora.ua/sku/ecommerce/49/480x480wwm/490833_480x480wwm_88a02c98-62b1-64ee-92f6-716a89b6b396.png',
        link: 'https://shop.fora.ua/index.php?route=product/product&product_id=76297',
        price: '37.99',
        weight: '1'
    },
    {
        id: 2,
        name: 'Крупа гречана Ситий двір ядриця',
        store: 'Fora',
        src: 'https://content.fora.ua/sku/ecommerce/48/480x480wwm/480943_480x480wwm_b87fbf98-edfe-1bc7-d8ba-b147c3d3a66f.png',
        link: 'https://shop.fora.ua/index.php?route=product/product&product_id=515952',
        price: '41.57',
        weight: '0.7'
    },
    {
        id: 3,
        name: 'Крупа 0,5 кг Своя лінія гречана ядриця відбірна',
        store: 'ATB',
        src: 'https://src.zakaz.atbmarket.com/cache/photos/catalog_product_main_6460.jpg',
        link: 'https://zakaz.atbmarket.com/product/531/82909',
        price: '25.70',
        weight: '1.2'
    },
    {
        id: 4,
        name: 'Крупа гречана «Премія»',
        store: 'Сільпо',
        src: 'https://content.silpo.ua/sku/ecommerce/69/480x480wwm/699717_480x480wwm_e61741c6-35be-4903-173e-f39fb658d2fa.png',
        link: 'https://www.atbmarket.com/',
        price: '32.29',
        weight: '800'
    }
];

const sortDirections = {
    asc: data => data.sort((a, b) => a.price - b.price),
    desc: data => data.sort((a, b) => b.price - a.price)
};

function loadData() {
    return delay(data);
}

function sort(data, direction) {
    return sortDirections[direction](data);
}

function getN(data, N) {
    return data.slice(0, N);
}

export { loadData, getN, sort };