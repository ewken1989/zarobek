import { commetns } from "./variables.js";
import db from "../firebase.js";
import moment from "moment";

function getData() {
  let date = new Date();
  let year = date.getFullYear();
  commetns.innerHTML = "";
  db.collection("comments")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      commetns.innerHTML=""
      let data = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
          
          for (let i = 0; i < data.length; i++) {
            const divComment = document.createElement("div");
            divComment.classList.add("main__comment");

            const div = document.createElement("div");

            const divName = document.createElement("div");
            divName.classList.add("main__commentName");
            divName.innerHTML = data[i].data.name;

            const divDate = document.createElement("div");
            divDate.classList.add("main__commentDate");
            divDate.innerHTML = moment
              .unix(data[i].data.timestamp)
              .format(`MMMM Do ${year} h:mma`);

            const divContent = document.createElement("div");
            divContent.classList.add("main__commentCnt");
            divContent.innerHTML = data[i].data.content;

            div.appendChild(divName);
            div.appendChild(divDate);
            divComment.appendChild(div);
            divComment.appendChild(divContent);
            commetns.appendChild(divComment);
          }
    });
}

export default getData;
