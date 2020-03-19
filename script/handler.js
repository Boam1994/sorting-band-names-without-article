const bands = ['The band', 'An old man', 'counterparts', 'Anywhere but here', 'The Midway state', 'The bled'];

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
    console.log(bandName);
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
console.log(sortedBands);

document.querySelector('#bands').innerHTML = 
sortedBands
.map(band => `<li>${band}</li>`)
.join('');