<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>CByte</b> 05
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Playing Genetic "Where's Gene-do?"
</h2>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP released</strong></a>: Feb 14, 2025 at 11:59 p.m. -- Happy Valentine's Day!
    </object>
</p>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP expiration</strong></a>: Feb 28, 2025 by 11:59 p.m.
    </object>
    <object hspace="50">
        <strong>ATP possible</strong></a>: 100
    </object>
</p>

Your time in the arctic has been going freezingly!
Through immense hard work and dedication, your team believes they were able to identify a gene that, when expressed, increases an organism's susceptibility to the alien radiation.
This work could be groundbreaking -- humans, like the penguins, are at risk of being affected by the alien radiation.
If your team really is going down the right path, this could open up the floor to potential preventative treatments that could save lives.
However, things aren't yet certain.

Thankfully, your team's base of operations is next to a thriving colony of mohawked penguins (which interestingly, have begun to adopt stylish sunglasses) with which you can further explore this genetic phenomena.
Your task is to confirm your lab's suspicions that this gene is present in affected organisms, paving the way to a quantification analysis in the future.

By the end of this CByte, you will have gained an understanding of the applications and implementations of key read-mapping algorithms.
These are used to attribute genetic subsequences to larger sequence fragments, being the first step in many genetic quantification analyses.
You see these methods in popular tools such as BLAST and STAR.

## FM-Indexing

Eureka!
Some how some way, Sally (your alien colleague -- turns out, it's actually a pretty common name up, uh, wherever she's from!) has gotten the exact nucleotide sequence of the gene in question.
This is great!
Now, you can use this information to see if this sequence is present in another nucleotide sequence.
A brave penguin has offerred up a sample for genetic sequencing.
Your goal is to see if the target gene sequence is present within this penguin sample.
Efficiency is key here, meaning that simple string iteration might end up being too slow -- thankfully, you remember a key algorithm discussed in your computational biology class from days of yore.
FM-indexing offers a quick way to search through a string (a sequence in our case) and see if another substring is present.
And hey -- if you finish quickly enough, you might even have a bargaining chip to name the gene after yourself!

FM-indexing, coupled with the Burrows-Wheeler Transform, presents an exemplary means of compressing, organizing, and searching string-like data -- perfectly suited for nucleotide sequences.
You see this work often throughout computational biology research, such as in genome assembly, alignment, and mapping, due to its efficient search capabilities.

```python
def fm_index_substring(f_col: str, l_col: str, query_subsequence: str) -> bool:
    """
    A function that evaluated whether a query subsequence is within a Burrows-Wheeler
    transformed string (represented by the BWT first and last column) using
    FM-indexing.

    You can ensure that "query_subsequence" will be a valid nucleotide sequence,
    and that "f_col" and "l_col" will be the first and last column of a BWTransformed
    nucleotide sequence.

    Args:
        f_col: A string, representing the first column of a BWT.
        l_col: A string, representing the last column of a BWT.
        query_subsequence: A string, representing a subsequence you are searching for.

    Returns:
        - A boolean, representing if "query_subsequence" is present within a BWTransformed sequence.

    Example:

    f_col, l_col = ('$EEHLLLLOO', 'OOH$EELLLL')
    query_subsequence = "EL"
    Output: True
    """

    # Output boolean
    substring_found = False

    # For FM-indexing, we search for strings backwards -- we just flip it now
    # to make life easier.
    search_substring = # TODO: Flip the query string!
    substring_len = len(search_substring)

    # We then go through our first and last column, and turn them into the
    # character-wise occurence form (i.e. AABB -> A1 A2 B1 B2) -- we represent
    # them as tuples (char, occurence num)
    f_char_indexed = []
    l_char_indexed = []

    # TODO: Add the respective (char, occurence num) tuples to each of the above
    # lists. A dictionary to track occurrences of a character may help!

    # Now that we have these two char-indexed first/last columns, we can begin our search!
    # We'll continue searching while we can make a next move.
    possible_next_move = True

    # And we'll be keeping track of the character we're currently searching for,
    # as well as the tuples we are searching from
    curr_search_index = 0
    curr_tuple_indices = []
    
    while(possible_next_move):

        # TODO: Add a case that breaks us out of the loop and sets the
        # found boolean accordingly if we have searched through the entire
        # "search_substring".
        
        # We first start by taking our current character
        curr_search_char = # TODO: Retrieve the current character from "search_substring"

        # We then look to see if we're searching within specific tuples or not
        # If we aren't we get some! We grab the indices of all tuples in F
        # that have the character we're looking for.
        if(len(curr_tuple_indices) == 0):
            curr_tuple_indices = []
            # TODO: Add all tuple indices from "f_char_indexed" that have the
            # character you are currently searching for. It is important to add
            # indices, rather than the tuples themselves, since we need to match
            # them to tuples in "l_char_indexed".

            # If there are none, that means our substring isn't here -- we flag as such
            if(len(curr_tuple_indices) == 0):
                possible_next_move = False
        
        # Otherwise, if we're searching for specific indices, we look at those!
        else:
            # These tuples align with tuples in the L column -- we take the tuples in the L
            # column, if any, that have the character we're looking for.
            curr_tuple = # TODO: From the tuples at the indices in "curr_tuple_indices" in the last column, get a list of tuples (not the indices!) that have the character we are currently searching for.

            # If there are none, that means our substring isn't here -- we flag as such
            if(len(curr_tuple) == 0):
                possible_next_move = False

            # Otherwise, if we do have tuples, we get the indices of those tuples in F and continue
            else:
                curr_tuple_indices = # TODO: Get the indices of the tuples in "curr_tuple" in the first column and put them in a list.

        curr_search_index += 1

    return(substring_found)
```

## Just Like A Word Search!

Your above method worked great for your pilot study!
However, as things scale up, you'll need to be searching for the occurrence of your gene in several sequence fragments of the same organism, almost simultaneously.
While FM-indexing is great for cases of searching a single sequence, other methods are better suited for this larger analysis.
However, this problem has you stumped.
In an effort to move forward, you recall great wisdom your mentor once told you -- the words are a little fuzzy in your memory, but it was something like "nature has already solved everything" or "nature has the best solution".
That's it! You look towards your surroundings for clues on where to begin.

Richard, a penguin near your camp, always starts his day with the NYT (Never Yielding Tundra) word search.
He's always quicker at it than you, too! One day, peering over his shoulder, you get a glimpse of his strategy -- Richard seems to first look for chunks of a query word within the letter grid, rather than checking for the entire word at once.
Query words are like query sequences!
The letter grid is like several target sequences!
All the same -- maybe this is the key to a quick search.

Richard's strategy is similar to a method called "seeding" -- the first step in seed-chain-extend-based sequence searching algorithms.
Seeding involves breaking up sequences into smaller "seeds", and keeping track of the start index of these seeds.
Then, instead of searching for an entire string at once, you can search for shared seeds between a query sequence and target sequences, before continuing your search from there.
This seeding method is used in a variety of real computational biology tools, such as BLAST and STAR.

```python
def seed_and_prune_target_seeds(
    query_sequence: str, target_sequences: list[str], k: int
) -> tuple[dict[str, list[int]], dict[str, dict[str, list[int]]]]:
    """
    A function that identifies shared k-mer seeds between a query sequence and a set of target
    sequences, returning the query seeds and their start indices, and the start indices of these
    same seeds in each target sequence.

    This function extracts all k-mers from the given "query_sequence" and maps them to their
    starting indices. The same is done to each target sequence in "target_sequences", however,
    only seeds seen within the query string are kept.

    Args:
        query_sequence: A string, representing a sequence you are searching for within the target
        sequences.
        target_sequences: A list of strings, where each string is a target sequence to search
        within.
        k: An integer, representing the k-mer size.

    Returns:
        - A dictionary mapping strings (representing k-mers) to a list of integers, representing
        starting indices of these seeds in the query sequence.
        - A nested dictionary mapping strings (representing each target sequence) to a dictionary
        mapping strings (representing k-mers found in both the query and target) to a list of integers,
        representing starting indices of these seeds in the respective target sequence.

    Example:

    query_sequence = "MYNAMYNAMEISCESARMEISCESARMMYNAMEISCESARYNAMEISCESAR"
    target_sequences = ["MYNOANEISEISEISSHGBFBAEOSEIBF", "SOMERANDOSARMSTRING", "THISHASNONEOFTHEM"]
    k = 3

    Output:
    {'MYN': [0, 4, 27], 'YNA': [1, 5, 28, 40], 'NAM': [2, 6, 29, 41], 'AMY': [3], 'AME': [7, 30, 42],
    'MEI': [8, 17, 31, 43], 'EIS': [9, 18, 32, 44], 'ISC': [10, 19, 33, 45], 'SCE': [11, 20, 34, 46],
    'CES': [12, 21, 35, 47], 'ESA': [13, 22, 36, 48], 'SAR': [14, 23, 37, 49], 'ARM': [15, 24],
    'RME': [16], 'RMM': [25], 'MMY': [26], 'ARY': [38], 'RYN': [39]}

    {'MYNOANEISEISEISSHGBFBAEOSEIBF': {'MYN': [0], 'EIS': [6, 9, 12]},
    'SOMERANDOSARMSTRING': {'SAR': [9], 'ARM': [10]},
    'THISHASNONEOFTHEM': {}}
    """

    # All target-seed dictionary mappings
    target_to_seed_dict_mappings = {}
    # Our query seeds list
    query_seed_dict = {}

    # TODO: Implement the seeding/pruning algorithm as specified.

    return(query_seed_dict, target_to_seed_dict_mappings)
```

## Seed and Extend

Penguins are far more observant than you initially thought -- unfortunately, Richard noticed you continually peering over his shoulder, trying to glean his strategy.
Not-so-unfortunately, however, he's been quite receptive to just teaching you his strategy instead! Through a whirlwind of noot-noots and hand -- I mean flipper -- gestures, the penguin was able to get the point across.
After finding these initial seeds in the grid, he then searches on both sides of the seed, seeing if they match up with the desired query word.
Something similar could definitely work in your case!
In other news, though, you should probably start looking into how to add a penguin as a co-author to a research paper.

Extending seeds is a crucial step for seed-chain-extend-based algorithms -- this involves "extending" each seed in a target sequence on both sides while comparing to a query sequence, in hopes of finding sequences with seeds that best match to your query sequence.
Like with general seeding, you see this in real computational biology tools used for read mapping, such as BLAST and STAR.

```python
def seed_extend_and_score(
    query_sequence: str,
    target_sequences: list[str],
    k: int,
    one_way_mismatch_threshold: int,
) -> str:
    """
    A function to return the highest scoring sequence within a set of target sequences, scored by
    seed extension-based alignment with the query sequence. Each target sequence is scored by the
    number of bases covered by maximal extension of all query seeds in the target sequence,
    divided by the length of the target sequence for normalization.

    This function first extracts and prunes k-mer seeds from the "query_sequence" and "target_sequences".
    It then attempts to extend each seed within a target sequence bidirectionally, allowing
    mismatches in each direction up to a given threshold (represented by "one_way_mismatch_threshold").
    Each target sequence is then scored by the number of nucleotides covered after maximal seed
    extension divided by the target sequence length, ensuring each region is only counted once in
    the final score.

    When multiple occurrences of a seed exist in the query, the extension that leads to the longest match
    is chosen. The target sequence with the highest score is returned, breaking ties alphabetically.

    Args:
        query_sequence: A string, representing a sequence you are searching for within the target
        sequences.
        target_sequences: A list of strings, where each string is a target sequence to search
        within.
        k: An integer, representing the k-mer size.
        one_way_mismatch_threshold: An integer specifying the maximum number of mismatches allowed
        in a direction when extending a seed.

    Returns:
        - A string representing the target sequence with the highest seed extension score, as
        defined above. If several sequences have the same score, the alphabetical first
        sequence is returned.

    Example:

    query_sequence = "ATGCGTA"
    target_sequences = ["GCTATGCTA", "TGCATGCA", "GCTAGGCT"]
    k = 3
    one_way_mismatch_threshold = 2

    Output: "TGCATGCA"
    """

    # Our output string, representing the target sequence in "target_sequences" that has the highest S/E score.
    highest_scoring_target = ""

    # TODO: Score the target sequences, as specificed, and return the highest scoring target sequence (breaking any ties alphabetically).

    return(highest_scoring_target)
```
