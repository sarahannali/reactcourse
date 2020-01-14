function Choice(items){
    const randNum = Math.floor(Math.random() * items.length) + 1;
    return items[randNum];
}

function Remove(items, item){
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0,i), ...items.slice(i+1)];
        }
    }
}

export { Choice, Remove };