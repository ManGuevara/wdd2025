
let visitas= +localStorage.getItem("visitas") //el signo + convierte a cadena
if (visitas == null){
    localStorage.setItem("visitas", 1);
}
else {
    let visitas_Actual = visitas +1;
    localStorage.setItem("visitas", visitas_Actual);
}
document.addEventListener("DOMContentLoaded", ()=>{
    const visit_display = document.getElementById("visitas");
    if (visit_display){
        visit_display.textContent = `Número de visitas: ${visitas}`
    }
})
