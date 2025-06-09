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

  // Simulate payment process (replace with real gateway later)
  alert(`Thank you, ${name}! You’ve chosen to make a ${type} donation of ₦${amount}. A confirmation email will be sent to ${email}.`);

  // Optionally reset the form
  event.target.reset();
  return false;
}
