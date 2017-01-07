/* CREATING FORM */
var elements = [
    {element:'form', name:'login', action:"google.com", id:"form"},
    {element:'input', type:'text', name:"age", placeholder:"22"},
    {element:'input', type:'text', name:"username", placeholder:"user_name"},
    {element:'input', type:'text', name:"date", placeholder:"28/12/2016"},
    {element:'input', type:'submit', value:"Validate Me"}
];
//select which element to create
for (var i = 0; i < elements.length; i++) { 
    var $newElement = document.createElement(elements[i].element);
    //select all attributes which element contain
    for (var key in elements[i]) { 
    	//create form
        if (elements[i].element == "form" && key == "element") {
            document.body.appendChild($newElement);
        }
        $newElement.setAttribute(key, elements[i][key]);
    }
    //create inputs
    if (elements[i].element != "form") {
        document.getElementById('form').appendChild($newElement);
    }
}

/* VALIDATING FORM */
document.getElementById('form').addEventListener('submit', function validate(e) {
    //Validating Age input
    if (!/^(0?[1-9]|[0-9][0-9])$/.test(this.age.value)) {
        alert('Age are not correct');
        e.preventDefault();
    }
    //Validating Name input
    if (!/^user_/.test(this.username.value)) {
        alert('Name are not correct! \nName should start from "user_"')
        e.preventDefault();
    }
    //Validating Date input
    if (!/^(([0-2]0?[1-9]|[3][0-1]|[1][0])[/]([0]0?[1-9]|[1][0-2])[/]([1][9][0-9][0-9]|[2][0][0-1][0-9]))$/.test(this.date.value)) {
        alert('Your date is invalid')
        e.preventDefault();
    }
});
