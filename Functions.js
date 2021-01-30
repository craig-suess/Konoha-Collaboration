function user(name) {

    //document.getElementById("name").innerHTML = document.getElementById("name").innerHTML.replace("_____", name);
    document.body.innerHTML = document.body.innerHTML.replaceAll("_____", name);
}

user("Naquan Smith")