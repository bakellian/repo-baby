function myFunction1() {
    alert("I Love her a lot too!!");
  }

  function myFunction2() {
    alert("same!");
  }

  function myFunction3() {
    alert("A long trip, but worth it");
  }

  function myFunction4() {
    alert("me too");
  }


  function addClickListener(id, callback) {
    document.getElementById(id).addEventListener("click", callback)
  }

  addClickListener("click1", myFunction1)
  addClickListener("click2", myFunction2)
  addClickListener("click3", myFunction3)
  addClickListener("click4", myFunction4)



