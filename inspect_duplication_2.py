import re

file_path = r"d:\adventra web app\blog.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Search for the specific corrupted style
target = 'style="-webkit-line-clamp: 3">'
pos = content.find(target)

if pos != -1:
    print(f"Found target at {pos}")
    # Print context
    start = max(0, pos - 50)
    end = min(len(content), pos + 600)
    snippet = content[start:end]
    print("Snippet:")
    print(repr(snippet))
else:
    print("Target not found.")
