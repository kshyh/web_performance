var timing = performance.getEntriesByType("navigation")[0];

var timeToFirstByte = timing.responseStart - timing.fetchStart;
var domContentLoaded = timing.domContentLoadedEventEnd - timing.fetchStart;
var loadTime = timing.loadEventEnd - timing.fetchStart;

var results = {
    timeToFirstByte,
    domContentLoaded,
    loadTime

};

console.table(results);