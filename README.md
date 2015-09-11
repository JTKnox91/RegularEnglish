Normal Email Expression:
	/\w+@\w+\.com/

SimpleRegex Email Expression:
	SimpleRegex().aLetterOrNum().ofOneOrMore().then().aString("@").then().aLetterOrNum().ofOneOrMore().then().aString(".com")