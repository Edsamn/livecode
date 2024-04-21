const api = axios.create({
  baseURL: "https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people",
});
const container = document.getElementById("peopleContainer");
const inputName = document.getElementById("serchInput");

const renderOnDisplay = (character) => {
  const userCard = document.createElement("div");
  userCard.classList.add("userCard");

  userCard.innerHTML = `
      <img src='${character.avatar}' alt=''>
      <p> ${character.name} </p>
      <p> ${character.last_name} </p>
      <p> ${character.phone} </p>
      `;
  container.appendChild(userCard);
};

async function getPeople() {
  try {
    const response = await api.get("/");
    const characters = response.data;
    characters.forEach((character) => {
      renderOnDisplay(character);
    });
  } catch (error) {
    console.log(error);
  }
}

async function searchPeopleByName() {
  try {
    const response = await api.get(`/?name=${inputName.value}`);
    const characters = response.data;

    container.innerHTML = "";

    characters.forEach((character) => {
      renderOnDisplay(character);
    });
  } catch (error) {
    console.log(error);
  }
}

getPeople();
