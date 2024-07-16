const burgerbtn = document.querySelector("#burger-btn");
const links = document.querySelector("#links");

burgerbtn.addEventListener("click", () => {
  if (links.classList.contains("max-md:h-0")) {
    links.classList.remove("max-md:h-0");
    links.classList.add("max-md:h-72");
    links.classList.add("max-md:border-t-2.5");

    // alert("contains");
  } else {
    links.classList.remove("max-md:h-72");
    links.classList.add("max-md:h-0");
    links.classList.remove("max-md:border-t-2.5");
  }
});
