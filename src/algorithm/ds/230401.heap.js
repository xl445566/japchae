class Heap {
  constructor () {
    this.heap = [ null ];
  }
  
  size () {
    return this.heap.length - 1;
  }
  
  min () {
    return this.heap[1] ?? null;
  }
  
  swap (a, b) {
    [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
  }
  
  push (value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = (currentIndex / 2) >> 0; // >> 0 연산 시 소수점 버림 ex: 5 / 2 >> 0 결과: 2
      
      while (currentIndex > 1 && this.heap[parentIndex] > this.heap[currentIndex]) {
          this.swap(parentIndex, currentIndex);
          currentIndex = parentIndex;
          parentIndex = (currentIndex / 2) >> 0;
      }
  }
  
  pop () {
    const root = this.heap[1];	
    if (this.heap.length <= 2) {
      this.heap = [ null ];
    } else {
      this.heap[1] = this.heap.pop();   
    }
    
    let currentIndex = 1; // heap[0]은 항상 null이기 때문에
    let leftIndex = currentIndex * 2; // 왼쪽 자식은 부모 인덱스 * 2
    let rightIndex = currentIndex * 2 + 1;  // 오른쪽 자식은 부모 인덱스 * 2 + 1
    
    if (!this.heap[leftIndex]) {
      return root;
    }

    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[currentIndex]) {
        this.swap(leftIndex, currentIndex);
      }

      return root;
    }

    while (this.heap[leftIndex] < this.heap[currentIndex] || this.heap[rightIndex] < this.heap[currentIndex]) {
      const minIndex = this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      this.swap(minIndex, currentIndex);
      
      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return root;
  }
} 