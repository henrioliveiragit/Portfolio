const chk = document.getElementById('chk')



chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  document.getElementsByClassName("offcanvas-body")[0].classList.toggle("dark");

})

function CopyEmail() {
  // Get the text field
 var copyText = "henriqu3oliveir@gmail.com"


   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
 alert("Email Copiado: " + copyText);
}

