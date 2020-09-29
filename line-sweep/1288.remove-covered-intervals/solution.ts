
// O(n2)
export function naiveWay(intervals: number[][]): number {
    const res = [];

    for (const item of intervals) {
        let canAdd = true;
        for (let i = 0; i < res.length; i++) {
            if (item[0] <= res[i][0] && item[1] >= res[i][1]) {
                res.splice(i, 1);
                i--;
                continue;
            }
            if (item[0] >= res[i][0] && item[1] <= res[i][1]) {
                canAdd = false;
                break;
            }
        }
        if (canAdd) res.push(item);
    }

    return res.length;
};

// Time Complexity: O(nlog(n))
// Space Complexity: O(1)
export function linesweap(intervals: number[][]): number {
    intervals.sort((a, b) => {
        if (a[0] == b[0]) return b[1] - a[1];
        else return a[0] - b[0];
    });
    let remove = 0;
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][1]) {
            remove++;
            intervals[i + 1] = intervals[i];
        }
    }
    return intervals.length - remove;

};