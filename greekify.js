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

  function __checkArray(item, array){
    for(var l = 0; l < array.length; ++l){
      if(_diorthoseToTelikoSigma(_xorisTonous(item.toLowerCase())) === array[l]){
        return true
      }
    }
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

  /*******
  *
  * Σημεία στίξης
  *
  *********/
  var komma = "\x2c";
  var anokatoteleia1 = "\x3a";
  var anokatoteleia2 = "\ufe55";
  var anokatoteleia3 = "\uff1a";
  var anokatoteleia4 = "\u02f8";
  var teleia = "\x2e";
  var thaumastiko = "\x21";
  var parenthesis1 = "\x28";
  var parenthesis2 = "\x29";
  var asteriskos = "\x2a";
  var quotetionMark = "\x22";
  var aggili1 = "\x5b";
  var aggili2 = "\x5d";
  var anoteleia = "\u0387";


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

  var prosopikesAntonimies = [
    'εγω', 'εσυ', 'εμεις', 'εσεις',
    'εμενα', 'εσενα','εμας','εσας',
    'αυτος', 'αυτη','αυτο','αυτοι',
    'εσεις', 'αυτου', 'αυτης', 'αυτον',
    'αυτην','τος', 'τη', 'το', 'του', 'της', 'τον', 'την'
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
      if(__isNull(word)){
        word = this;
      }
      return __checkArray(word, erotimatikesAntonimies);
  }

  /**
  * Ελέγχει αν μια λέξη είναι προσωπική αντωνημία
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _einaiProsopikiAntonimia = function(word){
      if(__isNull(word)){
        word = this;
      }
      return __checkArray(word, prosopikesAntonimies);
  }

  /**
  * Αφερεί τους χαρακτήρες που είναι μη έγκυροι στην ελληνική γλώσσα
  *
  * @method withPunctouation
  * @param {String} Μια πρόταση
  * @return {String} Επιστρέφει την πρόταση με τόνους
  */
  var _afaireseTousMhEgkyrousCharakthres = function(word){
      if(__isNull(word)){
        word = this;
      }
      return word.replace(/[^\u0371-\u0455,0-9,\u037E,\x3b,\u00A0, ,\x28-\x29,\x21-\x22,\x2c,\x3a,\ufe55,\uff1a,\uff1a,\u02f8,\x2e,\x2a,\x5,\x5d,\u0387]||/g,'');
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
    είναιΕρωτηματικήΑντωνυμία: _einaiErotimatikiAntonimia,

    einaiProsopikiAntonimia: _einaiProsopikiAntonimia,
    είναιΠροσωπικήΑντωνυμία: _einaiProsopikiAntonimia,

    afaireseTousMhEgkyrousCharakthres: _afaireseTousMhEgkyrousCharakthres,
    αφαίρεσεΤουςΜηΈγκυρουςΧαρακτήρες: _afaireseTousMhEgkyrousCharakthres
  }

  // Extend String prototype
  var methodoi = Object.keys(root._greekish);
  for(var l = 0; l < methodoi.length; ++l){
    String.prototype[methodoi[l]] = root._greekish[methodoi[l]];
  }

}).call(this);
