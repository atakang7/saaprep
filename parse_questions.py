import json
import re
import os

ditectrev_questions = []
if os.path.exists('Ditectrev_710_questions.md'):
    with open('Ditectrev_710_questions.md', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # The questions start after "### "
    # But wait, there might be other things with ###
    blocks = content.split('### ')
    for idx, block in enumerate(blocks[1:]): # skip first split part
        lines = block.strip().split('\n')
        question_text = lines[0].strip()
        
        # some blocks might not be questions
        if 'Back to Top' not in block:
            continue

        options = []
        answer = None
        for line in lines[1:]:
            line_s = line.strip()
            if line_s.startswith('- ['):
                is_correct = '[x]' in line_s or '[X]' in line_s
                opt_text = re.sub(r'^- \[[ xX]\] ', '', line_s).strip()
                options.append(opt_text)
                if is_correct:
                    answer = opt_text
        
        q_id = f"ditectrev_{len(ditectrev_questions)+1:03d}"
        ditectrev_questions.append({
            "id": q_id,
            "question": question_text,
            "options": options,
            "answer": answer,
            "source": "Ditectrev_710_questions.md"
        })

supp_questions = []
if os.path.exists('Original_Supplemental_320.md'):
    with open('Original_Supplemental_320.md', 'r', encoding='utf-8') as f:
        content = f.read()
        
    blocks = content.split('## Question ')
    for idx, block in enumerate(blocks[1:]):
        lines = block.strip().split('\n')
        question_text = ""
        options = []
        answer = ""
        explanation = ""
        
        mode = "question"
        
        for line in lines[1:]:
            line_s = line.strip()
            if not line_s:
                continue
                
            if line_s.startswith('A. ') or line_s.startswith('B. ') or line_s.startswith('C. ') or line_s.startswith('D. '):
                mode = "options"
                options.append(line_s)
            elif line_s.startswith('**Answer:'):
                mode = "answer"
                answer = line_s.replace('**Answer:', '').replace('**', '').strip()
            elif line_s.startswith('**Explanation:**'):
                mode = "explanation"
                explanation = line_s.replace('**Explanation:**', '').strip()
            elif mode == "question":
                question_text += line + "\n"
            elif mode == "explanation":
                explanation += "\n" + line_s
                
        q_id = f"supplemental_{len(supp_questions)+1:03d}"
        supp_questions.append({
            "id": q_id,
            "question": question_text.strip(),
            "options": options,
            "answer": answer,
            "explanation": explanation.strip(),
            "source": "Original_Supplemental_320.md"
        })

fund_questions = []
if os.path.exists('01_AWS_Fundamentals.md'):
    with open('01_AWS_Fundamentals.md', 'r', encoding='utf-8') as f:
        content = f.read()
        
    blocks = content.split('### Question ')
    for idx, block in enumerate(blocks[1:]):
        lines = block.strip().split('\n')
        question_text = ""
        options = []
        answer = ""
        explanation = ""
        references = ""
        
        mode = "question"
        
        for line in lines[1:]:
            line_s = line.strip()
            if not line_s or line_s.startswith('<details>') or line_s.startswith('</details>') or line_s.startswith('<summary>'):
                continue
                
            if line_s.startswith('A. ') or line_s.startswith('B. ') or line_s.startswith('C. ') or line_s.startswith('D. ') or line_s.startswith('E. '):
                mode = "options"
                options.append(line_s)
            elif line_s.startswith('**Answer:'):
                mode = "answer"
                answer = line_s.replace('**Answer:', '').replace('**', '').strip()
            elif line_s.startswith('**Explanation:**'):
                mode = "explanation"
            elif line_s.startswith('**References:**'):
                mode = "references"
                references = line_s.replace('**References:**', '').strip()
            elif mode == "question":
                question_text += line + "\n"
            elif mode == "explanation":
                explanation += line + "\n"
                
        q_id = f"fundamentals_{len(fund_questions)+1:03d}"
        fund_questions.append({
            "id": q_id,
            "question": question_text.strip(),
            "options": options,
            "answer": answer,
            "explanation": explanation.strip(),
            "references": references,
            "source": "01_AWS_Fundamentals.md"
        })

all_questions = ditectrev_questions + supp_questions + fund_questions

metadata_map = {}
if os.path.exists('taxonomy-classifications.json'):
    with open('taxonomy-classifications.json', 'r', encoding='utf-8') as f:
        classifications = json.load(f)
        for c in classifications:
            metadata_map[c['question_id']] = c

for q in all_questions:
    if q['id'] in metadata_map:
        q['metadata'] = metadata_map[q['id']]
    else:
        q['metadata'] = {}

with open('questions.json', 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, indent=2)

print(f"Parsed {len(ditectrev_questions)} Ditectrev questions.")
print(f"Parsed {len(supp_questions)} Supplemental questions.")
print(f"Parsed {len(fund_questions)} Fundamentals questions.")
print(f"Total questions written to questions.json: {len(all_questions)}")
