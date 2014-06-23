var word = prompt('Enter any word!');

alert(word + 
	"\n Number of characters: "+ 
	word.length + 
	"\n The third character is: " + word.charAt(2) + 
	"\n The word in lowercase: " + 
	word.toLowerCase() + 
	"\n The word in uppercase: " + 
	word.toUpperCase() + 
	"\n Example: Everyone knows " + word + " is the cooliest! \n Subword: " + 
	word.substring(1,3));