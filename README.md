#Regular English

####Make the regular expression you need, using the english you already know.

##Usage

####RegEng([flag])

Returns an instance of regluar english object.
Keep chaining construction methods and finish with .make().
You now have a JS Regular Expression object
(Note: flags will come into effect during the .make() invocation).

######.make()
Returns an actual JS regular RegExp object.

##Construction

######.theString(str)

Parses through the input str and inserts inserts escapes where needed.

####Generic Selectors
(Note: The default behavior for any generic selector involving a letter is to be case-insensitive. Adding the "U"/"L" flags (for "upper" or "lower") will change that behavior, but an "i" flag in the original RegEng instance will override that.)

######.aLetter([flag])
Select from any letter. RegExp equivalent of [a-zA-z]

######.aNumber()
Select from any number. RegExp equivalent of \d

######.aVowel([flag])
Select from any vowel. RegExp equivalent of [aeiouAEIOU]

Flags:
"U" - Uppercase only
"L" - Lowercse only
"Y" - **Include** 'Y'

######.aConsonant([flag])
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

######.not()
Chain before any of the above to select anything but that

######.anything()
Can select anything. RegExp equivalent of ".".

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

####Premade Constructs

#####Usage:

RegEng().premade().**premadeName()**.make()

######.email()

######.streetAdress()

######.validURL()

