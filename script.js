//your code here

let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Remove articles from band names
const articles = ['a', 'an', 'the'];
bandNames = bandNames.map(name => name.split(' ').filter(word => !articles.includes(word.toLowerCase())).join(' '));

// Sort band names in lexicographic order
bandNames.sort();