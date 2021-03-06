document.getElementById("input").addEventListener("keyup", myFunction);

var data = {
  "A": "Alpha",
  "B": "Bravo",
  "C": "Charlie",
  "D": "Delta",
  "E": "Echo",
  "F": "Foxtrot",
  "G": "Golf",
  "H": "Hotel",
  "I": "India",
  "J": "Juliet",
  "K": "Kilo",
  "L": "Lima",
  "M": "Mike",
  "N": "November",
  "O": "Oscar",
  "P": "Papa",
  "Q": "Quebec",
  "R": "Romeo",
  "S": "Sierra",
  "T": "Tango",
  "U": "Uniform",
  "V": "Victor",
  "W": "Whiskey",
  "X": "X-ray",
  "Y": "Yankee",
  "Z": "Zulu",
  "a": "Alpha",
  "b": "Bravo",
  "c": "Charlie",
  "d": "Delta",
  "e": "Echo",
  "f": "Foxtrot",
  "g": "Golf",
  "h": "Hotel",
  "i": "India",
  "j": "Juliet",
  "k": "Kilo",
  "l": "Lima",
  "m": "Mike",
  "n": "November",
  "o": "Oscar",
  "p": "Papa",
  "q": "Quebec",
  "r": "Romeo",
  "s": "Sierra",
  "t": "Tango",
  "u": "Uniform",
  "v": "Victor",
  "w": "Whiskey",
  "x": "X-ray",
  "y": "Yankee",
  "z": "Zulu",
  "0": "Zero",
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
  ".": "Period",
  ":": "Colon"
}

function letter(input){
    return data[input]
}

function myFunction() {
  var test = document.getElementById("input").value;
	var text = "";
	var reg = /[A-Za-z0-9]*/;
    var sym = /[\.\:]*/;
	
	for (i = 0; i < test.length; i++) {
		if(test[i].match(reg) != "" ){
			text += letter(test[i]) + "<br>";
		}else if(test[i].match(sym) != ""){
			text += "<br>" + letter(test[i]) + "<br>";    
    }else{
			text += "<br>";
		}
	}
    document.getElementById("output").innerHTML = text;
}