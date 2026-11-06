class CountrySelector {
  constructor(box1, box2, addBtn, removeBtn) {
    this.box1 = box1;
    this.box2 = box2;

    addBtn.addEventListener("click", () => {
        this.moveCountries(this.box1, this.box2);
    });

    removeBtn.addEventListener("click", () => {
        this.moveCountries(this.box2, this.box1);
    });
  }

  moveCountries(fromBox, toBox) {
    let selected = fromBox.querySelectorAll("option:checked");
    selected.forEach(function(option) {
        toBox.append(option);
    });
  }
}

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let addBtn = document.querySelector("#addBtn");
let removeBtn = document.querySelector("#removeBtn");
const obj = new CountrySelector(box1, box2, addBtn, removeBtn);