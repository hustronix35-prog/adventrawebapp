import re

file_path = r"d:\adventra web app\blog.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Optimized approach:
# Find locations of style="...line-clamp..." >
# Extract the text following it.
# Check if there is a ">" and then the same text.

# We'll use a loop with search to avoid complex regex backtracking.
start_pos = 0
fixed_count = 0
new_content_parts = []
last_pos = 0

# Regex to find the start of the potential duplication
# We look for style attribute containing line-clamp, ending with >
start_pattern = re.compile(r'style="[^"]*line-clamp[^"]*">', re.IGNORECASE)

while True:
    match = start_pattern.search(content, start_pos)
    if not match:
        break
    
    # Found a potential start
    # The text starts after match.end()
    # We need to find the next ">"
    # The text between match.end() and the next ">" is the candidate for duplication.
    
    candidate_start = match.end()
    # Find next ">"
    next_gt = content.find('">', candidate_start)
    
    if next_gt == -1:
        break # No more ">", can't be duplication
    
    # Candidate text
    candidate_text = content[candidate_start:next_gt]
    
    # Check if the text AFTER next_gt + 2 matches candidate_text
    # We need to be careful about whitespace, but the duplication should be exact (or close).
    # The previous regex matched `\s*` between ">" and text.
    
    following_text_start = next_gt + 2
    following_text_end = following_text_start + len(candidate_text)
    
    if following_text_end <= len(content):
        following_text = content[following_text_start:following_text_end]
        
        if candidate_text == following_text:
            # Found duplication!
            # We want to keep the style part, the candidate text, and remove the ">" and the second copy?
            # No, wait.
            # Structure: STYLE > TEXT "> TEXT
            # We want to keep STYLE > TEXT.
            # So we remove ">" and the second TEXT.
            # i.e. remove content[next_gt : following_text_end]
            
            # Append everything up to next_gt
            new_content_parts.append(content[last_pos:next_gt])
            
            # Skip the ">" and the duplicate text
            last_pos = following_text_end
            
            fixed_count += 1
            start_pos = following_text_end
            continue

    # If no match or not duplication, move on
    start_pos = match.end()

# Append the rest
new_content_parts.append(content[last_pos:])

new_content = "".join(new_content_parts)

if fixed_count > 0:
    print(f"Fixed {fixed_count} duplications.")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("No duplications found.")
