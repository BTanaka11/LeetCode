let heaper = function(max = true) {
    this.data = [];
    this.maxType = max;
}

heaper.prototype.add = function(num) {
    this.data.push(num);
    let cI = this.data.length - 1;
    let pI = Math.floor((cI - 1)/2);
    if (this.maxType) {
        while (pI >= 0 && this.data[cI] > this.data[pI]) {
            [this.data[cI], this.data[pI]] = [this.data[pI], this.data[cI]];
            cI = pI;
            pI = Math.floor((cI - 1)/2);
        }
    } else {
        while (pI >= 0 && this.data[cI] < this.data[pI]) {
            [this.data[cI], this.data[pI]] = [this.data[pI], this.data[cI]];
            cI = pI;
            pI = Math.floor((cI - 1)/2);
        }
    }
}

heaper.prototype.remove = function() {
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
    let popper = this.data.pop();
    let pI = 0;
    let cI_left = pI * 2 + 1;
    let cI_right = pI * 2 + 2;
    let max_Index;
    if (this.maxType) {
        if (cI_right > this.data.length - 1) {
            max_Index = cI_left;
        } else if (this.data[cI_left] > this.data[cI_right]) {
            max_Index = cI_left;
        } else {
            max_Index = cI_right;
        }
        while (cI_left <= this.data.length - 1 && this.data[max_Index] > this.data[pI]) {
            [this.data[max_Index], this.data[pI]] = [this.data[pI], this.data[max_Index]];
            pI = max_Index;
            cI_left = pI * 2 + 1;
            cI_right = pI * 2 + 2;
            if (cI_right > this.data.length - 1) {
                max_Index = cI_left;
            } else if (this.data[cI_left] > this.data[cI_right]) {
                max_Index = cI_left;
            } else {
                max_Index = cI_right;
            }
            
        }
    } else {
        if (cI_right > this.data.length - 1) {
            max_Index = cI_left;
        } else if (this.data[cI_left] < this.data[cI_right]) {
            max_Index = cI_left;
        } else {
            max_Index = cI_right;
        }
        while (cI_left <= this.data.length - 1 && this.data[max_Index] < this.data[pI]) {
            [this.data[max_Index], this.data[pI]] = [this.data[pI], this.data[max_Index]];
            pI = max_Index;
            cI_left = pI * 2 + 1;
            cI_right = pI * 2 + 2;
            if (cI_right > this.data.length - 1) {
                max_Index = cI_left;
            } else if (this.data[cI_left] < this.data[cI_right]) {
                max_Index = cI_left;
            } else {
                max_Index = cI_right;
            }
        }
    }
    return popper;
}

var MedianFinder = function() {
    this.minHeap = new heaper(false);
    this.maxHeap = new heaper(true);
    this.alt = false;
};

/** 
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function(num) {
    if (!this.alt) {
        this.maxHeap.add(num);
        this.minHeap.add(this.maxHeap.remove());
        this.alt = true;
    } else {
        this.minHeap.add(num);
        this.maxHeap.add(this.minHeap.remove());
        this.alt = false;
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if ((this.maxHeap.data.length + this.minHeap.data.length) % 2 === 0) {
        return (this.maxHeap.data[0] + this.minHeap.data[0]) / 2;
    } else {
        return this.minHeap.data[0];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// if > median, put in minHeap and transfer minHeap min to maxHeap
// if < median, put in maxHeap and transfer maxHeap max to minHeap
// if = median, put in heap w/ less items
// if total count is even, median is (maxHeap's max + minHeaps min) / 2
// if count is odd, median is maxHeap's max