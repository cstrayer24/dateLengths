const monthHelper = () => {
    if (new Date().getMonth() === 4 ||
        new Date().getMonth() === 6 ||
        new Date().getMonth() === 9 ||
        new Date().getMonth() === 11) {
        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 + 30).toUTCString();
    }
    else if (new Date().getMonth() === 2) {
        if (new Date().getFullYear() % 100 === 0 &&
            new Date().getFullYear() % 400 !== 0) {
            return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 + 28).toUTCString();
        }
        else {
            return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 + 29).toUTCString();
        }
    }
    else {
        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 + 31).toUTCString();
    }
};
const yearHelp = () => {
    if (new Date().getFullYear() % 100 === 0 &&
        new Date().getFullYear() % 400 !== 0) {
        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365).toUTCString();
    }
    else {
        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 366).toUTCString();
    }
};
const futureDates = {
    Day: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 1).toUTCString(),
    week: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toUTCString(),
    month: monthHelper(),
    year: yearHelp(),
};
export default futureDates;
