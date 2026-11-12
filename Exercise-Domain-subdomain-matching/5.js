class URLExtractor {
  constructor() {
    this.form = document.querySelector("#urlForm");
    this.url = document.querySelector("#url");

    this.form.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    });
  }

  extractDomain() {
    let regex = /^https?:\/\/([^\/]+)/;
    let result = regex.exec(this.url.value.trim());

    if (result === null) {
      alert("Please enter a valid URL");
      return;
    }
    let hostname = result[1];

    let parts = hostname.split(".");
    let subdomain = "";
    let domain = "";

    if (parts.length === 2) {
      domain = parts.join(".");
    }
    else if (parts.length === 3) {
      subdomain = parts[0];
      domain = parts.slice(1).join(".");
    }
    else {
      alert("Unsupported domain format");
      return;
    }

    if (subdomain) {
      alert("Domain: " + domain + ", Subdomain: " + subdomain);
    }
    else {
      alert("Domain: " + domain);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.extractDomain();
  }
}
let obj = new URLExtractor();