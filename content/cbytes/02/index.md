<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>CByte</b> 02
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Perplexing Pieces: Deciphering the Genome Puzzle
</h2>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP released</strong></a>: Jan 24, 2025 at 11:59 p.m.
    </object>
</p>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP expiration</strong></a>: Feb 7, 2025 by 11:59 p.m.
    </object>
    <object hspace="50">
        <strong>ATP possible</strong></a>: 100
    </object>
</p>

Your new position in your research lab has been going swimmingly! With your help in cleaning and deciphering your genomic data, your lab can finally progress to genome assembly.
However, there's a big issue.
An electrical surge has rendered your lab's Sequence-Stick-Together-O-Matic (SSTOM) (patent pending) useless.
However, with your trusty computing device and the cryptic SSTOM guide, you'll be able to develop what is needed to get genome assembly started.
Your role is to implement computational tools to understand and piece together fragments from a sequencing run.

By the end of this CByte, you will have gained experience with methods utilized for genome assembly, along with string manipulations, 1-D list operations, and 2-D list operations.

## Finding Overlaps

**ATP possible:** 20

The beginning of the STOM guide starts with foundational principles of genome assembly -- while the technical language is a bit difficult to decipher (how old *was* the SSTOM in the first place?), your lab mentor does their best to help out.
Sequence fragment overlaps seems to be the key to starting with genome assembly!

Your task is to write a Python script that, given a nucleotide sequence, finds the sequence with the highest overlap within a list of sequences.
Many genome assembly methods rely on sequence overlap in order to create potential contigs within a prospective genome, with this being able to be modeled by overlap of Python strings.

Your task is to implement the following two functions:

```python
def return_overlap_between_seq(seq_a: str, seq_b: str) -> tuple[str, int]:
    """
    A function to find the overlap between two input strings.
    This overlap must be without reversing any of the strings.
    Ties for overlap should be settled alphabetically.
    This overlap must be a hanging overlap (i.e., a prefix or suffix overlap),
    or an "absorption" overlap (one string being contained within another).

    You can assume that inputs for testing will be valid Python strings
    representing nucleotide sequences.

    Args:
        seq_a: A string representing a nucleotide sequence.
        seq_b: A string representing a nucleotide sequence.

    Returns:
        A string, representing the overlapped portion of the strings, given the
            specifications.
        An int, representing the overlap between the two provided strings, given the
            specifications.
    """
    # Placeholder for final overlap amount
    overlap: str = ""
    overlap_amount: int = 0

    # TODO: Find the overlap between these sequences.
    pass

    return overlap, overlap_amount
```

```python
def find_highest_overlap_seq(
    seq_target: str, seq_list: list[str]
) -> tuple[str, int, int]:
    """
    A function to find the highest overlap string, overlap, and overlap amount
    between a target string and strings within a list. Any ties are broken
    alphabetically. Consider the possibility of repeat fragments in "seq_list".

    You can assume that inputs for testing will be valid Python strings
    representing nucleotide sequences, and lists of said strings.

    Args:
        seq_target: A string representing a nucleotide sequence.
            This is what other strings are compared to for overlap.
        seq_list: A list of strings representing nucleotide sequences.
            These are compared to "seq_target".

    Returns:
        - The string with the highest overlap with the target string
        - A string representing the region of overlap
        - The overlap amount between the string and the target string
    """
    # Placeholder for most overlap sequence and final overlap amount
    highest_overlap_seq: str = ""
    overlap: str = ""
    overlap_amount: int = 0

    # TODO: Find the sequence within "seq_list" that has the highest overlap with "seq_target" and report the overlap amount. (Hint!: You can use your above function!)
    pass

    return highest_overlap_seq, overlap, overlap_amount
```

## Greedy Assembly

**ATP possible:** 30

Your lab mentor quickly flips through pages before emphatically stopping at a section titled "Greedy Assembly". The procedure seems relatively straightforward, and surely has no caveats associated with resolving repeats in a genome at all!

Your task is to write a Python script that, given a list of sequence fragments, generates a genome assembly by following the greedy assembly algorithm. All ties should be settled alphabetically, and in the case of no overlap, sequences should be left unmerged and returned from the function (is this too specific?).

Your task is to implement the following function:

```python
def greedy_assembly(seq_list: list[str]) -> list[str]:
    """
    A function to assemble a list of strings, representing sequence fragments,
    into one continuous string, utilizing the greedy algorithm of genome assembly.
    Any overlap ties are broken alphabetically, and cases of no overlap results in
    unmerged sequences/contigs that are returned from the function.

    You can assume that inputs for testing will be valid list of Python strings
    representing nucleotide sequences.

    Args:
        seq_list: A list of strings, representing a collection of sequence fragments.

    Returns:
        - A list of strings, representing contigs in a genome.
    """
    # Placeholder for the final assembled sequence
    assembled_seqs: list[str] = []

    # TODO: Implement the greedy algorithm for genome assembly given the above specifications
    # and return the final assembled sequence.
    pass

    return assembled_seqs
```

## K-mer Creation

**ATP possible:** 50

While for a very small genome results seemed fine, when checking your assembled genome results against a very long reference genome, you and your lab mentor see large inaccuracies.
Turns out, all of those pages your lab mentor flipped past contained the words "Old", "Inaccurate Method", and "Defunct".
Who would have thought! Anyways, further into the SSTOM guide is newer material -- apparently, new-fangled k-mer-based methods are all the rage due to their ability to help resolve repeats and inaccurate base calls.

Your task is to write a Python script that, given a list of sequence fragments and an input size for k-mers, generates a matrix containing k-mer transition information.
By knowing which k-mers lead to others, you can build graph-like representations of your k-mers, aiding in genome assembly.
This is seen in genome assembly applications like SPAdes.

Your task is to implement the following two functions:

```python
def return_inorder_kmers(seq: str, k: int) -> list[str]:
    """
    A function to return a list of strings, representing the k-mers of size "k",
    that can be made from "seq". The list should be in order relative to their
    position in "seq". Duplicates are allowed.

    You can assume that inputs for testing will be valid Python strings
    representing nucleotide sequences, and integers <= 10.

    Args:
        seq: A sequence to separate into k-mers.
        k: The size for each k-mer.

    Returns:
        - A list of strings, representing the k-mers, generated from the input string.
    """
    kmers: list[str] = []

    # TODO: Separate the input string into k-mers. Order the k-mers by their position in the
    # input string.
    pass

    return(kmers)
```

```python
def return_kmer_matrix(seq_list: list[str], k: int) -> list[list[int]]:
    """
    A function that returns a list of lists of integers (a 2-D matrix),
    representing the number of transitions from the row k-mer to the column
    k-mer across all sequence fragments in "seq_list".
    
    Each row corresponds with a k-mer generated from the above sequence list,
    in alphabetical order. Each column corresponds with a k-mer generated from
    the above sequence, in alphabetical order. Each row-column intersection
    represents the number of times the row k-mer transitions to the column k-mer
    across all sequences in the sequence list.

    Args:
        - seq_list: A list of strings representing a collection of sequence fragments.
        - k: The size for each k-mer.

    Returns:
        - A list of lists of integers, representing the number of transitions
            from the row k-mer to the column k-mer across all sequence fragments
            in "seq_list".
    """
    kmer_transition_matrix: list[list[int]] = []

    # TODO: Find all k-mers across the provided sequences, and create a 2D matrix as
    # specified above.
    pass

    return(kmer_transition_matrix)
```
