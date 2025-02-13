<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>Lecture 06B</b><br>
    Read mapping
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Methodology
</h2>
<p style="text-align: center;">
    <b>Date:</b> Feb 13, 2025
</p>

We'll explore the challenges of aligning millions of short reads to a reference genome and discuss various algorithms and data structures that make this process efficient.
The session will focus on the Burrows-Wheeler Transform (BWT) and the FM-index, two key concepts that revolutionized read alignment by enabling fast, memory-efficient sequence searching.

## Learning objectives

After today, you should have a better understanding of:

1.  The purpose of reference-based mapping.
2.  Hash-based methods for handling introns.
3.  Suffix arrays for efficient substring searches.
4.  Burrows-Wheeler Transform (BWT) string compression.
5.  FM-index for efficient substring searches.
6.  Splice-aware mapping with seed-chain-extend strategy.

## Supplementary material

Relevant content for today's lecture.

-   Suffix trees
    -   [JHU](https://www.cs.jhu.edu/~langmea/resources/lecture_notes/08_suffix_trees_v2.pdf)
-   Suffix arrays
    -   [JHU](https://www.cs.jhu.edu/~langmea/resources/lecture_notes/09_suffix_arrays_v2.pdf)
-   Burrows-Wheeler transform
    -   [Omics website](https://omics.crumblearn.org/appendices/algorithms/compression/bwt/)
    -   [JHU](https://www.cs.jhu.edu/~langmea/resources/lecture_notes/10_bwt_and_fm_index_v2.pdf)
-   FM-index
    -   [Omics website](https://omics.crumblearn.org/appendices/algorithms/search/fm-index/)

<!-- ## Presentation

-   **View:** [slides.com/aalexmmaldonado/biosc1540-l06b](https://slides.com/aalexmmaldonado/biosc1540-l06b)
-   **Live link:** [slides.com/d/v69HoBk/live](https://slides.com/d/v69HoBk/live)
-   **Download:** [biosc1540-l06b.pdf](/lectures/06B/biosc1540-l06b.pdf)

<iframe src="https://slides.com/aalexmmaldonado/biosc1540-l06b/embed?byline=hidden&share=hidden" width="100%" height="600" title="BIOSC 1540: Lecture 08" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
