// O(1) - Constant Time
function constantFunction(arr) {
    console.log("O(1) - Constant Time:");
    console.log(arr[0]);
}

// O(n) - Linear Time
function linearFunction(arr) {
    console.log("O(n) - Linear Time:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// O(n^2) - Quadratic Time
function quadraticFunction(arr) {
    console.log("O(n^2) - Quadratic Time:");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
    console.log("O(log n) - Logarithmic Time:");
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(`Found ${target} at index ${mid}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(`${target} not found`);
    return -1;
}

// O(2^n) - Exponential Time
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the functions
console.log("=== Testing Big O Examples ===");

// Test O(1)
constantFunction([10, 20, 30]);

// Test O(n)
linearFunction([1, 2, 3, 4, 5]);

// Test O(n^2)
quadraticFunction([1, 2, 3]);

// Test O(log n)
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);

// Test O(2^n)
console.log("O(2^n) - Exponential Time:");
console.log(`Fibonacci(5): ${fibonacci(5)}`);