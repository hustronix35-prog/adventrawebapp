import re

file_path = r"d:\adventra web app\blog.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_pattern = re.compile(r'style="[^"]*line-clamp[^"]*">', re.IGNORECASE)
start_pos = 0

print("Scanning for duplications...")

while True:
    match = start_pattern.search(content, start_pos)
    if not match:
        break
    
    candidate_start = match.end()
    next_gt = content.find('">', candidate_start)
    
    if next_gt == -1:
        break
    
    candidate_text = content[candidate_start:next_gt]
    
    # Debug: print candidate text length and snippet
    print(f"Found candidate at {candidate_start}, length {len(candidate_text)}")
    print(f"Snippet: {candidate_text[:50]} ... {candidate_text[-20:]}")
    
    following_text_start = next_gt + 2
    following_text_end = following_text_start + len(candidate_text)
    
    if following_text_end <= len(content):
        following_text = content[following_text_start:following_text_end]
        
        print(f"Comparing with text at {following_text_start}")
        print(f"Snippet: {following_text[:50]} ... {following_text[-20:]}")
        
        if candidate_text == following_text:
            print("MATCH FOUND!")
        else:
            print("NO MATCH.")
            # Show diff
            for i in range(min(len(candidate_text), len(following_text))):
                if candidate_text[i] != following_text[i]:
                    print(f"Diff at index {i}: '{candidate_text[i]}' vs '{following_text[i]}'")
                    print(f"Context: {candidate_text[max(0, i-10):i+10]}")
                    break
    
    start_pos = match.end()
    # Limit debug output
    if start_pos > 200000: # Check first few occurrences
        break
