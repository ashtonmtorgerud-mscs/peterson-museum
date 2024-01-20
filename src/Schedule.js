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

    if (firstDayOfMonth > 0) {
        let oldDaysCalendarAdder = lastmonthsdays;
        for (let i = firstDayOfMonth; i > 0; i--) {
            matrixLoadValues.push(oldDaysCalendarAdder);
            oldDaysCalendarAdder -= 1;
        }
    }

    console.log("Today is: " + date.getDate());

    // matrixLoadValues[].push(lastmonthsdays);


    for (let i = minValue; i <= maxValue; i++) {

        let currentValue = i;
        let tail = "";
        if (currentValue > new Date(year, month + 1, 0).getDate()) {
            currentValue -= new Date(year, month + 1, 0).getDate();
            tail = " Bruh";
        }
        matrixLoadValues.push(currentValue);
    }


    console.log("The length of the matrix load values is:  " + matrixLoadValues.length);

    for (let i = 0; i < 35; i++) {
        matrix[rowIndex].push(matrixLoadValues[i]);
        columnIndex++;

        if (columnIndex === 7) {
            rowIndex++;
            columnIndex = 0;
        }
    }


    console.log(matrix);

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
                                    <td key={cellIndex} id={cellData}><div className="dateBox"><h3 className={cellData === date.getDate() ? "today" : ""}>{cellData}</h3></div> <div className="dateBox"><p>{cellData === 1 ? "•Start of the month" : "Event"}</p></div></td>
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