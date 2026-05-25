# The main difference between sort() and sorted() in Python lies in whether they modify the original data or create a new copy [2, 13].
# Key Comparison
# Feature 	list.sort() (Method)	sorted() (Built-in Function)
# Action	Modifies the original list in-place [2, 13].	Returns a new sorted list; leaves original unchanged [13, 17].
# Return Value	Always returns None [13, 18].	Returns the new sorted list [2, 40].
# Object Type	Works only on lists [11, 43].	Works on any iterable (strings, tuples, sets, etc.) [13, 28].
# Memory	More memory-efficient (no copy made) [11, 12].	Higher memory usage (creates a new list) [11, 12].
# Syntax	my_list.sort(key=..., reverse=...) [43]	sorted(iterable, key=..., reverse=...) [28, 43]