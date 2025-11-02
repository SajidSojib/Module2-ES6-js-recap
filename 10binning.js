//* Binning (Resembling) Time Series Data

//? Scenario: You have a long list of user click events over a period of time.
//? you need to bin these events into 30 minite intervals and count the number of clicks in each interval.

//? Input
const events = [
    { timestamp: "2025-11-02T10:11:00.000Z", type: "click" },
    { timestamp: "2025-11-02T10:27:00.000Z", type: "click" },
    { timestamp: "2025-11-02T10:32:00.000Z", type: "click" },
    { timestamp: "2025-11-02T10:45:00.000Z", type: "click" },
    { timestamp: "2025-11-02T11:02:00.000Z", type: "click" },
    { timestamp: "2025-11-02T11:25:00.000Z", type: "click" },
    { timestamp: "2025-11-02T11:45:00.000Z", type: "click" },
    { timestamp: "2025-11-02T12:00:00.000Z", type: "click" },
    { timestamp: "2025-11-02T12:15:00.000Z", type: "click" },
    { timestamp: "2025-11-02T12:20:00.000Z", type: "click" },
    { timestamp: "2025-11-02T12:45:00.000Z", type: "click" }
];

//? Output
//? binnedEvents = {
//?    '2025-11-02T10:00:00.000Z': { 'total': 2},
//?    '2025-11-02T11:00:00.000Z': { 'total': 2},
//?    '2025-11-02T12:00:00.000Z': { 'total': 3},
//? }

const INTARVAL = 30 * 60 * 1000; // 30 minutes in milliseconds

const getBinnedTime = (timestamp) => {
    const date = new Date(timestamp);
    // console.log(date);
    const flooredDate = new Date(Math.floor(date.getTime() / INTARVAL) * INTARVAL);
    return flooredDate.toISOString();
}

const binnedEvents = events.reduce((table, event) => {
    const bin = getBinnedTime(event.timestamp);
    // console.log(bin);
    if (!table[bin]) {
        table[bin] = { total: 0 };
    }
    table[bin].total++;
    return table;
}, {});

console.log(binnedEvents);