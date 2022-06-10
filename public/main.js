const BASE_URL = "http://localhost:5500";

const chooseBtn = document.querySelector("button");
const hoursBtn = document.querySelector("#hours");
const nameBtn = document.getElementById("name");
const nameHolder = document.getElementById("#name-holder");

const randomHours = (event) => {
  console.log("hit1");
  event.preventDefault;
  axios
    .get(`${BASE_URL}/hours`)
    .then((res) => alert(res.data))
    .catch((err) => console.log(err));
};

const randomName = (event) => {
  event.preventDefault();
  axios
    .get(`${BASE_URL}/name`)
    .then((res) => {
      const yourName = document.createElement("p");
      yourName.textContent = res.data;
      document.body.appendChild(yourName);
    })
    .catch((err) => console.log(err));
};

nameBtn.addEventListener("click", randomName);
chooseBtn.addEventListener("click", () => alert("Fallout 3."));
hoursBtn.addEventListener("click", randomHours);
