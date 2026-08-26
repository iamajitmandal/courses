# 30th July, 2026
# Learned Decision Tree & Impurity Metrics

# Learning Decision Tree:

# Decision Tree: Introduction

# Root Node:
# Intermediate/Internal Node:
# Leaf Node:

# Decision Tree Algorithm

# Impurity Metrics:
'''
1. GINI
2. ENTROPY
3. INFORMATION GAIN
4. GAIN RATIO
'''

# 1. Gini: probability of misclassifying a data point e.g. Cat is classified as Dog, but it should be in 'Cat' class
#           or, probability of classifying in wrong class - so means LESS GINI is Good (Lower GINI is better)
#    GINI Formula:

# | Distribution        |     Gini | Meaning          |
# | ------------------- | -------: | ---------------- |
# | 10 Fish, 0 Not Fish |    0     | Completely pure  |
# | 1 Fish, 9 Not Fish  | 0.18     | Mostly one class |
# | 7 Fish, 3 Not Fish  | 0.42     | More mixed       |
# | 5 Fish, 5 Not Fish  | 0.5      | Equally Distributed |

# Key rule:
# Lower Gini = Better/Purer split
# Gini = 0 means perfectly pure

# For two classes, the maximum Gini is 0.5, which occurs when the classes are equally distributed (50% Fish, 50% Not Fish).
#
# 🧠 Simple real-life intuition
# Imagine a basket:
    #
    # 🐟 🐟 🐟 🐟 → only Fish → Gini = 0
    # 🐟 🐟 🐟 🐟 ⚪ → mostly Fish → low Gini
    # 🐟 🐟 ⚪ ⚪ → mixed → higher Gini
#
# So, Gini basically measures "How messy/mixed is this node?"

# Gini Summary:
# Impurity is minimum -> when node is homogeneous (samples only from a single class)
# Impurity is maximum -> when there are equal number of samples
# pure class = samples from only one class, so gini = 0

# Entropy: In machine learning, entropy measures the amount of randomness, uncertainty, or impurity in a dataset.
# Higher entropy means the data is very mixed and unpredictable, while lower entropy means the data is clean,
# organized, and predictable.

# Entropy = less is good

# Information Gain: Decrease in entropy after making a split.
# Information Gain = Entropy(L) - Entropy(L, A)
#                    Parent Node - Child Nodes

# Information Gain = More is good

# Whole class summary:
# Gini less is good
# Entropy less is good
# Information Gain More is good

# Gain Ratio: Gain ratio is a scoring metric used in decision trees to choose the best feature for splitting data.
# It fixes a major flaw in regular information gain, which unfairly favors features with many unique values
# (like an ID number). It divides information gain by a penalty term called split information.
# Stops the tree from picking useless features that split data into too many tiny, unique groups.

# How It Works
# Information Gain: Measures how much a feature reduces uncertainty or messiness (entropy) in the data.
# Split Information: Measures how broadly and evenly a feature splits the data into different branches.
# The Formula: Gain Ratio = Information Gain/Split Information
# The Result: If a feature creates too many messy or small branches, its split information goes up, which
# forces the overall gain ratio score down.
