//const expectedOutput = document.getElementById("expected");
//const actualOutput = document.getElementById("actual");

let expectedOutput = document.getElementById("expected");
let actualOutput = document.getElementById("actual");
let compareBtn = document.getElementById("compare-btn");
let clearBtn = document.getElementById("clear-btn");
let result = document.getElementById("result");

//compareBtn.addEventListener(onclick= function () {
  //const expectedTextBox = expectedOutput.value;
  //const actualTextBox = actualOutput.value;

//compareBtn.addEventListener("click", function () {
  // expectedTextBox = expectedOutput.value;
  //const actualTextBox = actualOutput.value;


//});
compareBtn.addEventListener("click", function () {
 result.innerHTML = "";


  const expectedTextBox = expectedOutput.value;
  const actualTextBox = actualOutput.value;

 if (expectedTextBox === "") {
  const li = document.createElement("li");
  li.textContent = "The expected output is empty.";
  result.appendChild(li);
  return;
}

if (actualTextBox === "") {
  const li = document.createElement("li");
  li.textContent = "The actual output is empty.";
  result.appendChild(li);
  return;
}

//const expectedLines = expectedTextBox.split("\n");
//const actualLines = actualTextBox.split("\n");

//if (expectedLines.length !== actualLines.length) {

//}
 
  let expectedListLines = expectedTextBox.split("\n");
  let actualListLines = actualTextBox.split("\n");

  
  if (expectedListLines.length !== actualListLines.length) {
    const li = document.createElement("li");
li.textContent = "Number of lines differ: Expected = " 
  //+ (expectedLines.length) 
  //+ ", Actual = " 
  + String(expectedLines.length) 
  + ", Actual = " 
  + String(actualLines.length);
    result.appendChild(li);
    result.className = "change";
    return;
  }
if (expectedTextBox !== actualTextBox) {
  const li = document.createElement("li");
  li.textContent = "Texts are different";
  result.appendChild(li);
  result.className = "change";
} else {
  const li = document.createElement("li");
  li.textContent = "No differences found";
  result.appendChild(li);
  result.className = "nochange";
}


  if (listDiffer) {
    const li = document.createElement("li");
    li.textContent = "Texts are different";
    
    
  } else {
    const li = document.createElement("li");
    li.textContent = "No differences found";
    result.appendChild(li);
    
  }
});


clearBtn.addEventListener("click", function () {
  expectedOutput.value = "";
  actualOutput.value = "";
  result.innerHTML = "";
  result.className = "";
});

