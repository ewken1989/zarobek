import { serverTimestamp } from "firebase/firestore";
import db from "../firebase.js";
import { form, name, content, commetns } from "./variables";

function clickButton(e) {
  e.preventDefault();

  if (name.value === "") {
    alert("Wpisz imię albo nick");
    return;
  }
  if (content.value === "") {
    alert("Wpisz treść komentarza");
    return;
  }

  db.collection("comments").add({
    name: name.value,
    content: content.value,
    timestamp: serverTimestamp(),
  });

  name.value = "";
  content.value = "";
}

function saveData() {
  form.addEventListener("submit", clickButton);
}

export default saveData;
