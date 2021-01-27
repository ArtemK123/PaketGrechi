async function loadFromStore(url, ref, chain, store) {
    const response = await fetch(url, {
        "headers": {
          "accept": "*/*",
          "accept-language": "uk",
          "content-type": "application/json",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-chain": chain,
          "x-delivery-type": "undefined",
          "x-version": "29"
        },
        "referrer": ref,
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
    const json = await response.json();
    const data = json.results.map(value => {
        const id = value.sku;
        const name = value.title;
        const src = value.img.s200x200;
        const link = value.web_url;
        const price = (value.price / 100).toString();
        const weight = value.weight;
        return {id, name, store, src, link, price, weight};
    });
    return data;
}

async function loadData() {
    const auchan = await loadFromStore(
        'https://stores-api.zakaz.ua/stores/48246401/products/search/?q=крупа гречана', 
        'https://auchan.zakaz.ua/ru/search/?q=крупа гречана',
        'auchan',
        'Ашан'
    );
    const varus = await loadFromStore(
        'https://stores-api.zakaz.ua/stores/48241001/products/search/?q=гречана крупа', 
        'https://varus.zakaz.ua/ru/search/?q=гречана крупа',
        'varus',
        'Varus'
    );
    const ecomarket = await loadFromStore(
        'https://stores-api.zakaz.ua/stores/48280214/products/search/?q=гречана', 
        'https://eko.zakaz.ua/ru/search/?q=гречана',
        'ekomarket',
        'EcoMarket'
    );
    return [...auchan, ...varus, ...ecomarket];
}

const sortDirections = {
    asc: data => data.sort((a, b) => a.price - b.price),
    desc: data => data.sort((a, b) => b.price - a.price)
};

function sort(data, direction) {
    return sortDirections[direction](data);
}

function getN(data, N) {
    return data.slice(0, N);
}

function findByName(data, name) {
    return data.filter(value => value.name.toLowerCase().includes(name.toLowerCase() ));
}

export { loadData, getN, sort, findByName };