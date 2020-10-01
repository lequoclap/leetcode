function eraseOverlapIntervals(intervals: number[][]): number {
    let res = 0;

    intervals.sort((a, b) => {
        if (a[0] != b[0]) return a[0] - b[0]
        else return a[1] - b[1]; // shorter interval first => prefer remove longer one
    });

    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) {
            res++;
            // remove the last node => assign prev to the current node
            if (intervals[i][1] < prev[1]) {
                prev = intervals[i]
            }
            // dont change the prev value cuz you will ignore interval[i]
        } else {
            prev = intervals[i]
        }
    }

    return res;
};