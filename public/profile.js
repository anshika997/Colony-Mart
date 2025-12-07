document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    document.getElementById("user-data").innerHTML = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
  } else {
    document.getElementById("user-data").innerHTML = `<p>Please <a href="login.html">login</a> first.</p>`;
  }
});
