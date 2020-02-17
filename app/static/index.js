function incrementButton(e) {
    var input = e.parentNode.children[3];
    input.value = parseInt(input.value)+1;
    if(e.parentNode.children[5].disabled){
	e.parentNode.children[5].disabled = false;
    }
}

function decrementButton(e) {
    var input = e.parentNode.children[3];
    input.value = parseInt(input.value)-1;
    if(parseInt(input.value) <= parseInt(input.min)){
	alert("hit");
	input.value = parseInt(input.min);
	e.parentNode.children[5].disabled = true;
    }
}
