import fitz
import sys

try:
    with open('secure_rules.txt', 'w', encoding='utf-8') as f:
        print("Opening White Paper...")
        doc1 = fitz.open('Secure Vibe Coding White Paper.pdf')
        for page in doc1:
            f.write(page.get_text())
        
        print("Opening Table...")
        f.write('\n\n--- TABLE.PDF ---\n\n')
        doc2 = fitz.open('table.pdf')
        for page in doc2:
            f.write(page.get_text())
            
    print("Done")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
