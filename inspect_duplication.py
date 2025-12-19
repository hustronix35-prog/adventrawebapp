import re

file_path = r"d:\adventra web app\blog.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Search for the specific corrupted text
target = "Trailblazers’ Escape: Huthri"
pos = content.find(target)

if pos != -1:
    print(f"Found target at {pos}")
    # Print context
    start = max(0, pos - 200)
    end = min(len(content), pos + 400)
    snippet = content[start:end]
    print("Snippet:")
    print(snippet)
    print("-" * 20)
    print(repr(snippet)) # Print repr to see newlines and hidden chars
else:
    print("Target not found.")
