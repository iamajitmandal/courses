# 6th August, 2026
# Learned Bias, Variance, Bias-Variance TradeOff & Intro of Ensemble Learning (Theory)

# Revising what we learned
# Cosine Similarity
# user-item matrix(utility matrix)
# Sparse Matrix

# Why recommendation uses CSR?
# CSR:
# In recommendation systems, CSR has two major meanings depending on the context:
# Compressed Sparse Row (a data structure for handling massive user-item interaction matrices efficiently)
# or Cross-System/Cross-Domain Recommendation (transferring knowledge across platforms to fix data sparsity).

# Recommendation systems use Compressed Sparse Row (CSR) format to efficiently handle user-item interaction matrices,
# which are typically massive and mostly empty (sparse) because any single user only interacts with a tiny fraction
# of available items. By storing only the non-zero ratings or interactions, CSR dramatically reduces memory
# consumption and speeds up mathematical computations like matrix factorization and similarity queries.

# KNN Workflow: (for Movie Recommendation System)
'''
    1. Ratings dataset
    2. user-movie matrix
    3. Convert to CSR matrix (CSR -> Compressed Sparse Row)
    4. Store only non-zero ratings
    5. Cosine Similarity
    6. Select 'K' nearest neighbours
    7. Recommend Similar Movies
'''
from idlelib.configdialog import HighPage
from importlib.metadata import SimplePath
from statistics import pvariance

# For UI:
# Streamlit
# Gradio
# FastAPI -> flask
# Hugging Face

# Learning Bias & Variance:

# Bias: error caused by overly simple assumptions
# High Bias : Model is too simple to capture the relationship
# e.g. students learned only 2 page from 100 page -> means high bias

# Variance: measures how much predictions change if the training data changes,
# High Variance - if small changes in the data causes large changes in predictions.
# e.g. Student 'B' memorizes all past questions, but in the exam, new questions (unseen questions) came,
#      he/she fails to perform in the exam


# Bias Variance Tradeoff:
# Neither high bias nor high variance is preferred by itself. You want low bias and low variance.
# High bias causes underfitting (missing patterns), while high variance causes overfitting (learning noise).

# Total Error: comes from Bias, Variance, & Noise(Irreducible Error)
'''
    Model               Bias                Variance
    Simple              High                Low
    Very Complex        Low                 High
    Medium              Moderate            Moderate
    
    Total Error = Bias (square) + Variance + Irreducible error
'''

# Ensemble Learning: Wisdom of Crowd: If we combine multiple models





