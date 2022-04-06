/**
 * @returns a date in the format like ("April 20, 2021")
 */
function getData() {
    const data = new Date();
    const year = data.getFullYear();
    let month = data.getMonth() + 1;  //getMonth() return 0-11 so +1
    month = parsNumberToMonthName(month);
    const day = data.getDate();
    
    return (month + " " + day + ", " + year)
}

/**
 * @monthNumber number from 1 to 12 
 * @returns month
 */
let parsNumberToMonthName = (monthNumber) => {
    switch(monthNumber) {
        case 1: {
            return "January"
        }
        case 2: {
            return "February"
        }
        case 3: {
            return "March"
        }
        case 4: {
            return "April"
        }
        case 5: {
            return "May"
        }
        case 6: {
            return "June"
        }
        case 7: {
            return "July"
        }
        case 8: {
            return "August"
        }
        case 9: {
            return "September"
        }
        case 10: {
            return "October"
        }
        case 11: {
            return "November"
        }
        case 12: {
            return "December"
        }
        default: {
            alert('error')
        }
    }
}

export default getData;