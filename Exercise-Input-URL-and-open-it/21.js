class UrlHandler {
  constructor() {
    this.url = prompt("Enter URL:");
    this.openURL();
  }

  openURL() {
    if (!this.url || this.url.trim() === "") {
        alert("URL can't be empty");
        return;
    }

    window.open(
        this.url.trim(),
        "_blank",
        "width=400,height=450"
    );
  }
}
let obj = new UrlHandler();