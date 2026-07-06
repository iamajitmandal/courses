# 🔷 Problem: Flexible Calculator with Overrides
# 🎯 Goal
    # Create a function that can:
    # Accept any number of positional arguments (*args)
    # Accept optional keyword arguments (**kwargs) to modify behavior

# 📌 Requirements
# Write a function:
# def flexible_calc(*args, **kwargs):
#     pass

# 🔹 Core Behavior
    # By default, the function should add all numbers in args.

# 🔹 Keyword Overrides (kwargs)
    # Support the following optional arguments:
        # Key	            Type	                Description
        # operation	        str	                    "add", "mul", "sub"
        # start	            int/float	            initial value (default = 0 for add, 1 for mul)
        # ignore_negatives	bool	                if True, skip negative numbers

# 🔹 Operation Rules
# 1. operation="add" (default)
# Add all numbers

# 2. operation="mul"
# Multiply all numbers

# 3. operation="sub"
# Subtract all numbers from the first number

# 🔹 Extra Logic
# If ignore_negatives=True, skip negative numbers
# If no args → return "No numbers provided"

# 🧪 Example Calls
# flexible_calc(1, 2, 3)
# # Output: 6
#
# flexible_calc(1, 2, 3, operation="mul")
# # Output: 6
#
# flexible_calc(10, 2, 3, operation="sub")
# # Output: 5  (10 - 2 - 3)
#
# flexible_calc(1, -2, 3, ignore_negatives=True)
# # Output: 4
#
# flexible_calc(2, 3, start=10)
# # Output: 15  (10 + 2 + 3)

def flexible_calc(*args, **kwargs):
    operation = kwargs.get("operation", "add")
    start = kwargs.get("start", None)

    if len(args) == 0:
        return "No Numbers provided"

    if operation == 'add':
        result = start if start is not None else 0
        for value in args:
            result += value
        return result

    elif operation == 'multiply':
        result = start if start is not None else 1
        for value in args:
            result *= value
        return  result

    elif operation == 'subtract':
        if start is not None:
            result = start
            for value in args:
                result -= value
        else:
            result = args[0]
            for value in args[1:]:  # skips first element
                result -= value

        return result

    else:
        return "Invalid Operation"

print(flexible_calc(1, 2, 3))
print(flexible_calc(1, 2, 3, 4, operation="multiply"))
print(flexible_calc(1, 2, operation="subtract"))
# Output: 6