function insert(intervals: number[][], newInterval: number[]): number[][] {
    let i = 0;
    while (i < intervals.length) {
        // check if overlapping
        if (Math.max(intervals[i][0], newInterval[0]) <= Math.min(intervals[i][1], newInterval[1])) {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
            intervals.splice(i, 1);

        } else {
            if (intervals[i][0] > newInterval[1]) break;
            i++;
        }
    }
    intervals.splice(i, 0, newInterval);
    return intervals;
};