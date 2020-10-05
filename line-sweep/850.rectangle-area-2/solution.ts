// couldn't pass all cuz big int in js is suck

function rectangleArea(rectangles: number[][]): number {

    let edges: [number, number, number, boolean][] = [];

    for (const rec of rectangles) {
        edges.push([rec[0], rec[2], rec[3], true]); // true = above edge
        edges.push([rec[0], rec[2], rec[1], false]); // false = bottom edge
    }

    edges.sort((a, b) => {
        if (a[2] != b[2]) return b[2] - a[2]
        else {
            if (a[0] != b[0]) return a[0] - b[0];
            else return a[1] - b[1];
        }
    });

    let activeEdges: [number, number][] = [];

    let prev = edges[0][2];
    let sum = 0;
    for (const edge of edges) {
        const curr = edge[2];
        const h = prev - curr;
        if (h != 0) {
            sum += getArea(activeEdges, h);
            sum = sum % (Math.pow(10, 9) + 7)
            prev = curr;
        }
        if (edge[3] == true) { //above edge => add
            push2Arr(activeEdges, [edge[0], edge[1]]);
        } else {
            // bottom edge => remove
            removeFromArr(activeEdges, [edge[0], edge[1]]);
        }

    }
    return sum;
};

function getArea(activeEdges: [number, number][], h: number): number {
    const edges = [...activeEdges];
    if (edges.length == 0) return 0;

    let w = edges[0][1] - edges[0][0];
    for (let i = 1; i < edges.length; i++) {
        let overlap = 0;

        if (edges[i][1] < edges[i - 1][1]) {
            edges.splice(i, 1);
            i--;
            continue;
        }

        if (edges[i][0] < edges[i - 1][1]) {
            overlap = edges[i - 1][1] - edges[i][0];
        }
        w += edges[i][1] - edges[i][0] - overlap;
    }
    return w * h;
}

// push item to sorted arr (asc)
function push2Arr(arr: [number, number][], item: [number, number]) {
    let i = 0;
    while (arr[i] && arr[i][0] <= item[0]) {
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
