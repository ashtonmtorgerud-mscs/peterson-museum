import "./Schedule.css";

const Schedule = (props) => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Poop Month"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = date.getDay(); // Get the current day of the week

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastmonthsdays = new Date(year, month, 0).getDate();
    const matrixLoadValues = [];
    const matrix = [[], [], [], [], []];
    let minValue = 1;
    const maxValue = 35;
    let rowIndex = 0;
    let columnIndex = 0;
    let currentMonth = 0;

    if (firstDayOfMonth > 0) {
        let oldDaysCalendarAdder = lastmonthsdays;
        for (let i = firstDayOfMonth; i > 0; i--) {
            matrixLoadValues.push(oldDaysCalendarAdder);
            oldDaysCalendarAdder -= 1;
        }
        matrixLoadValues.reverse(); // Reverse the values to get them in the correct order
        currentMonth = -1;
    }

    // console.log("Today is: " + date.getDate());

    // matrixLoadValues[].push(lastmonthsdays);

    for (let i = minValue; i <= maxValue; i++) {

        let currentValue = i;
        if (currentValue > new Date(year, month + 1, 0).getDate()) {
            currentValue -= new Date(year, month + 1, 0).getDate();
        }
        matrixLoadValues.push(currentValue);
    }


    // console.log("The length of the matrix load values is:  " + matrixLoadValues.length);

    for (let i = 0; i < 35; i++) {
        matrix[rowIndex].push(matrixLoadValues[i]);
        columnIndex++;

        if (columnIndex === 7) {
            rowIndex++;
            columnIndex = 0;
        }
    }





    ///Check if a date is a holiday and return the title of the holiday
    function getHolidayName(date) {
        // Create an object with holiday dates as keys and holiday names as values
        var holidays = {
          '01-01': "New Year\'s Day",
          '02-01': "New Year\'s Day Feb",
          '03-01': "First Day of March",
          '04-01': "April Fools Day",
          '01-02': "First Day of March",
          '02-02': "Second Day of March",
          '02-14': "Independence Day",
          '04-02': "Christmas Day"
        };
      
        // Get the month and day of the given date
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
      
        // Format the month and day as 'MM-DD'
        var formattedDate = month + '-' + day;

        // Check if the formatted date exists in the holidays object
        if (holidays.hasOwnProperty(formattedDate)) {
          return holidays[formattedDate];
        } else {
        //   return "Not a holiday";
          return "";
        }
      }

    function getHours(dayofWeek) {

        switch (dayofWeek) {
            case "Sunday": return "Closed";
            case "Monday": return "Open by appointment";
            case "Tuesday": return "Open by appointment";
            case "Wednesday": return "Open by appointment";
            case "Thursday": return "Open by appointment";
            case "Friday": return "Open by appointment";
            case "Saturday": return "Open by appointment";
        }
    }




    // Variables for checking the day's hours
    let dayOfWeekForHours = new Date();


    function CheckHoliday(cellData, year, month, cellDay, checkhours) {
        if (cellData === 1 && checkhours != true) {
          currentMonth += 1;
          month += 1;
        }
      
        const passDate = new Date(year, month, cellDay);
        dayOfWeekForHours = passDate;
        let holiname = getHolidayName(passDate);
        if (checkhours != true){
            return holiname;
        }
        console.log(passDate + " Returns the day as " + passDate.getDay() + " and the month as " + passDate.getMonth());
        return days[passDate.getDay()];
      }
      



    return (
        <div className="root">
            <div className="calendar">
                <div className="month">
                    <h2>{months[month]}</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matrix.map((rowData, rowIndex) => (
                            <tr key={rowIndex}>
                                {rowData.map((cellData, cellIndex) => (
                                    <td key={cellIndex} id={cellData}><div className="dateBox"><h3 className={cellData === date.getDate() ? "today" : ""}>{cellData}</h3></div>
                                        <div className="eventBox">
                                            <p style={{ visibility: cellData === 1 ? 'visible' : 'visible' }}>{CheckHoliday(cellData, year, month + currentMonth, cellData)}</p>
                                        </div><div className="dateBox">
                                            <p>{getHours(CheckHoliday(cellData, year, month + currentMonth, cellData, true))}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Schedule;