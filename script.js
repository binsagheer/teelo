// ///////////////=======CALCULTOR================\\\\\\\\\\\\\\\\\\

document.getElementById('interestRate').addEventListener('input', function() {
	document.getElementById('interest-rate').textContent = this.value + '%';
	calculateMonthlyPayment();
});

document.getElementById('cartModel').addEventListener('change', calculateMonthlyPayment);
document.getElementById('downPayment').addEventListener('input', calculateMonthlyPayment);
document.getElementById('years').addEventListener('change', calculateMonthlyPayment);

function calculateMonthlyPayment() {
	const loanAmount = parseFloat(document.getElementById('cartModel').value);
	const downPayment = parseFloat(document.getElementById('downPayment').value);
	const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
	const years = parseFloat(document.getElementById('years').value);

	const principal = loanAmount - downPayment;
	const monthlyRate = interestRate / 12;
	const numberOfPayments = years * 12;

	let monthlyPayment = 0;

	if (interestRate === 0) {
		monthlyPayment = principal / numberOfPayments;
	} else {
		monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
	}

	document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
}

// Initial calculation
calculateMonthlyPayment();

// ///////////////=======CALCULTOR================\\\\\\\\\\\\\\\\\\

document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("imageContainer");
	const speed = 1; // Adjust this for faster or slower scrolling
  
	// Duplicate images for seamless scrolling
	const images = Array.from(container.children);
	images.forEach((img) => {
	  const clone = img.cloneNode(true);
	  container.appendChild(clone);
	});
  
	// Continuous scrolling logic
	let position = 0;
  
	function scroll() {
	  position -= speed;
	  
	  // Ensure the scroll is continuous by resetting the position without visible break
	  if (Math.abs(position) >= container.scrollWidth / 2) {
		position = 5; // Reset position when halfway through, but without causing a break
	  }
  
	  container.style.transform = `translateX(${position}px)`;
  
	  // Call requestAnimationFrame to maintain smooth scrolling
	  requestAnimationFrame(scroll);
	}
  
	scroll(); // Start the scrolling animation
  });
  