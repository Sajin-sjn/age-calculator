const btn = document.querySelector(".divider img");
const paragraphs = document.querySelectorAll(".para");
 
let handleClick = (event) => {
    const enteredMonth = document.querySelector(".input-month");
    const inputMonth = enteredMonth.value;
    const enteredYear = document.querySelector(".input-year");
    const inputYear = enteredYear.value;
    const enteredDay = document.querySelector(".input-day");
    const inputDay = enteredDay.value;
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
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredDay.classList.add('invalid');
        enteredMonth.classList.add('invalid');
        enteredYear.classList.add('invalid');
        return;
    } else if (inputDay > 31 && inputMonth > 12) {
        dayAlert.textContent = "Must be a valid Day";
        monthAlert.textContent = "Must be a valid Month";
        yearAlert.textContent = "";
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredDay.classList.add('invalid');
        enteredMonth.classList.add('invalid');
        enteredYear.classList.remove('invalid');
        return;
    } else if (inputDay > 31 && inputYear > currentYear) {
        dayAlert.textContent = "Must be a valid Day";
        monthAlert.textContent = "";
        yearAlert.textContent = "Must be a valid Year";
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredDay.classList.add('invalid');
        enteredYear.classList.add('invalid');
        enteredMonth.classList.remove('invalid');
        return;
    } else if (inputMonth > 12 && inputYear > currentYear) {
        dayAlert.textContent = "";
        monthAlert.textContent = "Must be a valid Month";
        yearAlert.textContent = "Must be a valid Year";
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredMonth.classList.add('invalid');
        enteredYear.classList.add('invalid');
        enteredDay.classList.remove('invalid');
        return;
    } else if (inputDay > 31) {
        dayAlert.textContent = "Must be a valid Day";
        monthAlert.textContent = "";
        yearAlert.textContent = "";
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        monthAlert.textContent = "";
        yearAlert.textContent = "";
        enteredDay.classList.add('invalid');
        enteredMonth.classList.remove('invalid');
        enteredYear.classList.remove('invalid');
        return;
    } else if (inputMonth > 12) {
        monthAlert.textContent = "Must be a valid Month";
        dayAlert.textContent = "";
        yearAlert.textContent = "";
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredMonth.classList.add('invalid');
        enteredDay.classList.remove('invalid');
        enteredYear.classList.remove('invalid');
        return;
    } else if (inputYear > currentYear) {
        yearAlert.textContent = "Must be a valid Year";
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        dayAlert.textContent = "";
        monthAlert.textContent = "";
        enteredYear.classList.add('invalid');
        enteredDay.classList.remove('invalid');
        enteredMonth.classList.remove('invalid');
        return;
    } else if(inputDay === "" && inputMonth === "" && inputYear === "") {
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredDay.classList.remove('invalid');
        enteredMonth.classList.remove('invalid');
        enteredYear.classList.remove('invalid');
        dayAlert.textContent = "";
        monthAlert.textContent = "";
        yearAlert.textContent = "";
        return;
    } else if(inputDay === "" || inputMonth === "" || inputYear === "") {
        paraYears.textContent = "--";
        paraMonths.textContent = "--";
        paraDays.textContent = "--";
        enteredDay.classList.remove('invalid');
        enteredMonth.classList.remove('invalid');
        enteredYear.classList.remove('invalid');
        dayAlert.textContent = "";
        monthAlert.textContent = "";
        yearAlert.textContent = "";
        return;
    } else {
            enteredDay.classList.remove('invalid');
            enteredMonth.classList.remove('invalid');
            enteredYear.classList.remove('invalid');
            dayAlert.textContent = "";
            monthAlert.textContent = "";
            yearAlert.textContent = "";

            let bornMonth = inputMonth;
            let monthCount = 0;
            
            while (currentMonth != bornMonth) {
                bornMonth++;
                monthCount++;
                if (bornMonth === 13) {
                    bornMonth = 1;
                }
            } 
            paraMonths.textContent = monthCount;
            if (paraMonths.textContent < 0) {
                paraMonths.textContent = 0;
            }
            const totalYears = currentYear - inputYear;
            if (currentMonth < inputMonth) {
                paraYears.textContent = totalYears - 1;
            } else {
                paraYears.textContent = totalYears;
            } 
            paraDays.textContent = currentDayOfMonth;
    }
}
btn.addEventListener("click", handleClick);