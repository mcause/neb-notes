/* 

regex101.com
regex.com 

/g means dont stop on just one instance of the pattern 
/i ignores the case difference 
/m multi ling modifier 

when looking for a match:
(str.match(/er/)

There are 12 special characters:

^: matches the position before the first character in a string, unless inside a square bracket, where it now means not (similar to bang in JS)
$: matches the position before the first newline in the string
.: represents the wildcard character. Any character will be matched by a period
|: represents 'or'
?: zero or one instances of the preceding item (making it non-greedy)
*: attempt to match the preceding token zero or more times
+: matches one or more occurrences of the one-character regular expression
( & ): matches all instances of the entire contents of the parenthesis
[ & ]: matches all instances of the entire contents
{ & }: min/max quantifier
\: escape the functionality of a preceding character
/: Open and closing a regex epxpression
So if we want to find the character * we need to escape it with a backslash \
*/

// 1.   Write a function that tests if a string contains the string of '123' within it
function testFunction1 (input){
    return input.match(/123/);
}
// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false

function differerntLetters(input){
    return !!input.match(/a.*?c/)
}

// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'

function substringCounter(input, substring){
    return input.match(new RegExp(substring, 'g'))?.length || 0;

    let match = input.match(new RegExp(substring, 'g'));
    return match ? match.length : 0
}

// 4.   Write a function that checks if all characters in a string are lowercase letters

function isLowerCase(input){
    return !input.match(/[A-Z]/g);
    
    // let output = input.match(/[a-z ]/g).join('');
    // return input === output;
}

// 5.   Write a function that checks if a string has an uppercase letter
 
function isUpperCase(input){
    return !!input.match(/[A-Z]/);
}



// 6.   Write a function that checks if a string contains a dash or underscore 

function speacialChar(input){
    return !!input.match(/-|_/)
}


// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
 
function containDotCom(input){
    return !!input.match(/\.com$/)
}



// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning

function containsHttp(input){
    return !!input.match(/\http:/)
}

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not


// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
