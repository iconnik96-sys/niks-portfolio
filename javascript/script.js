  AOS.init();



  "use strict"


   const resume=()=>
  {
    let con =document.getElementById("hover");
    con.style.color="green"
  }
     const resume1=()=>
  {
    let con =document.getElementById("hover");
    con.style.color="grey"
  }



  document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  });


  function pro1()
  {
    window.location.href="https://getbootstrap.com/docs/5.2/components/tooltips/"
  }

   document.querySelectorAll('#offcanvasRight .offcanvas-body a').forEach(link => {
    link.addEventListener('click', () => {
      const offcanvasElement = document.getElementById('offcanvasRight');
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });




