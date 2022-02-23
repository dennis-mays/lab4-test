let paras = document.querySelectorAll("p");

// adds class to each paragraph and toggles
// class on or off based on clicking the paragraph.
paras.forEach((item) => {
    item.classList.add("myp");
    item.addEventListener("click", (e) => {
        e.target.classList.toggle("myp");
    });
});

console.log(document.body);
