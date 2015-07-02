;(function() {

  var root = window;

  root._greekish = {};

  /* Helper methods */
  function __swap(obj){
    var newObj = {};
    for(var key in obj){
      newObj[obj[key]] = key;
    }
    return newObj;
  }

  function __isNull(obj){
    if(typeof obj === "undefined" && (!!obj == false)) return true;
    return false;
  }

  var punctuationMapping = {
    '\u0386': '\u0391', // Ά - Α
    '\u0388': '\u0395', // Έ - E
    '\u0389': '\u0397', // Ή - H
    '\u038a': '\u0399', // Ί - I
    '\u038c': '\u039f', // Ό - O
    '\u038e': '\u03a5', // Ύ - Υ
    '\u038f': '\u03a9', // Ώ - Ω
    '\u03ac': '\u03b1', // ά - α
    '\u03ad': "\u03b5", // έ - ε
    "\u03ae": "\u03b7", // ή - η
    "\u03af": "\u03b9", // ί - ι
    "\u03cc": "\u03bf", // ό - ο
    "\u03ce": "\u03c9", // ώ - ω
    "\u03cd": "\u03c5", // ύ - υ
  }

  var sigmaTeliko = "\u03c2"; // ς
  var sigma = "\u03c3"; // σ

  var questionMark = "\x3f"; // ?
  var invertedQuestionMark = "\u00BF"; // ¿
  var rightToLeftQuestionMark = "\u061F"; // ؟
  var interoBangMark = "\u203D"; // ‽
  var questionExlamationMark = "\u2048"; // ⁈
  var exlamationQuestionMark = "\u2049"; // ⁉
  var greekQuestionMark = "\u037E"; // ;

  var foreignQuestionMarks = [
    questionMark,
    invertedQuestionMark,
    rightToLeftQuestionMark,
    interoBangMark,
    questionExlamationMark,
    exlamationQuestionMark
  ];

  var punctuationMappingReverse = __swap(punctuationMapping);

  var erotimatikesAntonimies = [
    'ποιος', 'ποια', 'ποιο', 'ποιοι',
    'ποιες', 'ποιαν','ποιου','ποιας',
    'ποιων', 'ποιον','ποιους','ποιες',
    'τινος', 'τι',  'ποσος', 'ποση',
    'ποσα'
  ];

  /**
  * Μετατρέπει μια πρόταση με τόνους σε μια πρόταση χωρίς τόνους
  *
  * @method withoutPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση χωρίς τόνους
  */
  var _xorisTonous = function(sentence){
    if(__isNull(sentence)){
      sentence = this;
    }

    return sentence.split('').map(function(char){
      return punctuationMapping[char] || char;
    }).join('');
  }

  /**
  * Μετατρέπει μια πρόταση χωρίς τόνους σε μια πρόταση με τόνους
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _meTonous = function(sentence){
    if(__isNull(sentence)){
      sentence = this;
    }

    return sentence.split('').map(function(char){
      return punctuationMappingReverse[char] || char;
    }).join('');
  }

  /**
  * Διορθώνει τις λέξεις που έχουν σ αντί για ς ως τελικό σίγμα
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _diorthoseToTelikoSigma = function(sentence){
    if(__isNull(sentence)){
      sentence = this;
    }

    return sentence.split(' ').map(function(word){
      if(word[word.length - 1] == sigma){
        return word.slice(0,-1) + sigmaTeliko;
      }
      return word;
    }).join(' ');
  }

  /**
  * Διορθώνει τις προτάσεις που έχουν ? αντί για ; ως ερωτηματικό
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _diorthoseToErotimatiko = function(sentence){
    if(__isNull(sentence)){
      sentence = this;
    }

    return sentence.split(' ').map(function(word){
      for(var l = 0; l < foreignQuestionMarks.length; ++l){
        if(word[word.length - 1] == foreignQuestionMarks[l]){
          return word.slice(0,-1) + greekQuestionMark;
        }
      }
      return word;
    }).join(' ');
  }

  /**
  * Διορθώνει τις προτάσεις που έχουν ? αντί για ; ως ερωτηματικό
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _diorthoseToErotimatiko = function(sentence){
    if(__isNull(sentence)){
      sentence = this;
    }

    return sentence.split(' ').map(function(word){
      for(var l = 0; l < foreignQuestionMarks.length; ++l){
        if(word[word.length - 1] == foreignQuestionMarks[l]){
          return word.slice(0,-1) + greekQuestionMark;
        }
      }
      return word;
    }).join(' ');
  }

  /**
  * Ελέγχει αν μια λέξη είναι ερωτηματική αντωνημία
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _einaiErotimatikiAntonimia = function(word){
      if(__isNull(sentence)){
        word = this;
      }

      for(var l = 0; l < erotimatikesAntonimies.length; ++l){
        if(_diorthoseToTelikoSigma(_xorisTonous(word.toLowerCase())) === erotimatikesAntonimies[l]){
          return true
        }
      }
      return false;
  }

  root._greekish = {
    xorisTonous: _xorisTonous,
    χωρίςΤόνους: _xorisTonous,

    meTonous: _meTonous,
    μεΤόνους: _meTonous,

    diorthoseToTelikoSigma: _diorthoseToTelikoSigma,
    διόρθωσεΤοΤελικόΣίγμα: _diorthoseToTelikoSigma,

    diorthoseToErotimatiko: _diorthoseToErotimatiko,
    διόρθωσεΤοΕρωτιματικό: _diorthoseToErotimatiko,

    einaiErotimatikiAntonimia: _einaiErotimatikiAntonimia,
    είναιΕρωτηματικήΑντωνυμία: _einaiErotimatikiAntonimia
  }

  // Extend String prototype
  var methodoi = Object.keys(root._greekish);
  for(var l = 0; l < methodoi.length; ++l){
    String.prototype[methodoi[l]] = root._greekish[methodoi[l]];
  }

}).call(this);
