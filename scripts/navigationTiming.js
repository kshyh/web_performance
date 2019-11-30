var timing = performance.getEntriesByType("navigation")[0];

var timeToFirstByte = timing.responseStart - timing.fetchStart;
var domContentLoaded = timing.domContentLoadedEventEnd - timing.fetchStart;
var loadTime = timing.loadEventEnd - timing.fetchStart;
var timeToFirstPaint = performance.getEntriesByType('paint')[0].startTime;
var timeToFirstContentFulPaint = performance.getEntriesByType('paint')[1].startTime;

var results = {
    timeToFirstByte,
    timeToFirstPaint,
    timeToFirstContentFulPaint,
    domContentLoaded,
    loadTime

};

console.table(results);