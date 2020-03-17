
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("01/22/2020 4:00:00"),
    lastDayOfSemester:  new Date("05/07/2020 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Winter Vacation",    new Date("02/29/2020"), new Date("03/08/2020")),
        new VacationDays("Spring Vacation",    new Date("04/09/2020"), new Date("04/13/2020")),
        new VacationDays("Snow Day",           new Date("03/17/2020"), new Date("03/17/2020"))
    ]
};
