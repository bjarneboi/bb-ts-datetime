# bb-ts-datetime

Library for getting date and time in typescript. Only contains a few functions, but I will implement more when needed.

getWeekDayString(year: number, month: number, day: number) - Returns the weekday as a String instead of a number. (0 means sunday, so the string returned will be "Sunday)

getCurrentDateString() - Returns the current date as a string.

getCurrentYearString() - Returns the current year as a string. Format: "YYYY-MM-DD"

getCurrentTimeString() - Returns the current time as a string. Format: "HH:MM:SS"

getCurrentWeekNumber() - Returns the current week number, as a number. Does the calculation for it, which makes it reusable and can be implemented in projects for simplicity.

numberOfWeeksInYear(year: number) - Returns the number of weeks in the year, given as a parameter.
