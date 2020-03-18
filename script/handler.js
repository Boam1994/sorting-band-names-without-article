const bands = ['The band', 'An old man', 'counterparts', 'Anywhere but here', 'The Midway state', 'The bled'];

function strip(bandName){
    return bandName.replace(a,the ,an).trim();
    
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1) 