<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>CByte</b> 04
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Peculiar Penguins: Aligning and Assessing Sequences
</h2>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP released</strong></a>: Feb 07, 2025 at 11:59 p.m.
    </object>
</p>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP expiration</strong></a>: Feb 21, 2025 by 11:59 p.m.
    </object>
    <object hspace="50">
        <strong>ATP possible</strong></a>: 80
    </object>
</p>

Surprisingly, the world settled into normalcy following the arrival of aliens, and even better yet, your new alien colleague advised you for your first publication!
However, there are some *questionable* consequences of this extra-terrestrial crossover.
The alien tech emits strange radiation, seemingly affecting nearby organisms.
A mothership that landed in Antarctica gave way to a peculiar population of penguins with strange traits.
It's research grant submission time, and getting to the bottom of this could be groundbreaking and rake in great funding -- your boss has put you on the team dedicated to figuring out what's going on.

By the end of this CByte, you will have gained understanding and experience with sequence alignment and subsequence searching methods.
Sequence alignment algorithms, such as the Smith-Waterman algorithm, are used in industry applications such as BLAST, providing a better understanding of tools computational biologists (and biologists in general!) use every day.

## Mutation Identification

**ATP possible:** 30

Boy is it chilly!
But being in the arctic hasn't been all that bad -- snow cones are far easier to make here than back home!
Anyways -- right now, you're stationed in a small encampment looking at "mildly changed" penguins, all who seem to be born with *wicked* mohawks.
Your team's MEGA-ALIGNER (patent no longer pending!) has gotten you sequences from the same positions of the same genes across regular and mohawked penguins.
Your task is to identify what mutation occurred between sequences, if any, in hopes of identifying what may be contributing to these mohawks.
Hopefully, you'll then get to the bottom of what that alien tech is doing.

Identifying mutations is a part of a vast amount of bioinformatic applications, ranging from screening for disease susceptibility, to finding one's ancestry.
Understanding the basic principles of identifying a mutation establishes a foundation to understand more complex implementations.

Your task is to implement the following function:

```python
def identify_mutation_and_effect(
    seq_a: str, seq_b: str, codon_to_aa: dict[str, str]
) -> tuple[str, bool]:
    """
    A function that identifies a mutation (if any) and amino acid translation differences
    (if any) between two sequences -- a target sequence, "seq_a", and a mutation of that
    sequence, "seq_b". An amino acid table for translation will be provided.

    You can ensure that the inputs will be valid nucleotide sequences differing by,
    at most, one base. You can ensure the amino acid table will be exhaustive, including
    all codons.

    Args:
        seq_a: A string, representing a target sequence.
        seq_b: A string, representing a potential mutation of that sequence.
        codon_to_aa: A dictionary mapping strings to string, where keys
        represent codons, and values represent amino acid 3-letter identifiers.

    Returns:
        - A tuple of a string, representing the mutation type, and a boolean,
        representing where amino acid translation differs between the two sequences.

    Example:

    codon_table = {
    "UUU": "Phe", "UUC": "Phe", "UUA": "Leu", "UUG": "Leu",
    "CUU": "Leu", "CUC": "Leu", "CUA": "Leu", "CUG": "Leu",
    "AUU": "Ile", "AUC": "Ile", "AUA": "Ile", "AUG": "Met",
    "GUU": "Val", "GUC": "Val", "GUA": "Val", "GUG": "Val",
    "UCU": "Ser", "UCC": "Ser", "UCA": "Ser", "UCG": "Ser",
    "CCU": "Pro", "CCC": "Pro", "CCA": "Pro", "CCG": "Pro",
    "ACU": "Thr", "ACC": "Thr", "ACA": "Thr", "ACG": "Thr",
    "GCU": "Ala", "GCC": "Ala", "GCA": "Ala", "GCG": "Ala",
    "UAU": "Tyr", "UAC": "Tyr", "UAA": "Stop", "UAG": "Stop",
    "UGA": "Stop", "CAU": "His", "CAC": "His", "CAA": "Gln",
    "CAG": "Gln", "AAU": "Asn", "AAC": "Asn", "AAA": "Lys",
    "AAG": "Lys", "GAU": "Asp", "GAC": "Asp", "GAA": "Glu",
    "GAG": "Glu", "UGU": "Cys", "UGC": "Cys", "UGG": "Trp",
    "CGU": "Arg", "CGC": "Arg", "CGA": "Arg", "CGG": "Arg",
    "AGU": "Ser", "AGC": "Ser", "AGA": "Arg", "AGG": "Arg",
    "GGU": "Gly", "GGC": "Gly", "GGA": "Gly", "GGG": "Gly"
    }

    seq_a = "AACUGAUAGCUGGAGU"
    seq_b = "AACUGAUAAGCUGGAGU"

    Output: ('INSERTION', True)
    """
    # The list of mutation types that will be evaluated.
    mutation_types = ["SUBSTITUTION", "INSERTION", "DELETION", "NONE"]

    # Placeholder variables for the identified mutation type, and if the AA would change.
    mutation_type = ""
    bool_change_aa = False

    # TODO: Given the two sequences, identify (relative to "seq_a") the type of mutation, and whether this would lead to a change in amino acid. Use the inputted codon-AA chart.
    pass

    return (mutation_type, bool_change_aa)
```

## Smith-Waterman Alignment

**ATP possible:** 50

The sub-zero temperatures have taken their toll, and while all the live members of your crew are alive and kicking, other artifical personnel have succumbed to the environment.
Your MEGA-ALIGNER has completely frozen.
You're no longer able to align and find sequences.
As the only member who understands what goes into genome alignment, it's your job to MacGruber -- I mean MacGyver -- a system to act in the MEGA-ALIGNER's place.
Thankfully, you remember that local alignment is a good starting point for identifying mutations, and you know just the algorithm that could help -- Smith-Waterman.

The Smith-Waterman algorithm for local alignment is a great, adjustable means of aligning two sequences -- derivatives of this algorithm are used in industry applications, such as BLAST.

Your task is to implement the following function:

```python
def sw_local_alignment(
    seq_a: str, seq_b: str, match_score: int, mismatch_score: int, gap_score: int
) -> tuple[str, str]:
    """
    A function to identify the highest-scoring Smith-Waterman local alignment between
    two inputted sequences, "seq_a" and "seq_b", given the Smith-Waterman parameters
    for the match score increase ("match_score"), mismatch score penalty ("mismatch_score"),
    and the linear gap penalty ("gap_score").

    Args:
        seq_a: A string, representing a nucleotide sequence.
        seq_b: A string, representing a nucleotide sequence.

    Returns:
        - A tuple of two strings, with each representing the locally aligned region of the
        inputted sequences.

    Example:

    seq_a = "ACTACTAGGAGCTAG"
    seq_b = "GCTGACAACGTG"
    match_score = 2
    mismatch_score = -2
    gap_score = -2

    Output: ('CT-AC', 'CTGAC')
    """
    # A tuple to hold the locally aligned subsequences of the input sequences.
    best_local_alignment: tuple[str, str] = (None, None)

    # TODO: Implement the Smith-Waterman algorithm for local alignment, outputting the aligned segment of both sequences, in alphabetical order. Use '-' to denote a gap.

    return best_local_alignment
```
