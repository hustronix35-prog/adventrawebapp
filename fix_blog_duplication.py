import re

file_path = r"d:\adventra web app\blog.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find duplicated text
# We look for: style="..." > TEXT "> TEXT
# The TEXT was duplicated because the previous regex matched past the tag end until a semicolon.
# The ">" in the middle is the artifact of the replacement.

# We use a capture group for the text and backreference it.
# We limit the style attribute part to be reasonably short to avoid backtracking issues.
# We also ensure TEXT is not empty.

pattern = re.compile(r'(style="[^"]+">)(\s*)(?P<text>[\s\S]+?)">\s*(?P=text)', re.IGNORECASE)

# We want to replace with \1\2\3 (style part + whitespace + text)
# effectively removing the ">" and the second copy of the text.

# Let's count matches first
matches = pattern.findall(content)
print(f"Found {len(matches)} duplication instances.")

if len(matches) > 0:
    new_content = pattern.sub(r'\1\2\3', content)
    
    # Verify we didn't lose anything important (size check?)
    # The new content should be smaller.
    print(f"Original size: {len(content)}, New size: {len(new_content)}")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed duplications.")
else:
    print("No duplications found with the pattern.")

# Also check for the data-image-info case if it needs cleanup
# data-image-info="{&quot;">
# We can replace it with data-image-info="{}" just to be cleaner, but it's not critical.
