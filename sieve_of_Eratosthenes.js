//Given an integer n, return the number of prime numbers that are strictly less than n.

const countPrimes = (n) => {
    let primes = new Array(n).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (primes[i]) {
        for (let j = i * i; j < n; j += i) {
            primes[j] = false;
        }
        }
    }
    return primes.filter((prime) => prime).length;
    };

    // Time complexity: O(n log log n)
    // Space complexity: O(n)
    // The time complexity is O(n log log n) because the algorithm iterates over all numbers from 2 to n and for each number, it marks all its multiples as non-prime. The number of iterations is given by the sum of the reciprocals of the prime numbers up to n, which is approximately O(log log n). The space complexity is O(n) because the algorithm uses an array of size n to store the prime numbers.