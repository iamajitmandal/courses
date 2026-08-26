# 12th August, 2026
# Learned Support Vector Machine (Theory) - Kernels + Slack Variables

# Linearly Separable:
# Non-Linearly Separable:

# For Non-Linearly Separable Data Points, we need to do data transformation.
# where, we increase the coordinates of the data points like changing 2D to 3D, then data can be linearly separable.

# Data Transformation:
# if we have n features, then transformed data = 2 power n
# if we have 3 features, then transformed data = 2 power 3 = 8
# but if we have 100 features, then transformed data = 2 power 100 is very tedious

# If input feature is large, then data transformation task is tedious, so solve this we use kernel trick.

# Kernel Trick:
# Kernel Function: Learn the function & formula & process of using kernel function.

# Conclusion: Using Kernel Trick, we can completely convert the 2D into 3D easily.

# Types of Kernel:
# 1. Linear Kernel: used when data is linearly separable
# 2. Polynomial Kernel:
# 3. Radial Basis Function Kernel (RBF Kernel:

# RBF: is a kernel used in SVM to handle data that cannot be separated by a single line.
# Important Parameter Gamma:

# Main Conclusion:
# Main Key Takeaways:
# We need followings to solve linearly inseparable data:
# Multiple linear models
# Transforming data

# Data transformation is adding dimensions to the data to make it linearly separable.
# Kernel is just a data mapping function.
# Using kernels is computationally cheap for data transformation.

# Slack Variables for Non-linearly Separable Case (Soft Margin SVM):
# Slack variables are mathematical parameters introduced to allow for a "soft margin".
# They enable the algorithm to handle noisy, overlapping, or non-linearly separable data by permitting a
# controlled amount of error or margin violation during training.

# Formula
# Role of C (penalty)

