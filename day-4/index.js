class UrlShortener {
  constructor() {
    this._shortURLStore = new Map();
    this._longURLStore = new Map();
    this._prefix = "short.ly/";
  }

  generateShortCode(length) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    let code = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.round(Math.random() * (alphabets.length - 1));
      let randomAlphabet = alphabets[randomIndex];
      code += randomAlphabet;
    }
    
    // check if a this code has already been generated
    if (this._shortURLStore.has(this._prefix + code)) {
      this.generateShortCode();
    }
    return code;
  }

  shorten(longURL) {
    if (this._longURLStore.has(longURL)) {
      return this._longURLStore.get(longURL);
    }
    let shortURL = this._prefix + this.generateShortCode(4);
    this._shortURLStore.set(shortURL, longURL);
    this._longURLStore.set(longURL, shortURL);
    return shortURL;
  }

  redirect(shortURL) {
    if (this._shortURLStore.has(shortURL)) {
      return this._shortURLStore.get(shortURL);
    }
    return null;
  }
}
