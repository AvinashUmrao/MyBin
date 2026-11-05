class ShowDays {
  constructor() {
    this.days = document.querySelectorAll('.day-cb');
    this.none = document.getElementById('none-cb');
    
    this.days.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
      this.apply(event);
      });
    });

    this.none.addEventListener('change', () => {
      this.days.forEach(box => box.checked = false);
    });
  }

  apply(event) 
  {
    if (event.target.checked === true) {
      this.none.checked = false;
    }

    let arr = Array.from(this.days).filter(ele => ele.checked === true);
    
    if (arr.length > 3) {
      event.target.checked = false;
      
      let ticked = Array.from(this.days).filter((box) => {
        return box.checked === true;
      });
         
      let list = ticked.map(box => box.value);
      
      let final = `${list[0]}, ${list[1]}, ${list[2]}`;
      alert(`only 3 can be selected and you selected -> ${final}`);
    }
  }
};

let obj = new ShowDays();