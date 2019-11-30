performance.getEntriesByType("resource").map(x => ({
    name: x.name,
    dnsLookup: x.domainLookupEnd - x.domainLookupStart,
    initialConnection: x.connectEnd - x.connectStart,
    waiting: x.responseStart - x.requestStart,
    contentDownload: x.responseEnd - x.responseStart
})).forEach(entry => console.table(entry));

performance.getEntriesByType("resource").map(x => ({
    name: x.name,
    encodedBody: x.encodedBodySize,
    decodedBody: x.decodedBodySize,
    encodedBodyAndHeaders: x.transferSize,
    headerSize: x.transferSize - x.encodedBodySize
})).forEach(entry => console.table(entry));

performance.getEntriesByType("resource").map(x => ({
    fetchSpeed: ((x.transferSize / (2**20)) / ((x.responseEnd - x.responseStart) / 1000)) * 8
})).forEach(entry => console.table(entry));