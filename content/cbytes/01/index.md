<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>CByte</b> 01
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Decoding the DNA Data Disaster
</h2>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP available</strong></a>: Jan 17, 2025 at 11:59 p.m.
    </object>
</p>

<p style="text-align: center;">
    <object hspace="50">
        <strong>ATP expiration</strong></a>: Jan 31, 2025 by 11:59 p.m.
    </object>
    <object hspace="50">
        <strong>ATP possible</strong></a>: 100
    </object>
</p>

A research lab has presented you with a critical challenge: salvaging and preparing genomic data from a failed sequencing experiment.
This dataset, initially intended to provide insights into key biological questions, is now compromised by poor-quality reads, contamination, and mixed sample barcodes.
Your role is to rescue the data, develop computational tools and techniques to transform a chaotic dataset into one suitable for downstream analysis.
By the end of this CByte, you will have gained experience with file formats like FASTQ, practiced coding for data quality assessment, and applied computational methods to process genomic data.

!!! danger "DRAFT"

    Gradescope autograder is still in development.

## Quality control

Your task is to write a Python script that filters sequencing reads from a FASTQ file based on their quality scores. Using a provided utility function for reading the FASTQ file, you will focus on calculating average quality scores, identifying low-quality reads, and generating an output file that excludes these reads.

Sequencing quality control is a crucial step in bioinformatics workflows.
Poor-quality reads can lead to errors in downstream analyses, and it is essential to filter them out before proceeding.
This task will introduce you to FASTQ file processing, quality score interpretation, and read filtering.

```python
def read_fastq(file_path: str) -> tuple[list[str], list[str]]:
    """
    Reads a FASTQ file and returns two lists: sequences and quality scores.

    Args:
        file_path: Path to the input FASTQ file.

    Returns:
        List of sequences from the FASTQ file.
        List of quality scores (per base) for each sequence.
    """
    sequences: list[str] = []
    qualities: list[str] = []
    with open(file_path, 'r') as file:
        while True:
            header = file.readline().strip()
            if not header:  # End of file
                break
            seq = file.readline().strip()
            file.readline()  # Skip '+'
            qual = file.readline().strip()
            sequences.append(seq)
            qualities.append(qual)
    return sequences, qualities
```

Your task is to implement the following functions.

```python
def convert_quality_string_to_scores(quality_string: str) -> list[int]:
    """
    Converts a quality string from a FASTQ file into a list of integer Phred quality scores.

    Args:
        quality_string: A string representing the quality scores in ASCII format.

    Returns:
        A list of integers where each integer corresponds to the Phred quality score.
    """
    # Placeholder for the converted scores
    scores: list[int] = []

    # TODO: Convert each character in the quality_string to its corresponding Phred quality score.
    pass

    return scores
```

```python
def filter_low_quality_reads(
    sequences: list[str], qualities: list[str], threshold: int
) -> tuple[list[str], list[str]]:
    """
    Filters out reads with average quality scores below the threshold.

    Args:
        sequences: List of sequences.
        qualities: List of quality scores (as strings in ASCII format) for each sequence.
        threshold: Phred quality score threshold.

    Returns:
        - List of sequences that meet the threshold.
        - List of quality scores (in ASCII format) for the filtered sequences.
    """
    # Placeholder for filtered results
    filtered_sequences: list[str] = []
    filtered_qualities: list[str] = []

    # TODO: Find the filtered sequences and their corresponding quality strings.
    pass

    return filtered_sequences, filtered_qualities
```

### Example

Input

```python
sequences = ["ACGT", "GGTT", "TTAA"]
qualities = ["IIII", "!!!!", "JJJJ"]
threshold = 20
```

Output

```python
(["ACGT", "TTAA"], ["IIII", "JJJJ"])
```

## Trimming adapter contamination

Your task is to identify and remove adapter sequences from sequencing reads in a FASTQ file.
This process ensures clean data for downstream analysis by eliminating unwanted adapter contamination.
Additionally, you will generate a comprehensive report summarizing the process.

```python
def trim_adapters(sequences: list[str], qualities: list[str], adapters: list[str]) -> tuple[list[str], list[str]]:
    """
    Trims adapter sequences from sequencing reads.

    Args:
        sequences: A list of DNA sequences to process.
        qualities: A list of quality score strings corresponding to each sequence.
        adapters: A list of adapter sequences to trim from the reads.

    Returns:
        - A list of trimmed DNA sequences.
        - A list of trimmed quality score strings, corresponding to the sequences.
    """
    trimmed_sequences: list[str] = []
    trimmed_qualities: list[str] = []

    # TODO:
    pass

    return trimmed_sequences, trimmed_qualities
```

## De-multiplexing Mixed Samples

Your task is to separate sequencing reads into individual sample files based on their barcodes.
This process is critical for handling mixed datasets generated during multiplexed sequencing experiments.
Additionally, you will generate a summary report for any unclassified reads that do not match a provided barcode.

```python
def demultiplex_reads(
    headers: list[str],
    sequences: list[str],
    qualities: list[str],
    barcode_map: dict[str, str]
) -> tuple[dict[str, list], list]:
    """
    Demultiplex reads into sample-specific groups based on barcodes.

    Args:
        headers: List of FASTQ headers.
        sequences: List of DNA sequences.
        qualities: List of quality score strings.
        barcode_map: Mapping of barcodes to sample IDs.

    Returns:
        A dictionary with sample IDs as keys and lists of FASTQ records as values.

        A list of unclassified reads (headers, sequences, qualities).
    """
    classified = defaultdict(list)
    unclassified = []

    # TODO:
    pass

    return classified, unclassified
```
