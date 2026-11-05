class AutoComplete {
  constructor() {
    this.searchInput = document.getElementById("search");
    this.suggest = document.getElementById("suggest");
    this.users = [];

    this.loadUsers();

    this.searchInput.addEventListener("input", () => {
      this.handleInput();
    });
  }

  loadUsers() {
    fetch("https://www.dropbox.com/s/fti4xvqtz5pkho1/users.json?dl=1")
      .then(response => response.json())
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  handleInput() {
    let text = this.searchInput.value.trim().toLowerCase();
    this.suggest.innerHTML = "";
    if (text === "") {
      return;
    }

    let filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(text)
    );

    filteredUsers.forEach(user => {
      let li = document.createElement("li");
      li.textContent = user.name;

      li.addEventListener("click", () => {
        this.searchInput.value = user.name;
        this.suggest.innerHTML = "";
      });
      this.suggest.appendChild(li);

    });
  }
}

let app = new AutoComplete();