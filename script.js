const billamount = document.querySelector("#bill-amount");
// const checkbutton = console.log(billamount.value);
const cashgiven = document.querySelector("#cash-given");
console.log(cashgiven.value)
const checkbutton = document.querySelector('#check-button');
const message = document.querySelector('#error-message')
const noOfnotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 50, 1];

checkbutton.addEventListener('click', () => {
    hideMessage();



    if (billamount.value > 0) {
        hideMessage();

        if (cashgiven.value >= billamount.value) {
            const amounttobereturned = cashgiven.value - billamount.value;
            calculatechange(amounttobereturned);
        }
        else {
            showMessage("The cash given should be atleast equal to Bill Amount");
        }
    } else {
        showMessage("Invalid bill amount🥴");
    }
});




function calculatechange(amounttobereturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberofnotes = Math.trunc(amounttobereturned / availableNotes[i]);
        amounttobereturned = amounttobereturned % availableNotes[i];
        noOfnotes[i].innerText = numberofnotes;
    }
}
function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
