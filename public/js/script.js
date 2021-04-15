// Get the modal
var modal = document.getElementById("donorModal");

// Get the button that opens the modal
var btn = document.getElementById("prevBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal and display modal content
btn.onclick = function () {
    modal.style.display = "block";
    textlname.innerText = document.donor_info.lName.value || '-';
    textlnametext.innerText = document.donor_info.lName.name;

    textfname.innerText = document.donor_info.fName.value || '-';
    textfnametext.innerText = document.donor_info.fName.name;

    textaddress.innerText = document.donor_info.address.value || '-';
    textaddresstext.innerText = document.donor_info.address.name;

    textcity.innerText = document.donor_info.city.value || '-';
    textcitytext.innerText = document.donor_info.city.name;

    textregion.innerText = document.donor_info.region.value || '-';
    textregiontext.innerText = document.donor_info.region.name;

    textcode.innerText = document.donor_info.code.value || '-';
    textcodetext.innerText = document.donor_info.code.name;

    textphonenumber.innerText = document.donor_info.phone.value || '-';
    textphonenumbertext.innerText = document.donor_info.phone.name;

    textemail.innerText = document.donor_info.email.value || '-';
    textemailtext.innerText = document.donor_info.email.name;

    textcountry.innerText = document.donor_info.country.value || '-';
    textcountrytext.innerText = document.donor_info.country.name;

    textcontact.innerText = document.donor_info.contact.value || '-';
    textcontacttext.innerText = document.donor_info.contact.name;

    textpayments.innerText = document.donor_info.payment.value || '-';
    textpaymentstext.innerText = document.donor_info.payment.name;

    textfrequency.innerText = document.donor_info.frequency.value || '-';
    textfrequencytext.innerText = document.donor_info.frequency.name;

    textamount.innerText = document.donor_info.amount.value || '-';
    textamounttext.innerText = document.donor_info.amount.name;

    textcomments.innerText = document.donor_info.comments.value || '-';
    textcommentstext.innerText = document.donor_info.comments.name;
};

// Close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not reach website.");
        }
        return response.json();
    })
    .then(data => {
        // Get each country and add to select option
        data.forEach(function (item) {
            let countries = document.getElementById("country");
            let country = document.createElement('option');
            country.setAttribute('value', item.name);
            country.innerText = item.name;
            countries.appendChild(country);
        })

    })
    .catch(err => console.error(err));
