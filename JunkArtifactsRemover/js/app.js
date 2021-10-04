var code = document.getElementById("code");

function clearField() {
    code.value = "";
}

function remove() {
    var txt = code.value;
    var strTxt = txt.toString();
    if (strTxt === "") {
        code.value = alert("Enter Something, field is empty");
    }
    var newCode = strTxt.replace(/\n/g, "");
    newCode = newCode.replace(/  /g, "");
    code.value = newCode;
}