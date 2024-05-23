let form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get all input values

  let firstName = (document.getElementById("firstName").value = "Dominic");
  let lastName = document.getElementById("lastName").value;
  let otherNames = document.getElementById("otherNames").value;
  let emailAddress = document.getElementById("emailAddress").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let gender = document.getElementById("gender").value;
  let errors = [];

  if (!firstName || !lastName) {
    errors.push("first name and last name are required!");
  }

  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
    errors.push("first name and last name cannot contain a number!");
  }

  if (emailAddress.indexOf("@") === -1 || emailAddress.indexOf(".") === -1) {
    errors.push("Email address is not valid!");
  }

  if (phoneNumber.length !== 11) {
    errors.push("Phone Number is not valid!");
  }

  if (!gender) {
    errors.push("Gender is required!");
  }

  if (errors.length > 0) {
    document.getElementById("errors").innerHTML = errors.join("<br></br>");
  } else {
    document.getElementById("errors").innerHTML = "";

    const formData = {
      firstName: firstName,
      lastName: lastName,
      otherNames: otherNames,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      gender: gender
    };

    console.log(formData);
  }
});
