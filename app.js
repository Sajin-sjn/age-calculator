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
    
    let daysInMonth;
    
    if (inputMonth < currentMonth) {
        daysInMonth = new Date(currentYear, inputMonth, 0).getDate();
    } else {
        daysInMonth = new Date(currentYear - 1, inputMonth, 0).getDate();
    }

    
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
            let totalNumberOfDays;
            
            while (currentMonth != bornMonth) {
                
                if (bornMonth == 13) {
                    bornMonth = 1;
                }
                bornMonth++;
                monthCount++;
            } 


            if (inputMonth == currentMonth) {
                
                if (inputDay <= currentDayOfMonth) {
                    totalNumberOfDays = currentDayOfMonth - inputDay;
                } else {
                    totalNumberOfDays = (daysInMonth - inputDay) + currentDayOfMonth;
                    monthCount = 10;
                }
            } else {
                totalNumberOfDays = (daysInMonth - inputDay) + currentDayOfMonth;
            }
            
            if (inputMonth > currentMonth && totalNumberOfDays >= 31) {
                totalNumberOfDays -= 31;
                paraMonths.textContent = monthCount;
            } else if (inputMonth > currentMonth && totalNumberOfDays < 31) {
                console.log(monthCount)
                paraMonths.textContent = monthCount - 1;
            } else if (inputMonth > currentMonth) {
                paraMonths.textContent = monthCount;
            } else if (totalNumberOfDays >= 31) {
                totalNumberOfDays -= 31;
                paraMonths.textContent = monthCount - 1;
            } else  {
                paraMonths.textContent = monthCount;
            }
            if(paraMonths.textContent < 0) {
                paraMonths.textContent = 0;
            }

            paraDays.textContent = totalNumberOfDays;


            const totalYears = currentYear - inputYear;
            if (inputMonth > currentMonth) {
                paraYears.textContent = totalYears - 1;
            } else {
                if (inputDay < currentDayOfMonth) {
                    paraYears.textContent = totalYears;
                } else {
                    paraYears.textContent = totalYears - 1;
                }
            } 

        
            
    }
}
btn.addEventListener("click", handleClick);