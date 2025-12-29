function nowISOString(): string {
    const now = new Date();
    return now.toISOString();
}

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


export function getWeekDayString(year: number, month: number, day: number): string {
    const date = new Date(year, month, day).getDay();

    let dayString = "";

    if (date === 0) {
        dayString = "Sunday";
    }

    if (date === 1) {
        dayString = "Monday";
    }

    if (date === 2) {
        dayString = "Tuesday";
    }

    if (date === 3) {
        dayString = "Wednesday";
    }

    if (date === 4) {
        dayString = "Thursday";
    }

    if (date === 5) {
        dayString = "Friday";
    }

    if (date === 6) {
        dayString = "Saturday";
    }

    return dayString;
    
}


export function getCurrentDateString(): string {
    const nowString = nowISOString();

    return nowString.split("T")[0];
}

export function getCurrentYearString(): string {
    const nowString = nowISOString();

    return nowString.split("-")[0];
}

export function getCurrentYear(): number {
    return new Date().getFullYear();
}

export function getCurrentTimeString(): string {
    const nowString = nowISOString();

    return nowString.split("T")[1].split(".")[0];
}

export function getCurrentWeekNumber(): number {
    const now = new Date()
    const year = now.getFullYear()

    let current = new Date(Date.UTC(year, 0, 1))
    const today = new Date(Date.UTC(year, now.getMonth(), now.getDate()))

    let weekNumber = 1;

    while (current < today) {
        current.setUTCDate(current.getUTCDate() + 1)

        if (current <= today && current.getUTCDay() === 1) {
        weekNumber += 1;
        }
    }

    return weekNumber;
}

export function numberOfWeeksInYear(year: number): number {
    const now = new Date()

    let current = new Date(Date.UTC(year, 0, 1))
    const lastDay = new Date(Date.UTC(year, 11, 31))

    let weekNumber = 1;

    while (current <= lastDay) {
        current.setUTCDate(current.getUTCDate() + 1)

        if (current <= lastDay && current.getUTCDay() === 1) {
        weekNumber += 1;
        }
    }

    return weekNumber;
}