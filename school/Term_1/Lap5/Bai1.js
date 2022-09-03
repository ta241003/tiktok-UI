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

const dateSelect = document.getElementById("date");
function populateDate(){
    for(let i = 1; i <= 31; i++){
        const option = document.createElement("option");
        option.textContent = i;
        dateSelect.appendChild(option);
    }
}

populateDate();

const monthSelect = document.getElementById("month");
function populateMonth(){
    for(let i = 1; i <= 12; i++){
        const option = document.createElement("option");
        option.textContent = i;
        monthSelect.appendChild(option);
    }
}

populateMonth();