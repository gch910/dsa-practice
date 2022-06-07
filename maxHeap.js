//to get child: 2n + 1 (left child) and 2n + 2 (right child)

//to get parent: (n-1) / 2 (floor this)

const maxHeap = [41, 39, 33, 18, 27, 12]

class MaxHeap {
    constructor() {
        this.values = []
    }

    maxHeapInsert(val) {
        this.values.push(val);
    
        let insertIdx = this.values.length - 1;
    
        let correctPosition = false;
    
        while(!correctPosition) { 
            const parentIdx = Math.floor((insertIdx - 1) / 2)
            if(this.values[insertIdx] > this.values[parentIdx]) {
                const temp = this.values[parentIdx];
                this.values[parentIdx] = this.values[insertIdx];
                this.values[insertIdx] = temp;
                insertIdx = parentIdx;
                continue;
            } 
            correctPosition = true;
        }
    
        return this.values;
    }

    extractMax() {
        const minValIdx = this.values.indexOf(Math.min(...this.values));

        //max value
        this.values[0] = this.values[minValIdx];


        this.values.splice(minValIdx, 1);


        let currentNodeIdx = 0;

        let notCorrectPosition = true;

        while(notCorrectPosition) {
            const leftChildIdx = (2 * currentNodeIdx) + 1;
            const rightChildIdx = (2 * currentNodeIdx) + 2;
            let greatestChild;

            if(this.values[leftChildIdx] && this.values[rightChildIdx]) {
                greatestChild = Math.max(this.values[leftChildIdx], this.values[rightChildIdx]);
            } else if(this.values[leftChildIdx]) {
                greatestChild = this.values[leftChildIdx];
            } else if(this.values[rightChildIdx]) {
                greatestChild = this.values[rightChildIdx];
            }
           
            const greatestChildIdx = this.values.indexOf(greatestChild);

            if(greatestChild > this.values[currentNodeIdx]) {
                const temp = this.values[currentNodeIdx];
                this.values[currentNodeIdx] = greatestChild;
                this.values[greatestChildIdx] = temp;
                currentNodeIdx = greatestChildIdx;
                continue    
            }

            notCorrectPosition = false;

        }
        return "hello"
    }
}

[80, 41, 29, 33, 37, 50]
 
                              
const heap = new MaxHeap();

heap.maxHeapInsert(33);
heap.maxHeapInsert(41);
heap.maxHeapInsert(29);
heap.maxHeapInsert(50);
heap.maxHeapInsert(37);
heap.maxHeapInsert(100);
heap.maxHeapInsert(80);
heap.maxHeapInsert(300);
heap.maxHeapInsert(89);
heap.maxHeapInsert(109);
heap.maxHeapInsert(9);
heap.maxHeapInsert(23);
heap.maxHeapInsert(24);





console.log(heap);

heap.extractMax();

console.log(heap);



// console.log(heap)

