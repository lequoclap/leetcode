function merge(intervals: number[][]): number[][] {
    // sort first
    intervals.sort((a, b) => {
        if (a[0] != b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    })
    // check overlap
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i + 1][0] = intervals[i][0];
            intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1])
            intervals.splice(i, 1);
            i--;
        }
    }
    return intervals;
};