const hash = (key, arrayLen) => {
    let total = 0;
    for(let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }

    total = total % arrayLen;
    
    return total;
}

console.log(hash("bubbledddddffjjjkkkjjjjllll", 10))

