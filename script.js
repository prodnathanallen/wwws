const div = document.getElementById("last-updated");
const modified = new Date(document.lastModified);

const mm = String(modified.getMonth() + 1).padStart(2, '0');
const dd = String(modified.getDate()).padStart(2, '0');
const yy = String(modified.getFullYear()).slice(-2);

div.textContent = `Last updated [${mm}/${dd}/${yy}]`;
