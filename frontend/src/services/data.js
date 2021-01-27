import getEnvVariable from './getEnvVariable';

async function loadData() {
    const response = await fetch(`${getEnvVariable('REACT_APP_BACKEND_URL_BASE')}/data`, {
        referrerPolicy: 'no-referrer-when-downgrade'
    });
    return await response.json();
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