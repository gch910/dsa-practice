//to get child: 2n + 1 (left child) and 2n + 2 (right child)

//to get parent: (n-1) / 2 (floor this)

const maxHeap = [100, 80, 70, 60, 50, 40, 30]

const maxHeapInsert = (heap, val) => {
    heap.push(val);
    console.log(heap)

    let insertIdx = heap.length - 1;

    let correctPosition = false;

    while(!correctPosition) {
        const parentIdx = Math.floor((insertIdx - 1) / 2)
        if(heap[insertIdx] > heap[parentIdx]) {
            const temp = heap[parentIdx];
            heap[parentIdx] = heap[insertIdx];
            heap[insertIdx] = temp;
            insertIdx = parentIdx;
            continue;
        } 
        correctPosition = true;
    }
    console.log(heap)
    return heap
}

maxHeapInsert(maxHeap, 85)