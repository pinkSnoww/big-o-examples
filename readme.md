# Big O Examples in JavaScript

This repository demonstrates different time complexity examples in JavaScript, showcasing how different algorithms perform based on their time complexity.

## Time Complexities Covered
- **O(1)** - Constant Time
- **O(n)** - Linear Time
- **O(n^2)** - Quadratic Time
- **O(log n)** - Logarithmic Time
- **O(2^n)** - Exponential Time

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/pinkSnoww/big-o-examples.git
   ```
2. Open the `index.html` file in your browser.

## Examples Included

### O(1) - Constant Time
```javascript
function constantFunction(arr) {
    return arr[0];
}
```

### O(n) - Linear Time
```javascript
function linearFunction(arr) {
    arr.forEach(item => console.log(item));
}
```

### O(n^2) - Quadratic Time
```javascript
function quadraticFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
```

### O(log n) - Logarithmic Time
```javascript
function logarithmicFunction(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### O(2^n) - Exponential Time
```javascript
function exponentialFunction(n) {
    if (n <= 1) return 1;
    return exponentialFunction(n - 1) + exponentialFunction(n - 2);
}
```

## License
This project is licensed under the MIT License.

## Contributing
Feel free to submit a pull request or open an issue if you have suggestions or improvements.

## Usage
You can use these functions to understand how different algorithms perform based on their time complexity.

## Contact
For questions or support, please reach out to [shivaq1994@gmail.com].
