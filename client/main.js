const baseURL = "http://localhost:4000";

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const displayFortune = document.getElementById("displayFortune");

const addFortune = document.getElementById("addFortune");
const addInput = document.getElementById("addInput");

const deleteItem = document.getElementById("deleteFortune");
const deleteInput = document.getElementById("deleteInput");

const editForm = document.getElementById("editFortune");
const editIndex = document.getElementById("editIndex");
const editInput = document.getElementById("editInput");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getFortune = () => {
  axios.get(`${baseURL}/api/fortunes`).then((res) => {
    console.log(res.data);
    const fortunes = res.data;
    displayFortune.innerHTML = "";

    for (let i = 0; i < fortunes.length; i++) {
      let newFortune = document.createElement("li");
      newFortune.textContent = fortunes[i];
      displayFortune.appendChild(newFortune);
    }
  });
};
const addNewItem = (event) => {
  event.preventDefault();

  let bodyObj = {
    fortune: addInput.value,
  };

  axios
    .post(`${baseURL}/api/addFortune`, bodyObj)
    .then((res) => {
      console.log(res.data);
      const fortunes = res.data;
      displayFortune.innerHTML = "";

      for (let i = 0; i < fortunes.length; i++) {
        let newFortune = document.createElement("li");
        newFortune.textContent = fortunes[i];
        displayFortune.appendChild(newFortune);
      }

      addInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteFortune = (event) => {
  event.preventDefault();

  axios
    .delete(`${baseURL}/api/deleteFortune/${deleteInput.value}`)
    .then((res) => {
      const fortunes = res.data;
      displayFortune.innerHTML = "";

      for (let i = 0; i < fortunes.length; i++) {
        let newFortune = document.createElement("li");
        newFortune.textContent = fortunes[i];
        displayFortune.appendChild(newFortune);
      }

      deleteInput.value = "";
    });
};

const editFortune = (event) => {
  event.preventDefault();

  let bodyObj = {
    item: editInput.value,
  };

  axios
    .put(`${baseURL}/api/editFortune/${editIndex.value}`, bodyObj)
    .then((res) => {
      const fortunes = res.data;
      displayFortune.innerHTML = "";

      for (let i = 0; i < fortunes.length; i++) {
        let newFortune = document.createElement("li");
        newFortune.textContent = fortunes[i];
        displayFortune.appendChild(newFortune);
      }

      editIndex.value = "";
      editInput.value = "";
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
addFortune.addEventListener("submit", addNewItem);
deleteItem.addEventListener("submit", deleteFortune);
editForm.addEventListener("submit", editFortune);
