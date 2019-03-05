

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint; 
};

const iAmThursty = (num) => {
//do some stuff
// under 21 "drink some water"
// over 21 under 65 'have a beer'
// over 65 'take a nap' 
if(num<21){
    return('drink some water');
}
else if (num>=21 && num<=65) {
    return('have a beer');
}
else {
    return('take a nap');
};
}


//printToDom('thirsty', iAmThursty(22));
printToDom('thirsty',iAmThursty(55));
//printToDom('thirsty',iAmThursty(11)); 
printToDom('thirsty',iAmThursty(67));

