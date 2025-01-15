<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>Lecture 02B</b><br>
    DNA sequencing
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Methodology
</h2>
<p style="text-align: center;">
    <b>Date:</b> Jan 16, 2024
</p>

!!! danger "DRAFT"

    This page is a work in progress and is subject to change at any moment.

This session focuses on the practical steps and computational tools required for analyzing sequencing data.
Students will engage in hands-on activities using Python and Galaxy to process sequencing datasets, assess data quality, and clean reads for downstream analyses.

## Learning objectives

After today, you should have a better understanding of:

1.  Sequencing data formats such as FASTA and FASTQ.
2.  Assessing sequencing data quality.
3.  Cleaning and preprocessing sequencing data.

## Outline

### Sequencing data formats

Familiarity with FASTA and FASTQ formats is essential for analyzing sequencing data effectively.

-   Explore the structure and key components of FASTA and FASTQ files.
-   Load sample FASTQ files and inspect their content using Python.
-   Demonstrate how FastQC can analyze the quality of FASTQ files.

### Assessing sequencing data quality

Quality control identifies potential issues in sequencing data that could affect downstream analysis.

-   Learn the role of FastQC in assessing sequence quality.
-   Use Python to calculate basic quality metrics from FASTQ files, such as average quality scores.
-   Compare FastQC results with Python-generated metrics to reinforce the importance of automated tools.

### Cleaning and preprocessing sequencing data

Data cleaning removes contaminants and improves the reliability of sequencing data.

-   Introduce the need for adapter trimming and quality filtering with Fastp.
-   Demonstrate Fastp’s preprocessing capabilities and interpret its output.
-   Write Python scripts to simulate basic preprocessing, such as filtering low-quality reads or trimming sequences.

## Supplementary material

Relevant content for today's lecture.

-   [FASTA files](https://omics.crumblearn.org/appendices/file-types/fasta/)
-   [FASTQ files](https://omics.crumblearn.org/appendices/file-types/fastq/)
-   [FastQC](https://omics.crumblearn.org/genomics/assembly/qc/fastqc/) and nested content

<!-- ## Presentation

-   **View:** [slides.com/aalexmmaldonado/biosc1540-l02b](https://slides.com/aalexmmaldonado/biosc1540-l02b)
-   **Live link:** [slides.com/d/HVHLMoo/live](https://slides.com/d/HVHLMoo/live)
-   **Download:** [biosc1540-l02b.pdf](/lectures/02b/biosc1540-l02b.pdf)

<iframe src="https://slides.com/aalexmmaldonado/biosc1540-l02b/embed?byline=hidden&share=hidden" width="100%" height="600" title="BIOSC 1540: Lecture 02B" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->

