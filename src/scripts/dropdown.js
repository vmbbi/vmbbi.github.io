if (typeof window !== "undefined") {
  window.toggleDropdown = function (event, dropdownId) {
    event.stopPropagation();

    const targetDropdown = document.getElementById(dropdownId);
    const isOpen = targetDropdown?.classList.contains("show");
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }

    if (!isOpen && targetDropdown) {
      targetDropdown.classList.add("show");
    }
  };
  window.addEventListener("click", function () {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  });
}
