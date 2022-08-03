const submitButton = document.querySelector('button');
const mainTitle = document.getElementById("main_title");
const result = document.getElementById("story_result");
const form = document.getElementsByClassName("form_container")

const noun = document.getElementById('noun');
const adjective = document.getElementById('adjective');
const verb = document.getElementById('verb')
const title = document.getElementById("title_input");



function updateText() {
    mainTitle.innerText= title.value
}

function check(ev) {
    if (title.value == "" || noun.value == "" || verb.value == "" || adjective.value == ""){
        alert("Please fill in all fields");
    }
    else {
        // form.style.display = none;
        result.innerText = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adjective.value + " day!";
        
    }
    ev.preventDefault();
}
addEventListener('change', updateText);
submitButton.addEventListener('click', check);