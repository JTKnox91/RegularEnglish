#Regular English

####Make the regular expression you need, using the words you already know.

##Usage

######RegEng()

Returns an instance of regluar english object.
Keep chaining construction methods and finish with .make().
You now have a JS Regular Expression object.

######.make()
Returns an actual JS regular RegExp object.

####Example

```javascript

var validEmail =
  RegEng()
    .aLetterOrNumber().ofOneOrMore().then()
    .theString("@").then()
    .aLetterOrNumber().ofOneOrMore().then()
    .theString(".").then()
    .aLetter().ofRange(2,6).then()
    .make();

validEmail.toString(); // /(\w+)(@)(\w+)(\.)([A-Za-z]{2,6})/
("My email is johnsmith@yahoo.com").match(validEmail)[0]; // "johnsmith@yahoo.com"
validEmail.test("noDomain@.net"); //false
validEmail.test("adam1234@gmail.com"); //true
validEmail.exec("adam1234@gmail.com")[1]; // "adam1234"

```

*Note: The usage of the .then() method to create capture groups is optional*

##Construction


####Selectors

######.theString(str, [flag,])
Parses through the input str and inserts inserts escapes where needed.


######.aLetter([flag,])
Select from any letter. RegExp equivalent of [a-zA-z]

######.aNumber()
Select from any number. RegExp equivalent of \d

######.aVowel([flag,])
Select from any vowel. RegExp equivalent of [aeiouAEIOU]

Flags:
"U" - Uppercase only
"L" - Lowercse only
"Y" - **Include** 'Y'

######.aConsonant([flag,])
Select from any consonant.
RegExp equivalent of [bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]

Flags:
"U" - Uppercase only
"L" - Lowercse only
"Y" - **Exclude** 'Y'

######.aLetterOrNumber()
Select from any alphanumeri character. RegExp equivalent of \w

######.whitespace()
Select from any whitespace character. RegExp equivalent of \s

######.anything()
Can select anything. RegExp equivalent of "."

####Quantities

######.ofRange(n,m)
RegExp equivalent of {n,m}.

######.ofOneOrMore()
RegExp equivalent of "+".

######.ofZeroOrMore()
RegExp equivalent of "*".

######.optional()
Previous selection is optional (zero of 1). RegExp equivalent of "?".

####Grouping

######.then()
Wraps everything before (or to the previous .then()) in a capture group.

######.either(arrayOfStrings)
Match any of the strings from the input array. RegExp equivalent of (str1|str2|st3) etc. Each string is parsed for special characters and properly espaced before as well.

######.anyIn(string)
Match any of the characters in the string. RegExp of [abc]. Special characters will be escaped as needed.

####Misc

######.fromStart()
Must match from start of string. RegExp equivalent of "^".
If used, this method should be the first thing chained to the RegEng() instance.

######.toEnd()
Must match to the end of string. RegExp equivalent of "$".
If used, this method should be the last thing chained before .make()

######.contains([selector,] [args,] [quantity,] [args,] )
Takes stringified selectors and quantities as its args. Will parse through arguments to figure out what is a sub argument. Ex:

```javascript
.contains("aUpperCaseLetter", "ofAtLeast", 2)
//creates:
/(?=.*[A-Z]{2,})/
```

######.theRegExp(doNotEspace)
If this library is not comprehensive, you can insert your own regular expression. The input string will **not** be escaped.

####Premade Constructs

#####Usage:

RegEng().premade().*premadeName()*.make()

######.password([options]);

Produces a password validator. Options object defaults to the following:
    
```javascript
{
	upper: 1 //At least one uppercase character
	lower: 1 //At least one lowercase character
	number: 1 //At least one number
	special: 1 //At least one special character
	min: 8 //minimum length of 8 characters
	max: 32 //maximum length of 32 characters
}
```

