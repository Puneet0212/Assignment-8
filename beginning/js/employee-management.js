/*eslint-env browser*/

//Initial Employee Array
var employeeList = [    [ "Sally Smith", "Quality Assurance", 3423 ],
                    [ "Mark Martin", "VP Sales", 3346],
                    [ "John Johnson", "Marketing", 3232],
                    [ "Jack Williamson", "Executive Manager", 3452],
                    [ "Harry Hardy", "AVP", 3256]   ];
   

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
}

window.addEventListener("load", function () {
    $("registrationForm").reset();
    for (var i=0; i<employeeList.length; i += 1) {
        addEmployee(employeeList[i][0],employeeList[i][1],employeeList[i][2]);
    }
    $("employeeCount").innerHTML = "Showing " + employeeList.length + " Employees";
    $("addButton").addEventListener("click",function(e) {
        e.preventDefault();
        verifyDetails();
    });
});

//Funtion to add a New Employee
function addEmployee(name, title, extension) {
    "use strict";
    var employeeTable = $("employeeTable");
    var row = employeeTable.insertRow(-1);

    var cell = row.insertCell(-1);
    cell.innerHTML = name;

    cell = row.insertCell(-1);
    cell.innerHTML = title;

    cell = row.insertCell(-1);
    cell.innerHTML = extension;

    cell = row.insertCell(-1);
    var deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class","delete");
    deleteButton.setAttribute("onclick", "deleteEmployee(this);");
    cell.appendChild(deleteButton);
}

//Funtion to verify the details of the New Employee
function verifyDetails() {
    "use strict";
    var employeeTableCells = window.document.getElementsByTagName("td");
    var name, title, extension, required;
    var flag=false;

    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    required = "<span>Required Field</span>";

    if(name === "") {
        employeeTableCells[2].innerHTML = required;
        flag=true;
    }
    if(title === "") {
        employeeTableCells[5].innerHTML = required;
        flag=true;
    }
    if(extension === "") {
        employeeTableCells[8].innerHTML = required;
        flag=true;
    }
    if(!flag){
        employeeTableCells[2].innerHTML = "";
        employeeTableCells[5].innerHTML = "";
        employeeTableCells[8].innerHTML = "";
        employeeList.push([name,title,extension]);
        addEmployee(name, title, extension);
        $("employeeCount").innerHTML = "Showing " + employeeList.length + " Employees";
        $("registrationForm").reset();
    }
};


//Function to delete an employee
function deleteEmployee(delButton) {
    var row = delButton.parentNode.parentNode;
    var employeeTable = $("employeeTable");
    employeeTable.deleteRow(row.rowIndex);
    employeeList.splice(row.rowIndex,1);
    $("employeeCount").innerHTML = "Showing " + employeeList.length + " Employees";
}

