const bands = [ "An Orange",
              "A banana",
                "Pear",
                "The strewberry",
               " An apple",
               "The blueberry"];

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
