document.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("h2[id], h3[id]");
  var links = document.querySelectorAll(".toc-list a");
  var current = "";

  for (var i = 0; i < sections.length; i++) {
    if (window.pageYOffset >= sections[i].offsetTop - 80) {
      current = sections[i].id;
    }
  }

  for (var j = 0; j < links.length; j++) {
    links[j].classList.remove("active");
    if (links[j].getAttribute("href") === "#" + current) {
      links[j].classList.add("active");
    }
  }
});
