# 12th june, 2026
# Learned palindrome and fibonacci programs

# palindrome check -> ana = reverse(ana) = ana so, ana is palindrome,
# e.g. did, deed, civic, radar, eye, rotor,

# function to check palindrome or not
def is_palindrome(text):
    return text == text[::-1]

print(is_palindrome("madam"))
print(is_palindrome("did"))
print(is_palindrome("radar"))
print(is_palindrome("sir"))

# fibonacci series
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
fibonacci(8)
