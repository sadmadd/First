var table = document.getElementById("myTable");
		var ID=document.getElementById("id4").value;
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:

function myCreateFunction() {
	
	var c;
	var name;
	var age;
	var address;
	var ident;
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("id1").value;
    cell2.innerHTML = document.getElementById("id2").value;
	cell3.innerHTML = document.getElementById("id3").value;
	cell4.innerHTML=document.getElementById("id4").value;
	name=document.getElementById("id1").value;
	age=document.getElementById("id2").value;
	address=document.getElementById("id3").value;
	ident=document.getElementById("id4").value;
	
	
	
}

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(1);
}
function myDisplayFunction(){
alert(document.getElementById("id1").value)
}