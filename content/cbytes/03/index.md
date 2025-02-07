<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>CByte</b> 03
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Getting Great Genes 👖
</h2>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP released</strong></a>: Jan 31, 2025 at 11:59 p.m.
    </object>
</p>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP expiration</strong></a>: Feb 14, 2025 by 11:59 p.m.
    </object>
    <object hspace="50">
        <strong>ATP possible</strong></a>: 100
    </object>
</p>

Ahhh! Relaxation! After assembling that genome, your life has been going pretty great&mdash;nothing like a day at the beach, a view of the waves, and a&ndash; wait.
What's that?
Is that a UFO?

*ring ring*

*ring ring*

My lab mentor? What could this be?

*click!*

*murmur murmur*

Uh-huh.
Yeah.
UFO&mdash;yeah I see it right now.

*murmur murmur*

Alien jeans? Oh, you mean genes! What about them?

*murmur murmur*

We have to find them? Aww man.
There goes my vacation!

By the end of this CByte, you will have gained experience with methods utilized for gene identification/annotation, including familiarizing yourself with concepts such as open reading frames, and how features of a gene can be analyzed.

## Finding Open Reading Frames (ORFs)

**ATP possible:** 20

Dealing with these alien genomes shouldn't be too bad!
You remember from your lecture that open reading frames are the key to finding genes&mdash;while not every one *is* a gene, a gene will certainly be one of them!
Your lab mentor agrees, and thankfully, they've gotten their hands on some of the alien start and stop codons!
Things should be smooth sailing from here.

Finding open reading frames is oftentimes the first step in gene identification in practice.
Without open reading frames, computational biologists do not have candidate genes to evaluate.

Your task is to implement the following function:

```python
def return_open_reading_frames(
    seq: str, start_codons: list[str], stop_codons: list[str]
) -> list[str]:
    """
    A function that returns all open reading frames found within the sequence "seq". Consider what would
    happen if, from a start codon, there are two valid stop codons&mdash;what would happen in the cell?

    You can ensure that the input will be a string representing a valid nucleotide sequence, and input formatting
    will be abided by.

    Args:
        seq: A string, representing a nucleotide sequence.
        start_codons: A list of strings representing start codons to search for.
        stop_codons: A list of strings representing stop codons to search for.

    Returns:
        - A list of tuples of strings and integers, representing the found open reading frames
          and their starting indices.

    Example:
        seq = "ATGAAACCCGGGTTTTAAGGGAATGCGTACGATGTAG"
        start_codons = ["ATG"]
        stop_codons = ["TAA", "TAG", "TGA"]
        output: [('ATGAAACCCGGGTTTTAA', 0), ('ATGCGTACGATGTAG', 22), ('ATGTAG', 31)]
    """

    orfs: list[tuple[str, int]] = []

    # TODO: Using the provided start/stop codons, identify and return all potential open reading frames.
    pass

    return orfs
```

## Coding Scores

**ATP possible:** 30

Now that you have all of those ORFs, you lab mentor has devised a *devilish* plan that has never been before seen (ever! trust me!)&mdash;you're going to score them.
And get this! You're not only going to score them, young undergrad, but you're going to score them based on hexamers!
These are k-mers, but of size 6&mdash;you oftentimes see patterns of hexamers in genes, which means we can use them to clue in to what might be an actual gene in this extra-terrestrial problem.

In practice, this is called a "coding score", and is used in real gene identification software.

Your task is to implement the following function:

```python
def score_orf_coding(
    seq: str,
    start_codons: list[str],
    stop_codons: list[str],
    hexamer_scores: dict[str, int],
) -> tuple[str, int]:
    """
    A function that identifies the highest-scoring open reading frame (ORF) in a nucleotide sequence
    based on coding scores. Each ORF is divided into hexamers (six-nucleotide sequences), stepping
    over one codon at a time. The hexamer scores are summed to determine the coding score for an ORF.
    The highest scoring ORF is returned, with ties broken alphabetically.

    You can ensure that the input will be a string representing a valid nucleotide sequence, and input formatting
    will be abided by.

    Args:
        seq: A string representing a nucleotide sequence.
        start_codons: A list of strings representing start codons to search for.
        stop_codons: A list of strings representing stop codons to search for.
        hexamer_scores: A dictionary mapping hexamer sequences (6-mers) to point values.

    Returns:
        - A tuple of a string and integer, representing the highest scoring open reading frame
          and its starting indices.

    Example:
        seq = "ATGAAACCCGGGTTTTAAGGGAATGCGTACGATGTAG"
        start_codons = ["ATG"]
        stop_codons = ["TAA", "TAG", "TGA"]
        hexamer_scores = {
            "ATGAAA": 5, "AAACCC": 2, "CCCGGG": 3, "GGGTTT": 1,
            "TTTAAA": 4, "ATGCGT": 3, "CGTACG": 2, "TACGAT": 2,
            "GATGTA": 5, "ATGTAG": 6
        }
        output: ('ATGAAACCCGGGTTTTAA', 0, 11)
    """
    best_orf = (None, None)

    # TODO: Using the inputted start/stop codons and hexamer scores, return the highest scoring ORF and its start index.
    pass

    return(best_orf)
```

## Rules From Out of this World!

**ATP possible:** 50

Turns out, the aliens weren't even that bad! In fact, one of the aliens&mdash;err, I mean, one of your new colleagues&mdash;was proficient in Python, and is now a part of your lab!
In talking with them, you find out a ton of interesting things&mdash;they're an Eagles fan (do they even get cable on their planet?), they make a mean risotto, they actually know of additional scoring methods for genes, they've always dreamed of becoming an acto- wait a second, what was that last one? Additional scoring methods?
Aww man!

While coding scores are useful, gene identification in practice is the culmination of a multitude of scores.
Genes (and their surrounding regions) have a variety of patterns and traits that can be identified, letting us use those same patterns and traits to identify genes from a collection of ORFs.

Your task is to implement the following function:

```python
def score_orf(
    seq: str,
    start_codons: list[str],
    stop_codons: list[str],
    hexamer_scores: dict[str, int],
    rbs_scores: dict[tuple[str, int], int],  # this is the upstream score
    gc_content_scores: dict[tuple[int, int], int],
) -> str:
    """
    A function that identifies the highest-scoring open reading frame (ORF) in a nucleotide sequence
    based on coding score, ribosome binding site (RBS) score, and GC content score. Each ORF is divided into
    hexamers (six-nucleotide sequences), stepping over one codon at a time. Hexamer, RBS, and GC content
    scores are summed to determine the final score for an ORF. The highest scoring ORF is returned, with ties
    broken alphabetically.

    You can ensure that the input will be a string representing a valid nucleotide sequence, and input formatting
    will be abided by.

    Args:
        seq: A string representing a nucleotide sequence.
        start_codons: A list of strings representing start codons to search for.
        stop_codons: A list of strings representing stop codons to search for.
        hexamer_scores: A dictionary mapping hexamer sequences (6-mers) to point values.
        rbs_scores: A dictionary mapping tuples of strings (representing RBSs) and
            integers (representing the number of bases upstream for the
            start of the RBS) to point values. Upstream values will be a
            minimum of 3.
        gc_content_scores: A dictionary mapping tuples of integers (representing ranges
            of GC composition percentage) to point values. Consider the
            ranges, boundary inclusive. There will be no overlapping ranges
            (i.e., no repeat of any start or stop in the dictionary).

    Returns:
        - A tuple of a string and integer, representing the highest scoring open reading frame
          and its starting indices.

    Example:
        sequence = "ATGAAACCCGGGTTTTAAGGGAATGCGTACGATGTAG"
        start_codons = ["ATG"]
        stop_codons = ["TAA", "TAG", "TGA"]
        hexamer_scores = {
            "ATGAAA": 5, "AAACCC": 2, "CCCGGG": 3, "GGGTTT": 1,
            "TTTAAA": 4, "ATGCGT": 3, "CGTACG": 2, "TACGAT": 2,
            "GATGTA": 5, "ATGTAG": 6
        }
        rbs_scores = {
            ("GGA", 3): 2,
            ("AAA", 4): 1,
            ("TTT", 6): 3
        }
        gc_content_scores = {
            (0, 40): 1,
            (41, 60): 2,
            (61, 80): 3,
            (81, 100): 4
        }
        output: ('ATGCGTACGATGTAG', 22, 15)
    """
    best_orf = (None, None)

    # TODO: Using the inputted start/stop codons, hexamer scores, RBS scores, and
    # GC content scores, return the highest scoring ORF and its start index.
    pass

    return(best_orf)
```
