function mihralHandler() {

    let fname = document.getElementById("email").value;
    let lname = document.getElementById("name").value;
    let message = document.getElementById("text").value;
    var myArr = [fname, lname, message];
    console.log(myArr);
    document.getElementById("email").value = ""
    document.getElementById("name").value = ""
    document.getElementById("text").value = ""
}

let button = document.getElementById("button").addEventListener('click', mihralHandler);