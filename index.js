class Formatter {

  static capitalize(str) { return `${str.charAt(0).toUpperCase()}` + `${str.slice(1)}`}

  static sanitize(str) { return str.replace(/[^A-Za-z0-9-'\s]+/g, '') }

  static titleize(str) { 
    let title = []
    for (const word of str.split(' ')) { 
      if (word != 'the' && word != 'a' && word != 'an' && word !=  'but' && word !=  'of' && word !=  'and' && word !=  'for' && word !=  'at' && word !=  'by' && word !=  'from') {
        title.push(this.capitalize(word));
      } else {
        if (word === str.split(' ')[0]) {
          title.push(this.capitalize(word));
        } else {
          title.push(word);
        }
      }
    }
    return title.join(' ');
  }
}

