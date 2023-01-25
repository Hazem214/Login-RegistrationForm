const signup_btn=document.querySelector("#signup");
const signin_btn=document.querySelector("#signin");
const container=document.querySelector(".container");


signup_btn.addEventListener("click",() => {
    container.classList.add("active");
});
signin_btn.addEventListener("click",() => {
    container.classList.remove("active");
});
