

// ko dung priority queue => chi su dung array don thuan de luu gia tri do cao cua nhung toa nha dang xet
// Result: 36/36 cases passed

export function getSkyline(buildings: number[][]): number[][] {
    let res: [number, number][] = [];
    let heights: [number, number][] = [];

    for (const b of buildings) {
        heights.push([b[0], -b[2]])
        heights.push([b[1], b[2]])
    }

    heights.sort((a, b) => {
        if (a[0] != b[0]) return (a[0] - b[0])
        else return (a[1] - b[1]);
    })

    let overlapHeights: number[] = [0];

    let prev = 0;
    for (const h of heights) {
        if (h[1] < 0) push2Arr(overlapHeights, -h[1])
        else overlapHeights.splice(overlapHeights.indexOf(h[1]), 1);
        const curr = overlapHeights[0];
        if (prev != curr) {
            res.push([h[0], curr]);
            prev = curr;
        }
    }

    return res;
};

function push2Arr(arr: number[], item: number) {
    let i = 0;
    while (arr[i] > item) {
        i++;
    }
    arr.splice(i, 0, item);
}