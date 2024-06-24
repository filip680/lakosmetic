function toggleMenu() {
    var x = document.getElementById("toggle1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    x = document.getElementById("toggle2");
    console.log(x);
    console.log(x.style);
    console.log(x.style.display);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }