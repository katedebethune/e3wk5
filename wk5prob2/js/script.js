/* This code calculates the average of the values in each of three rows, using nearly identical code that's repeated in three places. You can improve it by creating a single function, and calling that function once for each row in the table. 

There's more than one way to do this. Your function may  accept an Array of HTMLInputElements and return the average of their values. 

Or it may accept a classname (for the text inputs) and an ID (where to write the output) and write to the page directly (returning nothing). 

There are other ways, too. The important thing about your solution is that it reduce the duplication of code we see here, and consolidate some of that functionality into a function.    
*/

"use strict";
//arrays in anonymous function reduce repetitive code remaining after factoring
document.getElementById("doIt").onclick = function(){
    var cn = [ "row1", "row2", "row3" ], id = [ "row1Average", "row2Average", "row3Average" ], 
    v_name = [ "rowOneInputs", "rowTwoInputs", "rowThreeInputs"], i = 0, len = cn.length;
    
    for ( ; i < len ; i++ ) {
    	v_name[i] = document.getElementsByClassName( cn[i] );
    	document.getElementById( id[i] ).innerHTML = getRowAvg( v_name[i] );
    }
}

//helper function, factors away repetitive code
function getRowAvg(rowArray) {
	var arr = rowArray, len = arr.length;
	var i, sum, count, value, avg;
	i = sum = count = value = avg = 0;
	for ( ; i < len; i++ ) {
		value = parseInt(arr[i].value);
		if (value) {
			sum += value;
			count++;
		}
	}
	avg = sum/count;
	return avg.toFixed(0);
}
	

