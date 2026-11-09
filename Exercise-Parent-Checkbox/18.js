
class CheckboxManager {
  constructor() {
    this.parents = document.querySelectorAll(".parent-cb");
    this.container = document.querySelector(".checkbox-container");
    this.addEvents();
  }

  addEvents() {
    this.parents.forEach(parent => {
      parent.addEventListener("change", () => {
        this.handleParent(parent);
      });
    });
  }

  handleParent(parent) {
    let targetId = parent.dataset.target;
    let childList = document.getElementById(targetId);

    if (parent.checked) {
      childList.style.display = "block";
      childList.scrollIntoView();
    } else {
      childList.style.display = "none";
      childList.querySelectorAll("input").forEach(cb => cb.checked = false);
    }
  }
}
const checkboxManager = new CheckboxManager();