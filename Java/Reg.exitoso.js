/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.getElementById("formularioRegistro").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("modalExito").style.display = "flex";
});

function cerrarModal() {
  document.getElementById("modalExito").style.display = "none";
  document.getElementById("formularioRegistro").reset();
}
