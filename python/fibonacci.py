####### Fibonacci sequency #######
#  1, 1, 2, 3, 5, 8, 13, 21, 34 .....

def check_number_for_fibonacci_calc(n):
    if type(n) != int:
        raise TypeError("The value must be a Integer")
    if n < 1:
        raise ValueError("The value must be a positive Integer")
    

# calculate fibonacci given a number
def fibonacci(n):
    check_number_for_fibonacci_calc(n)
    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif n > 2:
        return fibonacci(n-1) + fibonacci(n-2)


# # Test function
# for n in range(1,11):
#     print(n, " > ", fibonacci(n))


########## Apply explicitly memoization #######
fibonacci_cache = {}
def fibonacci_optimized(n):
    check_number_for_fibonacci_calc(n)
    # if the value was computed
    if n in fibonacci_cache:
        return fibonacci_cache[n]
    
    # compute the new value
    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif n > 2:
        value = fibonacci_optimized(n-1) + fibonacci_optimized(n-2)

    fibonacci_cache[n] = value
    return value


# # Test function optimized
# for n in range(1,101):
#     print(n, " > ", fibonacci_optimized(n))


########## Apply LRU cache #######
from functools import lru_cache

@lru_cache(maxsize = 1000)
def fibonacci_cached(n):
    check_number_for_fibonacci_calc(n)
    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif  n > 2:
        return fibonacci_cached(n - 1) + fibonacci_cached(n - 2)

# # Test function cached
# for n in range(1,201):
#     print(n, " > ", fibonacci_cached(n))


# Fibonacci division
for n in range(1,41):
    print(n, " > ", fibonacci_cached(n+1) / fibonacci_cached(n))
