import { closeCookies, cookiesBar } from "./variables";

function closeCookie (){
    closeCookies.addEventListener("click", () =>{
            cookiesBar.style.display = "none"
    })
}

export default closeCookie