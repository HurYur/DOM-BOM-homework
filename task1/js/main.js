/* Creating FORM */
var form = document.createElement('form');
document.body.appendChild(form);
form.name = "login";
form.action = "google.com";
form.id = "form";

var formElements = [
    {type:'text', name:"age", placeholder:"22"},
    {type:'text', name:"username", placeholder:"user_name"},
    {type:'text', name:"date", placeholder:"28/12/2016"},
    {type:'submit', value:"Validate Me"}
];

for (var i = 0; i < formElements.length; i++) { //select which element to create
    var $input = document.createElement('input');
    for (var key in formElements[i]) { //select all attributes which element contain
        $input.setAttribute(key, formElements[i][key]);
    }
    document.getElementsByTagName('form')[0].appendChild($input);
}


    // input.type = formElements[i].type;
    // input.name = formElements[i].name;
    // input.placeholder = formElements[i].placeholder;
    // input.value = formElements[i].value;



// /* Add input names */
// var inputName = ['age', 'username', 'date'];
// for (var j = 0; j < 3; j++) {
//     document.getElementsByTagName('input')[j].name = inputName[j];
// }
// /* Adding submit */
// document.getElementsByTagName('input')[3].type = "submit";
// var submitBtn = document.getElementsByTagName('input')[3];
//     submitBtn.value = "Validate Me";











/* VALIDATING FORM */
document.getElementsByTagName('form')[0].addEventListener('submit', function validate(e) {
    e.preventDefault();
    //debugger;
    var ageInput = document.getElementsByName('age')[0].value,
        nameInput = document.getElementsByName('username')[0].value,
        dateInput = document.getElementsByName('date')[0].value;
        console.log(ageInput);
        console.log(parseInt(ageInput));

    if (ageInput <= 0 || ageInput != parseInt(ageInput)){ //@todo add space validation
        alert('ageInput are not correct');
    }
    // if (nameInput <= 0 && parseInt(ageInput) != ageInput){
    //     alert('nameInput are not correct')
    // }
    // if (dateInput <= 0 && parseInt(ageInput) != ageInput){
    //     alert('dateInput are not correct')
    // }
});
