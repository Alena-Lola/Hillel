function saveData() {
    const table = document.getElementById("myTable");

    const row = table.insertRow(-1);
    const firstName = row.insertCell(0);
    const lastName = row.insertCell(1);
    const dateOfBirth = row.insertCell(2);
    const mSex = row.insertCell(3);
    const fSex = row.insertCell(4);
    const city = row.insertCell(5);
    const address = row.insertCell(6);
    const languageEn = row.insertCell(7);
    const languageNo = row.insertCell(8);

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

