const btn = document.querySelector(".divider img");
const paragraphs = document.querySelectorAll(".para");
 
let handleClick = (event) => {
    const inputMonth = document.querySelector(".input-month").value;
    const inputYear = document.querySelector(".input-year").value;
    const inputDay = document.querySelector(".input-day").value;
    const dayAlert = document.querySelector(".dayAlert");
    const monthAlert = document.querySelector(".monthAlert");
    const yearAlert = document.querySelector(".yearAlert");
    const paraYears = paragraphs[0];
    const paraMonths = paragraphs[1];
    const paraDays = paragraphs[2];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDayOfMonth = currentDate.getDate();

    
    if (inputDay > 31 && inputMonth > 12 && inputYear > currentYear) {
        dayAlert.textContent = "Must be a valid Day";
        monthAlert.textContent = "Must be a valid Month";
        yearAlert.textContent = "Must be a valid Year";
        return;
    } else if (inputDay > 31 && inputMonth > 12) {
        dayAlert.textContent = "Must be a valid Day";
        monthAlert.textContent = "Must be a valid Month";
        yearAlert.textContent = "";
        return;
    } else if (inputDay > 31 && inputYear > currentYear) {
        dayAlert.textContent = "Must be a valid Day";
        monthAlert.textContent = "";
        yearAlert.textContent = "Must be a valid Year";
        return;
    } else if (inputMonth > 12 && inputYear > currentYear) {
        dayAlert.textContent = "";
        monthAlert.textContent = "Must be a valid Month";
        yearAlert.textContent = "Must be a valid Year";
        return;
    } else {
        dayAlert.textContent = "";
        monthAlert.textContent = "";
        yearAlert.textContent = "";
        let bornMonth = inputMonth;
        let monthCount = 0;
        while (bornMonth !== currentMonth) {
            bornMonth++;
            monthCount++;
            if (bornMonth === 12) {
                bornMonth = 1;
                monthCount++;
            }
        }
        paraMonths.textContent = monthCount - 1;
        
        
        const totalYears = currentYear - inputYear;
        if (currentMonth < inputMonth) {
            paraYears.textContent = totalYears - 1;
        } else {
            paraYears.textContent = totalYears;
        } 
        paraDays.textContent = currentDayOfMonth;
    }
    if (inputDay > 31) {
        dayAlert.textContent = "Must be a valid Day";
        return;
    } else {
        dayAlert.textContent = "";
    } if (inputMonth > 12) {
        monthAlert.textContent = "Must be a valid Month";
        return;
    } else {
        monthAlert.textContent = "";
    }
    if (inputYear > currentYear) {
        yearAlert.textContent = "Must be a valid Year";
        return;
    } else {
        yearAlert.textContent = "";
        return;
    }
}

    

btn.addEventListener("click", handleClick);