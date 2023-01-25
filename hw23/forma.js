function saveData() {
    const table = document.getElementById("myTable");

    let row = table.insertRow(-1);
    let firstName = row.insertCell(0);
    let lastName = row.insertCell(1);
    let dateOfBirth = row.insertCell(2);
    let mSex = row.insertCell(3);
    let fSex = row.insertCell(4);
    let city = row.insertCell(5);
    let address = row.insertCell(6);
    let languageEn = row.insertCell(7);
    let languageNo = row.insertCell(8);

     firstName.innerHTML = document.getElementById("userFirstName").value;
     lastName.innerHTML = document.getElementById("userLastName").value;
     dateOfBirth.innerHTML = document.getElementById("data").value;
     mSex.innerHTML = document.getElementById("msex").value;
     fSex.innerHTML = document.getElementById("fsex").value;
     city.innerHTML = document.getElementById("city").value;
     address.innerHTML = document.getElementById("address").value;
     languageEn.innerHTML = document.getElementById("languageEn").value;
     languageNo.innerHTML = document.getElementById("languageNo").value;
}