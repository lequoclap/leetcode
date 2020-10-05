function isRectangleCover(rectangles: number[][]): boolean {



    let edges: [number, number, number, boolean][] = [];

    for (const rec of rectangles) {
        edges.push([rec[0], rec[2], rec[3], true]); // true = above edge
        edges.push([rec[0], rec[2], rec[1], false]); // false = bottom edge
    }

    // sort 
    edges.sort((a, b) => {
        if (a[2] != b[2]) return b[2] - a[2]
        else return a[0] - b[0];
    });

    let activeEdges: [number, number][] = [];

    let prev = edges[0][2];
    const l = edges[0][0]; // left 
    let r = 0; // right

    for (const edge of edges) {
        const curr = edge[2];
        if (prev != curr) {
            if (r == 0) r = edges[edges.length - 1][1]; // set right value after first check
            if (!isPerfect(activeEdges, l, r)) return false;
            prev = curr;
        }
        if (edge[3] == true) { //above edge => add
            push2Arr(activeEdges, [edge[0], edge[1]]);
        } else {
            // bottom edge => remove
            removeFromArr(activeEdges, [edge[0], edge[1]]);
        }
    }
    return true;

};

function isPerfect(edges: [number, number][], l: number, r: number): boolean {
    if (edges.length == 0) return true;
    if (edges[0][0] != l) return false;
    if (edges[edges.length - 1][1] != r) return false;
    for (let i = 0; i < edges.length - 1; i++) {
        if (edges[i][1] != edges[i + 1][0]) return false;
    }

    return true;

}

// push item to sorted arr (asc)
function push2Arr(arr: [number, number][], item: [number, number]) {
    let i = 0;
    while (arr[i] && arr[i][0] < item[0]) {
        i++;
    }
    arr.splice(i, 0, item);
}

function removeFromArr(arr: [number, number][], item: [number, number]) {
    let i = 0;

    while (arr[i][0] != item[0] || arr[i][1] != item[1]) {
        i++;
    }
    arr.splice(i, 1);
}