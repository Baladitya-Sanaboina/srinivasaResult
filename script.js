function getTheResult(userLocal) {
    let parsedString = JSON.parse(userLocal)
    let subjects = parsedString;
    let resultTableEl = document.getElementById("resultTable");
    let tableBodyEl = document.getElementById("tabelBody");
    tableBodyEl.textContent = "";
    for (let eachItem of subjects) {
        let tabelRow = document.createElement('tr');
        tableBodyEl.appendChild(tabelRow);
        let tabelHEl = document.createElement('th');
        tabelHEl.setAttribute("scope", "row");
        tabelHEl.textContent = eachItem.serial;
        tabelRow.appendChild(tabelHEl);

        let subjectTd = document.createElement("td");
        subjectTd.textContent = eachItem.subject;
        tabelRow.appendChild(subjectTd);

        let marksTd = document.createElement("td");
        marksTd.textContent = eachItem.marks;
        tabelRow.appendChild(marksTd);
    }
}
let subject = [{
        serial: 1,
        subject: "CN",
        marks: 120
    },
    {
        serial: 2,
        subject: "POC",
        marks: 120
    },
    {
        serial: 3,
        subject: "DAA",
        marks: 121
    },
    {
        serial: 4,
        subject: "DWDM",
        marks: 122
    },
    {
        serial: 5,
        subject: "SPM",
        marks: 128
    }
]

//using JSON subject will be converted JSON stringify object 
let stringified = JSON.stringify(subject)
localStorage.setItem("216N1A05B4", stringified) // this is used to store the marks of particular Roll Number
let userEnteredTextEl = document.getElementById('userEnteredText');
let resultButtonEl = document.getElementById("resultButton");
resultButtonEl.onclick = function() {
    let userInputValue = userEnteredTextEl.value;
    if (userInputValue === "") {
        alert("Enter the Valid Roll Number")
    } else {
        let userLocal = localStorage.getItem(userInputValue)
        getTheResult(userLocal);
    }
}