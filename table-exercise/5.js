class UserTable {
  constructor() {
    this.table = document.getElementById("userTable");
    document.getElementById("addBtn").addEventListener("click", () => this.addRow());
    this.table.addEventListener("click", (e) => this.handleTableActions(e));
  }

  addRow() {
    const row = document.createElement("tr");
    row.innerHTML = ` <td><input type="text" placeholder="Name"></td>
        <td><input type="text" placeholder="Email"></td>
        <td><button class="save">Save</button></td> `;
    this.table.append(row);
  }

  handleTableActions(e) {
      const target = e.target;
      if (!target.matches(".save, .edit, .delete")) return;

      e.preventDefault();
      const row = target.closest("tr");

      if (target.classList.contains("save")) this.saveRow(row);
      if (target.classList.contains("edit")) this.editRow(row);
      if (target.classList.contains("delete")) row.remove();
  }

  saveRow(row) {
      const [nameInput, emailInput] = row.querySelectorAll("input");
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (!name) return alert("Name is required");
      if (!email) return alert("Email is required");

      row.innerHTML = ` <td>${name}</td> <td>${email}</td>
          <td> <a href="#" class="edit">Edit</a> <a href="#" class="delete">Delete</a> </td> `;
  }

  editRow(row) {
    const name = row.children[0].textContent;
    const email = row.children[1].textContent;

      row.innerHTML = `
          <td><input type="text" value="${name}" placeholder="Name"></td>
          <td><input type="text" value="${email}" placeholder="Email"></td>
          <td><button class="save">Save</button></td> `;
  }
}
new UserTable();