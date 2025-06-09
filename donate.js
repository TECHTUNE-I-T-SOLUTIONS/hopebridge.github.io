function handleDonation(event) {
  event.preventDefault();

  const amount = document.getElementById('donationAmount').value;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const type = document.getElementById('donationType').value;

  if (!amount || !name || !email) {
    alert('Please fill in all required fields.');
    return false;
  }

  // I simulated the payment process. we don't need it to be elaborate, do we?
  alert(`Thank you, ${name}! You’ve chosen to make a ${type} donation of ₦${amount}. A confirmation email will be sent to ${email}.`);

  // I reset the form here
  event.target.reset();
  return false;
}
