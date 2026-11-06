
let url = prompt("Enter URL:");
if (!url || url.trim() === "") {
    alert("URL can't be empty");
} else {
    window.open(
        url.trim(),
        "_blank",
        "width=400,height=450"
    );
}
