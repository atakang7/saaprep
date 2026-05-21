#!/usr/bin/env python3
"""
SAA-C03 Drill Runner
Loads questions from JSON files, presents them one at a time,
waits for your answer, then reveals reasoning.

Usage:
  python drill.py                    # all layers, random order
  python drill.py --layer 4          # only layer 4 (database)
  python drill.py --layer 0 1 2      # layers 0, 1, 2 in sequence
  python drill.py --difficulty hard   # only hard questions
  python drill.py --missed           # only previously missed questions
"""

import json
import os
import sys
import random
import argparse
from pathlib import Path

DRILL_DIR = Path(__file__).parent
MISSED_FILE = DRILL_DIR / "missed.json"

LAYER_NAMES = {
    0: "Network",
    1: "Access",
    2: "Storage",
    3: "Compute",
    4: "Database",
    5: "Communication",
    6: "Resilience",
    7: "Edge",
    8: "Cost",
    9: "Governance"
}

LAYER_FILES = {
    0: "layer-0-network.json",
    1: "layer-1-access.json",
    2: "layer-2-storage.json",
    3: "layer-3-compute.json",
    4: "layer-4-database.json",
    5: "layer-5-communication.json",
    6: "layer-6-resilience.json",
    7: "layer-7-edge.json",
    8: "layer-8-cost.json",
    9: "layer-9-governance.json"
}


def load_questions(layers=None, difficulty=None):
    """Load questions from JSON files, optionally filtered."""
    questions = []
    files_to_load = LAYER_FILES if layers is None else {k: v for k, v in LAYER_FILES.items() if k in layers}

    for layer_num, filename in files_to_load.items():
        filepath = DRILL_DIR / filename
        if filepath.exists():
            with open(filepath, "r") as f:
                data = json.load(f)
                for q in data:
                    if difficulty is None or q.get("difficulty") == difficulty:
                        questions.append(q)

    return questions


def load_missed():
    """Load IDs of previously missed questions."""
    if MISSED_FILE.exists():
        with open(MISSED_FILE, "r") as f:
            return set(json.load(f))
    return set()


def save_missed(missed_ids):
    """Save missed question IDs."""
    with open(MISSED_FILE, "w") as f:
        json.dump(sorted(list(missed_ids)), f, indent=2)


def present_question(q, num, total):
    """Display a question and wait for answer."""
    print(f"\n{'='*60}")
    print(f"  Question {num}/{total}  |  Layer {q['layer']} ({LAYER_NAMES.get(q['layer'], '?')})  |  {q['difficulty']}")
    print(f"  Trap: {q['trap_fact']}")
    print(f"{'='*60}\n")
    print(f"{q['scenario']}\n")
    print(f"{q['question']}\n")

    for letter, text in q["options"].items():
        print(f"  {letter}. {text}")

    print()
    answer = input("Your answer (A/B/C/D): ").strip().upper()
    return answer


def reveal(q, user_answer):
    """Show the answer and reasoning."""
    correct = q["answer"]
    is_correct = user_answer == correct

    print()
    if is_correct:
        print(f"  ✓ CORRECT — {correct}")
    else:
        print(f"  ✗ WRONG — you said {user_answer}, correct is {correct}")

    print(f"\n  REASONING:")
    print(f"  {q['reasoning']}")

    print(f"\n  ELIMINATIONS:")
    for letter, reason in q.get("eliminated", {}).items():
        marker = "→" if letter == user_answer and not is_correct else " "
        print(f"  {marker} {letter}: {reason}")

    print()
    return is_correct


def run_drill(questions, shuffle=True):
    """Run the drill session."""
    if shuffle:
        random.shuffle(questions)

    total = len(questions)
    correct_count = 0
    missed_ids = load_missed()
    session_missed = []

    print(f"\n{'#'*60}")
    print(f"  SAA-C03 DRILL — {total} questions loaded")
    print(f"{'#'*60}")

    for i, q in enumerate(questions, 1):
        try:
            user_answer = present_question(q, i, total)
            is_correct = reveal(q, user_answer)

            if is_correct:
                correct_count += 1
                missed_ids.discard(q["id"])
            else:
                missed_ids.add(q["id"])
                session_missed.append(q["id"])

            input("  [Enter to continue]")

        except KeyboardInterrupt:
            print("\n\n  Session ended early.")
            break

    # Summary
    print(f"\n{'='*60}")
    print(f"  SESSION COMPLETE: {correct_count}/{i} correct ({100*correct_count//max(i,1)}%)")
    if session_missed:
        print(f"  Missed: {', '.join(session_missed)}")
    print(f"{'='*60}\n")

    save_missed(missed_ids)


def main():
    parser = argparse.ArgumentParser(description="SAA-C03 Drill Runner")
    parser.add_argument("--layer", type=int, nargs="+", help="Layer number(s) to drill (0-9)")
    parser.add_argument("--difficulty", choices=["straightforward", "moderate", "hard"], help="Filter by difficulty")
    parser.add_argument("--missed", action="store_true", help="Only drill previously missed questions")
    parser.add_argument("--sequential", action="store_true", help="Don't shuffle, go in order")
    args = parser.parse_args()

    questions = load_questions(layers=args.layer, difficulty=args.difficulty)

    if args.missed:
        missed_ids = load_missed()
        questions = [q for q in questions if q["id"] in missed_ids]

    if not questions:
        print("No questions found matching filters.")
        print(f"Available layer files: {[f for f in LAYER_FILES.values() if (DRILL_DIR / f).exists()]}")
        sys.exit(1)

    run_drill(questions, shuffle=not args.sequential)


if __name__ == "__main__":
    main()
