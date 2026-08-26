# 31st July, 2026
# Learned Overfitting and Solutions to Overfitting

# Review of what we learned yesterday

# Overfitting: the problem occurs when the training model learns the training data too well (memorize
# training - good accuracy
# testing - fail

# Why overfitting happens?
# 1. If the model is too complex
# 2. If we have very few training data -- these models are data hungry
# 3. Quality Data - Noisy Data
# 4. Training Parameters

# In decision tree, overfitting happens when a decision tree grows too deep and creates only specific rules to memorize
# random noise or outliers in the training data rather than learning true general patterns.

# Overfitting - gap between training and test accuracy is more, then overfitting occurs

'''
    "Data-hungry" describes a system, software, or process that needs a massive amount of information to work, learn, 
    or perform accurately. It means the tool cannot function well on small amounts of input and constantly requires 
    more data to improve or train.
    
    "AI Hallucination" a phenomenon where a model generates false, misleading, or completely fabricated information 
    while presenting it as absolute fact. Common forms include fake academic citations, incorrect math solutions, 
    and invented historical events.
'''

# For overfitting solution in Decision Trees:
# 1. Regularization Technique: Regularization is a solution to overfitting or method to reduce overfitting
        # a. Early Stopping : stops the tree after the given depth. e.g. if depth = 4, after 4th depth, stop
        # b. Pruning: grow the tree, then remove the weakest link from the tree and we get a final tree