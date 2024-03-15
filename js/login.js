const form = document.querySelector(".login__form");
const inpUsername = document.querySelector(".login__input");
const inpPassword = document.querySelector(".password__input");

inpUsername.value = "atuny0";
inpPassword.value = "9uQFF1Lh";

const API_URL = "https://dummyjson.com/auth/login";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let user = {
    username: inpUsername.value,
    password: inpPassword.value,
  };
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "Invalid credentials") {
        alert("username or password is incorrect");
      } else {
        console.log(res);
        localStorage.setItem("token", res.token);
        window.open("../index.html", "_self");
      }
    })
    .catch((err) => console.log(err));
});

// LOGIN ANIMATION

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
