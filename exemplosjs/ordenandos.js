Array.prototype.bubbleSort = function () {
    const n = this.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                // swap
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
};

Array.prototype.selectionSort = function () {
    const n = this.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (this[j] < this[minIndex]) {
                minIndex = j;
            }
        }
        [this[i], this[minIndex]] = [this[minIndex], this[i]];
    }
};

Array.prototype.quickSort = function (low = 0, high = this.length - 1) {
    if (low < high) {
        const pivotIndex = partition(this, low, high);
        this.quickSort(low, pivotIndex - 1);
        this.quickSort(pivotIndex + 1, high);
    }
};

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}