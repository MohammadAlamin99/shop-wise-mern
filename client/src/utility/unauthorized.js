export default function unauthorized(user){
    if(user==="unathurized"){
        sessionStorage.clear();
        localStorage.clear();
        let lastLocation = window.location;
        sessionStorage.setItem("lastLocation", lastLocation)
        window.location.href="/signin";
    }
}