# import random
# print(random.random() * 100)
# print(random.randint(10,100))
import random
from os import PRIO_USER

# import random
# random_num = random.randint(0,20)
# print(random_num)
# count = 0
#
# while True:
#     count += 1
#     user_guess = int(input("Guess the number: "))
#     if user_guess == random_num:
#         print(f"Number Guess Successfully, You guessed in {count} trials")
#         break
#     else:
#         print("Try Again !!!")

# Working more on above game
# import random
# games_played = 0
#
# while True:
#     random_num = random.randint(0, 20)
#     print(random_num)
#     games_played += 1
#     count = 0
#
#     while True:
#         count += 1
#         user_guess = int(input("Guess the number: "))
#         if user_guess == random_num:
#             print(f"Number Guess Successfully, You guessed in {count} trials")
#             break
#
#         else:
#             if user_guess > random_num:
#                 print("Number is lower")
#             else:
#                 print("Number is higher")
#
#     play_again = input("Do you want to play again? (Y/N)").lower()
#
#     if play_again != "y":
#         break
# print(f"You played the game {games_played} times, Thank you for playing")

# rock scissor game
# data = ["r", "p", "s"]
# computer = random.choice(data)
#
# while True:
#     user_guess = input("Guess r (rock), p (paper), s (scissors): ").lower()
#
#     if user_guess not in data:
#         print("Invalid Input")
#         continue
#
#     if computer == user_guess:
#         print("Tie")
#     elif (user_guess == "r" and computer == "s") or (user_guess == "p" and computer == "r") or (user_guess == "s" and computer == "p"):
#         print("You win")
#     else:
#         print("Computer wins")
#
#     print("Computer guessed: ", computer)
#
#     play = input("Play again? (y/n): ").lower()
#     if play != "y":
#         break
#
# print("Game over")

# Some task for the above game
# 🔹 1. Fix a hidden bug (important)
#
# Right now computer is chosen once only (outside loop).
# 👉 Move it inside the loop so it changes every round.
#
# 🔹 2. Show full names instead of r/p/s
# r → Rock
# p → Paper
# s → Scissors
#
# 👉 Output like:
#
# Computer chose: Rock
# 🔹 3. Add score tracking
#
# Keep track of:
#
# User score
# Computer score
#
# 👉 Example:
#
# Score → You: 2 | Computer: 3
# 🔹 4. Play best of 3 (or 5)
#
# Game ends when someone wins 2 out of 3.
#
# 👉 Logic idea:
#
# Loop until one score reaches 2
# 🔹 5. Add round counter
# Round 1
# Round 2
# 🔹 6. Add emoji (fun + UI improvement)
# Rock → 🪨
# Paper → 📄
# Scissors → ✂️
# 🔹 7. Add input shortcut + full word support
#
# Allow:
#
# r, rock, R → all valid
# 🔹 8. Prevent invalid replay input
#
# Right now anything except "y" exits.
#
# 👉 Improve:
#
# Enter only y or n
# 🔹 9. Add delay (more game-like feel)
# import time
# time.sleep(1)
# print("Computer is choosing...")
# 🔹 10. Show result summary at end
# Final Result:
# You: 3
# Computer: 2
# Winner: You 🎉
# 🔹 11. Make computer “smart” (slightly advanced)
#
# Track user moves and predict:
#
# If user picks "r" often → computer picks "p"
# 🔹 12. Convert logic into functions (VERY important step)
#
# Example:
#
# def get_winner(user, computer):
#     ...
#
# 👉 This builds real programming skill.
#
# 🔹 13. Add difficulty levels (advanced)
# Easy → random
# Hard → tries to beat user
# 🔹 14. Turn it into a GUI (future goal)
#
# Use:
#
# tkinter (simple)
# or pygame
# Best order to practice:
#
# Start with:
# 1 → 2 → 3 → 5 → 4 → 12 → 10 → 11

# advanced rock scissor game
data = ["r", "p", "s"]
names = {"r": "Rock", "p": "Paper", "s": "Scissors"}

while True:
    user_score = 0
    computer_score = 0
    round_no = 0

    print("*** New Game Started (Best of 3) ***")

    while user_score < 2 and computer_score < 2:
        round_no += 1
        print("Round", round_no)

        computer_guess = random.choice(data)
        user_guess = input("Guess r (rock), p (paper), s (scissors): ").lower()

        if user_guess not in data:
            print("Invalid Input")
            continue

        if computer_guess == user_guess:
            print("It's a Tie!")
        elif (user_guess == "r" and computer_guess == "s") or (user_guess == "p" and computer_guess == "r") or (
                user_guess == "s" and computer_guess == "p"):
            user_score += 1
            print("You win this round")
        else:
            computer_score += 1
            print("Computer wins this round")

        print("Computer guessed: ", names[computer_guess])
        print("You guessed: ", names[user_guess])

    print("*** Final Result ***")
    if user_score > computer_score:
        print("🎉 You won the game")
    else:
        print("💻 Computer won the game")

    # replay option with validation
    while True:
        play = input("Play again? (y/n): ").lower()
        if "play" in ["y", "n"]:
            break
        print("Please, enter only 'y' or 'n'.")

    if play == "n":
        print("Game Over. Thanks for playing!")
        break

