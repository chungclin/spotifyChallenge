function sortByString(s, t) {
    return s.split('').sort((a, b) => {
        console.log('a', t.indexOf(a), '-----', 'b', t.indexOf(b))
        return t.indexOf(a) - t.indexOf(b);
    }).join('');
}