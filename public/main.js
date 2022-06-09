const BASE_URL = "http://localhost:5500";

const chooseBtn = document.querySelector("button");
const hoursBtn = document.querySelector("#hours");

const randomHours = (event) => {
  console.log("hit1");
  event.preventDefault;
  axios
    .get(`${BASE_URL}/hours`)
    .then((res) => alert(res.data))
    .catch((err) => console.log(err));
};

chooseBtn.addEventListener("click", () => alert("Fallout 3."));
hoursBtn.addEventListener("click", randomHours);
