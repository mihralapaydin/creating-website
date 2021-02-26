// Create a new list item when clicking on the "Add" button
function newElement() {
    var comments = document.getElementById("myUL")
    var p = document.createElement("p");
    var inputValue = document.getElementById("myInput").value;
    p.appendChild(document.createTextNode(inputValue););
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        comments.insertBefore(p, comments.firstChild);
    }
    document.getElementById("myInput").value = "";
}