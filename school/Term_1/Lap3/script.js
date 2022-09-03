const yearSelect = document.getElementById("year");
function populateYears(){
    let year = new Date().getFullYear();

    for(let i = 100; i > 0; i--){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateYears();