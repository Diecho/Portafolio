document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("copyEmailButton").addEventListener('click', (e)=>{
        e.preventDefault();
        navigator.clipboard.writeText("diego.hidalgo.pe@gmail.com");
      });
});