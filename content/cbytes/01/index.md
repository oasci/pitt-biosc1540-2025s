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

!!! danger "Attention"

    I am making some narrative changes and slight changes to the problem description.
    ATP will be extended by two days.

It started like any other day in the lab: coffee-stained lab coats, a faint hum of sequencers in the background, and your PI staring blankly at the whiteboard as if it had personally offended them.

"Okay, team," Dr. Mendez said, clapping their hands together like they were about to announce a Nobel Prize.
"We’ve got a challenge. The sequencing run ... well, it didn’t exactly work as planned."

"Define ‘exactly,’" muttered Kai, the resident pessimist, already digging through their stash of emergency snacks.

"Let’s just say the data looks... artistic," Dr. Mendez replied, spinning their laptop around to reveal a suspicious-looking heatmap like a Jackson Pollock painting.
"Low-quality reads, contaminants, barcodes gone wild—you name it. We’ve got to fix this, or the grant report will read like an apology letter."

You raised an eyebrow. "So, basically, we’re cleaning up spaghetti data and hoping it magically turns into linguine?"

"More like al dente angel hair," Kai quipped through a mouthful of trail mix.

"Enough jokes!" snapped Tim, the lab’s overachiever, furiously flipping through a protocol binder like it held the secrets to the universe.

"We can fix this. Right? Someone say yes."

Everyone turned to you.
Because, of course, they did.
The newbie.
The one who made the mistake of fixing the lab printer once, thereby earning the unshakable title of "tech genius."
All I did was trip on the power cord and it rebooted.

You tried to muster confidence. "Uh, sure. I just need a list of tools, a quiet workspace, and maybe… a week?"

"Perfect!" Dr. Mendez beamed. "Or, hear me out—what if we just rerun the experiment? Fresh data, no drama."

CRASH.

Everyone turned to see Ethan, the lab intern, standing next to what used to be the Ridiculously Elaborate And Disastrous Sequencer (READ).
The machine was smoking gently, a panel dangling from one side.

"It… sparked," Ethan said, holding up a suspiciously wet power cord.

Dr. Mendez groaned audibly. "Well, I guess rerunning isn’t an option anymore. Great. How much time do you need again? A day?"

"A day? Uhh... well." "Great! I have to go make some calls," interrupted Dr. Mendez as he hurried out of the room.

Kai leaned over your shoulder, peering at the smoldering READ.
"Maybe it’s better this way. You know, fewer chances for it to spontaneously combust during sequencing."

"Oh, come on," you said, flipping through a lab manual. "How hard can it be to salvage? It’s just sequencing. A few overlaps, some error trimming, maybe some multiplexing…"

Ethan blinked.
"Gesundheit?"

Priya smacked the table. "Focus! If we pull this off, we’ll have enough data to finish this project and publish!"

"And if we don’t?" Kai asked, raising an eyebrow.

"Well," Priya said, gesturing toward Ethan, "we can always blame the intern."

"Hey!" Ethan protested.

With that, the team got to work—or at least, they tried to. Priya started an Excel file with no less than 47 tabs, and Kai somehow turned their snack pile into a makeshift inspirational pyramid.

And you?
You stared at the mess of data, the unhelpful guide, and the fried READ, muttering, "Why didn’t I just become a barista?"

But deep down, you knew you couldn’t let the chaos win.
It was time to roll up your sleeves, fire up Python, and show this dataset who’s boss.

The clock was ticking.
Could you clean up the data and piece it all together?
Or would you be the first bioinformatics hero to go down in flames—and barcodes?

## Quality control

**ATP possible:** 20

As the lab descended into chaos—with Ethan frantically apologizing to the now-sizzling sequencer and Kai constructing what could only be described as a "trail mix shrine"—you knew the path forward was anything but straightforward.
Low-quality reads, strange artifacts, and contamination had turned the sequencing output into a digital minefield.
But every dataset, no matter how messy, deserves a second chance.

"Alright," you muttered, pulling out your laptop and opening Python. "If the sequencer’s toast, we’ve got to salvage this mess."

Quality control is where the magic begins.
Before any sequencing data can illuminate biological mysteries, it must pass through the fire of stringent analysis.
Each read, like an eager contestant in a talent show, will need to prove its worth—only the sharpest, cleanest, and brightest will move forward.

Your task is to write a Python script that evaluates each read’s average quality score, meticulously separates the strong contenders from the questionable, and ensures only high-quality data advances.
Sequencing artifacts and low-quality reads could lead to catastrophic errors downstream—misalignments, false positives, even the dreaded ghost genes that haunt bioinformaticians’ dreams.

### Reading FASTQ files

Sifting through the crinkled, coffee-stained READ manual wasn’t exactly your idea of fun.
The diagrams were cryptic, the margins were crowded with hastily scrawled notes, and the index seemed to have been organized by a committee of particularly malicious alphabet enthusiasts.
But then, buried halfway through a section on "Data Parsing Utilities," you found it—a Python function that promised to read FASTQ files.

"Finally, something useful!" you exclaimed, interrupting Priya’s feverish Excel wizardry.

The function, aptly named `read_fastq`, seemed simple yet powerful.
It claimed to extract sequences and their corresponding quality scores from FASTQ files—precisely what you needed to tame the unruly dataset.

You quickly transcribed the code into your editor.

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

Kai glanced over your shoulder. "Looks simple enough. Do you trust it?"

You hesitated. "Well, it’s from the READ manual, and the READ is... well, temperamental. But it’s a good starting point."

The function’s design was intuitive: it opened the FASTQ file, read each sequence and its corresponding quality scores, and returned them as two separate lists.
You could already imagine the possibilities. With this function, you could evaluate the quality of every sequence in the dataset, laying the groundwork for filtering out the junk and keeping only the gems.

"You’re sure about this?" Ethan asked, still sheepishly eyeing the ruined sequencer.

"Not at all," you replied, spinning your laptop around to show the team. "But it’s better than staring at spaghetti data."

### Decoding the Quality String

After successfully reading sequences and quality strings from the FASTQ file, the next challenge loomed large: interpreting the mysterious quality strings.
These cryptic strings, composed of seemingly random ASCII characters, were the gatekeepers of sequencing data quality.
Each character encoded a Phred quality score, a measure of the reliability of each nucleotide in the sequence.

Sitting at your laptop, you stared at one of the quality strings displayed on your screen.
"So, you're telling me this mess of symbols is supposed to mean something?" Ethan asked, squinting at the screen.

You nodded.
"Exactly. Each character has an ASCII value, which translates to a Phred score.
That score tells us how confident the sequencer was about calling a particular base. The higher the score, the better the quality."

Your goal was clear: write a function that could decode these strings into a list of integers representing the quality scores.
You drafted the function skeleton.

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

This function would take a single quality string as input and convert it to a list of integers.
Each character in the string needed to be interpreted as an ASCII value, with a specific offset to obtain the Phred score.
The task wasn’t just about coding—it was about understanding the underlying data format and ensuring accuracy at every step.

"Think of it like translating a secret code," you explained to the team.
"Each symbol holds the key to understanding how reliable the data is."

Kai leaned in. "So, once we’ve got the scores, we can figure out which reads to keep, right?"

As you worked, a sense of progress replaced the earlier chaos.
If this function worked as intended, it would be a crucial step toward reclaiming the dataset.
With the quality scores decoded, you’d finally be able to start separating the signal from the noise.

### Filtering Low-Quality Reads

With the sequences loaded and the quality scores decoded into numerical values, you were one step closer to salvaging the dataset.
But the next task was arguably the most crucial: deciding which reads were good enough to keep.
Low-quality reads could wreak havoc downstream, leading to misalignments, false positives, or worse—misinterpretation of results.

Your mission was clear: write a function to filter out reads with average quality scores below a given threshold.
After a brief brainstorming session with the team (and yet another raid on Kai’s snack stash), you outlined the logic for `filter_low_quality_reads`.

The function would need to:

1.  Take the sequences, their corresponding quality strings, and a quality threshold as input.
2.  Decode the ASCII-based quality strings into numerical scores using your previous function.
3.  Calculate the average quality score for each read.
4.  Retain only the sequences and quality strings with average scores meeting or exceeding the threshold.

You quickly drafted the following skeleton.

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

"This is where we cut the junk," you explained, pointing to the code.
"We’ll loop through each sequence, convert its quality string into scores, calculate the average, and keep it only if it’s above the threshold."

Ethan nodded nervously. "And… what happens to the junk?"

"Well," you said with a grin, "we let it rest in peace in the recycle bin."

"Alright," Priya chimed in. "No pressure, but if this doesn’t work, we might need to write ‘oops’ in the grant report."

"No worries," you replied, diving into the code. "By the time I’m done, this data will be as clean as a sequencer ad."

As the team gathered around your laptop, Ethan thumbed through the tattered READ manual, hoping for guidance on how to verify your filtering logic.
Just as Kai began suggesting you "wing it," he spotted a scribbled margin note: *"Example: Sequence filtering (Phred 20)"*.

"Here we go!" Ethan exclaimed, pointing at the example, which provided a mock dataset:

**Input:**

```python
sequences = ["ACGT", "GGTT", "TTAA"]
qualities = ["IIII", "!!!!", "JJJJ"]
threshold = 20
```

The note continued with a brief explanation: the ASCII values of the quality characters needed to be converted into Phred scores, and only sequences with an average score of at least 20 should pass the filter.
The example provided the desired output for the given input:

**Output:**

```python
(["ACGT", "TTAA"], ["IIII", "JJJJ"])
```

"That’s exactly what we need!" you said, jotting down the details.
The example was a perfect test case for your `filter_low_quality_reads` function.
The ASCII quality scores for the given input were straightforward:

-   `IIII`: All characters correspond to Phred score 40 (high-quality read).
-   `!!!!`: All characters correspond to Phred score 0 (junk read).
-   `JJJJ`: All characters correspond to Phred score 41 (high-quality read).

Only `ACGT` and `TTAA` passed the threshold of 20, along with their respective quality strings, `IIII` and `JJJJ`.

"That’s it," you said triumphantly. "If this works for their example, it should handle the real data too."

Kai raised an eyebrow. "And if it doesn’t?"

"Well," you said, "at least we’ll know where the READ manual belongs."

## Trimming Adapter Contamination

**ATP possible:** 50

With the filtering function finally complete, you leaned back in your chair and sighed.
"Alright, team, we did it. The junk reads are gone."

"Time to celebrate?" Priya asked, already reaching for her jacket.

"Boba?" Ethan suggested, clearly eager to redeem himself after the sequencer disaster.

The group unanimously agreed.
A quick trip to the boba shop was just the recharge everyone needed.
Over a mountain of tapioca pearls and caffeinated beverages, you basked in the brief calm, feeling a sliver of hope that this project might actually come together.

Back in the lab, you stared at the filtered reads with a mix of satisfaction and exhaustion.
They were clean, devoid of low-quality junk, but still, something wasn’t right.
Priya confirmed it, peering over her laptop. "There’s something weird at the ends of these reads. They don’t look like real sequences."

"Adapters," Kai muttered, popping another gummy bear into his mouth. "I hate those things."

Adapters: the persistent little hitchhikers of sequencing data.
These short sequences, added during library preparation, were essential for binding and amplifying DNA fragments in the sequencer.
But now, they had overstayed their welcome, clinging to the reads like barnacles on a ship.
If they weren’t trimmed, they’d ruin any hope of accurate analysis downstream.

"Okay," you said, pulling up the next section of the READ manual. "Let’s figure out how to get rid of these."

The manual didn’t disappoint—this time.
Nestled between cryptic diagrams and indecipherable scribbles was a section on adapter trimming.
The code was dense, but it was clear enough: the trimming process revolved around identifying adapter sequences at the ends of reads, handling mismatches, and resizing the sequences and their quality scores accordingly.

> Iterate through each adapter in the `adapter_list` and search for occurrences of these adapters at the 3' end of `seq_read`.
> A minimum overlap of `min_overlap` between the adapter and `seq_read` to consider remove.
> Allow for up to `diff_limit` mismatches when identifying adapter sequences to account for sequencing errors or slight variations in adapter sequences.
> When a matching adapter sequence is found that meets the mismatch criteria, trim the adapter from the read.

"So basically," Priya said, "we cut off the freeloaders without damaging the actual data?"

"Exactly," you said, sketching out a plan. "And if we don’t, this whole project will still look like spaghetti data."

Using the manual as a guide, you drafted the Python function.
It would process each sequence and its corresponding quality scores, checking for matches to a list of known adapters.
If an adapter was found, both the sequence and quality scores would be trimmed accordingly.

```python
def trim_adapters(
    seq_read: str,
    adapter_list: list[str],
    diff_limit: int = 2,
    min_overlap: int = 10,
) -> str:
    """
    Trims adapter sequences from a single sequencing read.

    Args:
        seq_read:
            The DNA sequence of the read to process.
        adapter_list:
            A list of adapter sequences to trim from the read.
        diff_limit:
            The maximum number of mismatches allowed when identifying adapter sequences.
            Defaults to 2.
        min_overlap:
            The minimum required length of adapter overlap with `seq_read`
            to consider for trimming. Defaults to 10.

    Returns:
        The trimmed or original DNA sequence after any adapter removal.
    """
    seq_trimmed: str = seq_read

    # TODO: Implement sequence matching to search for known adapter sequences within the read.
    # Allow for mismatches up to `diff_limit` and trim adapters accordingly.
    return seq_trimmed
```

To make sure the trimming worked as expected, you used a small test dataset with the following function parameters.

```python
ADAPTERS = ["AGTGCCG"]
diff_limit = 1
min_overlap = 4
```

| `seq_read` | `seq_trimmed` |
| ---------- | ------------- |
| `TTTTAACCCCCCCCC` | `TTTTAACCCCCCCCC` |
| `AGTGCCGACGTACGT` | `AGTGCCGACGTACGT` |
| `AGTGCCGACGTAGTG` | `AGTGCCGACGT` |
| `AGTGCCGACGTAGAG` | `AGTGCCGACGT` |
| `AGTGCCGACGTAG` | `AGTGCCGACGTAG` |
| `CCGACGTAGTGCCG` | `CCGACGT` |

The trimmed reads appeared on the screen, perfect and pristine.

Kai nodded approvingly. "Looks like the freeloaders are gone."

Ethan looked relieved. "So… this means we’re good?"

"For now," you said, saving the code with a sense of accomplishment.
"But don’t get too comfortable. The data’s still got a long way to go."

You glanced at the clock, realizing how late it had gotten. There were more problems waiting in the dataset, but for tonight, the adapters were defeated.

## De-multiplexing Mixed Samples

**ATP possible:** 30

The filtered reads and trimmed adapters were milestones in cleaning up the dataset, but one big question loomed: whose data was this?
Multiplexed sequencing experiments are efficient, but they come with a cost: the need to untangle a mixed mess of sequencing reads and assign each one to its rightful owner.

“This is where barcodes come in,” you said, flipping through the READ manual.
“Each sample in the experiment was tagged with a unique sequence—like a DNA name tag. We just need to read the tags and sort the data.”

“Just need to?” Kai raised an eyebrow. “You make it sound like untangling the Christmas lights from last year.”

It wasn’t a bad analogy.
De-multiplexing involves checking the start of every read for one of the known barcodes, assigning the read to the appropriate sample, and saving any unrecognized reads for further investigation.
Each barcode corresponded to a unique sample in the experiment, neatly mapped in a dictionary like this:

```python
BARCODES_MAP = {
    "ACTGTCAGGCTA": "Sample_1",
    "TGACGATTGACG": "Sample_2",
    "GCTAGTGCTAGC": "Sample_3",
    "CAGTTGACAGTT": "Sample_4",
    "TACGGCTAGGCA": "Sample_5",
    "GTACGATCGTAC": "Sample_6",
    "CGTAGCTGACGT": "Sample_7",
    "AGCTTAGCTTAG": "Sample_8",
    "TTGACGATCGTA": "Sample_9",
    "GACGATCGTAGC": "Sample_10",
}
```

“This is going to take some work,” Priya noted, glancing at the function template on your screen.

```python
def demultiplex_reads(
    sequences: list[str],
    barcode_map: dict[str, str]
) -> tuple[dict[str, list], list]:
    """
    Demultiplex reads into sample-specific groups based on barcodes.

    Args:
        sequences: List of DNA sequences.
        barcode_map: Mapping of barcodes to sample IDs.

    Returns:
        A dictionary with sample IDs as keys and lists of FASTQ records as values.

        A list of unclassified reads (headers, sequences, qualities).
    """
    classified = {}
    unclassified = []

    # TODO:
    pass

    return classified, unclassified
```

The team leaned in as you sketched out the next steps. “Once we separate these reads by barcode, we’ll have clean, sample-specific datasets ready for analysis.”

“Just don’t mix them up again,” Kai joked, nudging the pile of notes on your desk.
