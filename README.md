# GreekishJS

To GreekishJS είναι μια βιβλοθηκή της Javascript με διάφορες μεθόδους για την επεξεργασία λέξεων και προτάσεων της ελληνικής γλώσσας.

### Μέθοδοι
___
##### `afaireseTousMhEgkyrousCharakthres()` ή  `αφαίρεσεΤουςΜηΈγκυρουςΧαρακτήρες()`


**Παράδειγμα**
```js
  var frasi = "Θέλειasd αρετή&%/&$%& και/&%$%&// τόλμη η ΕΛΕΥΘΕΡΙΑ!$##";
  frasi.afaireseTousMhEgkyrousCharakthres(); // Θέλει αρετή και τόλμη η ΕΛΕΥΘΕΡΙΑ!

  frasi.αφαίρεσεΤουςΜηΈγκυρουςΧαρακτήρες(); // Θέλει αρετή και τόλμη η ΕΛΕΥΘΕΡΙΑ!
  _greekish.afaireseTousMhEgkyrousCharakthres(frasi); // Θέλει αρετή και τόλμη η ΕΛΕΥΘΕΡΙΑ!

```
___
##### `xorisTonous()` ή  `χωρίςΤόνους()`


**Παράδειγμα**
```js
  var frasi = "Το 80% της επιτυχίας είναι να κάνεις φιγούρα.";
  frasi.xorisTonous(); // Το 80% της επιτυχιας ειναι να κανεις φιγουρα.

  frasi.χωρίςΤόνους(); // Το 80% της επιτυχιας ειναι να κανεις φιγουρα.
  _greekish.xorisTonous(frasi); // Το 80% της επιτυχιας ειναι να κανεις φιγουρα.

```
___
##### `diorthoseToTelikoSigma()` ή  `διόρθωσεΤοΤελικόΣίγμα()`


**Παράδειγμα**
```js
  var frasi = "Ποιόσ είσαι κύριοσ";
  frasi.diorthoseToTelikoSigma(); // Ποιός είσαι κύριος

  frasi.διόρθωσεΤοΤελικόΣίγμα(); // Ποιός είσαι κύριος
  _greekish.diorthoseToTelikoSigma(frasi); // Ποιός είσαι κύριος

```
___
##### `diorthoseToErotimatiko()` ή  `διόρθωσεΤοΕρωτιματικό()`


**Παράδειγμα**
```js
  var frasi = "Ποιός είσαι κύριος?";
  frasi.diorthoseToErotimatiko(); // Ποιός είσαι κύριος;

  frasi.διόρθωσεΤοΕρωτιματικό(); // Ποιός είσαι κύριος;
  _greekish.diorthoseToErotimatiko(frasi); // Ποιός είσαι κύριος;

```
___
##### `einaiErotimatikiAntonimia()` ή  `είναιΕρωτηματικήΑντωνυμία()`


**Παράδειγμα**
```js
  "ποιόΣ".einaiErotimatikiAntonimia(); // true
  "Βιβλίο".einaiErotimatikiAntonimia() // false

  "ποιόΣ".είναιΕρωτηματικήΑντωνυμία(); // true
  _greekish.einaiErotimatikiAntonimia("ποιόΣ"); // true

```

##### `einaiProsopikiAntonimia()` ή  `είναιΠροσωπικήΑντωνυμία()`


**Παράδειγμα**
```js
  "αυτός".einaiProsopikiAntonimia(); // true
  "Βιβλίο".einaiProsopikiAntonimia() // false

  "αυτός".είναιΠροσωπικήΑντωνυμία(); // true
  _greekish.einaiProsopikiAntonimia("αυτός"); // true

```
