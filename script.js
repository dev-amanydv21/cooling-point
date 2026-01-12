document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const problem = document.getElementById("problem").value;

  const whatsappNumber = "919764269180";

  const message = `Hello Cooling Point,%0A
Name: ${name}%0A
Mobile: ${phone}%0A
Product: ${product}%0A
Problem: ${problem}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
});
