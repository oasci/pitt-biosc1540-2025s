<h1 align="center">
 <b>Project 01:</b><br>
 Genomics
</h1>

<!-- https://www.nature.com/articles/s41467-020-17735-y -->

This project is a hands-on genomics analysis pipeline to introduce students to real-world computational biology techniques.
Throughout five homework assignments, students will engage with various stages of a genomics project, learning Python programming and bioinformatics tools while analyzing actual sequencing data.
The project is structured around studying parental and evolved bacterial isolates to investigate genetic adaptations linked to antibiotic resistance.

## Context and Relevance

The ability to sequence and analyze genomes has revolutionized biology and medicine, enabling us to uncover mechanisms of antibiotic resistance, as highlighted in the [provided study on *Staphylococcus aureus* isolates and efflux pump activity](https://www.nature.com/articles/s41467-020-17735-y).
This project allows students to learn how such analyses are conducted by integrating computational and biological perspectives.

Students will:

-   Perform DNA sequencing quality control.
-   Assemble genomes and evaluate assembly quality.
-   Annotate genomes to identify coding regions.
-   Compare parental and evolved strains to identify genetic changes linked to resistance.
-   Practice Python programming to understand and analyze these workflows.

This project is grounded in foundational computational biology concepts and tools, preparing students for advanced bioinformatics challenges.

## Summary of the Research Paper

The [research paper](https://www.nature.com/articles/s41467-020-17735-y) explores the role of efflux pump activity in potentiating the evolution of antibiotic resistance in *Staphylococcus aureus* isolates.
The authors investigate how intrinsic genetic variations across 222 parental *S. aureus* strains influence their ability to evolve resistance to ciprofloxacin.
A central finding of the study is that elevated expression of the efflux pump gene, norA, enhances the fitness benefits conferred by resistance mutations, enabling faster adaptation under selective pressure.

The study underscores the interplay between intrinsic resistance levels, genetic predispositions, and evolutionary mechanisms in shaping resistance pathways.
By integrating experimental evolution, genomic sequencing, and transcriptomic analyses, the research demonstrates how efflux pump inhibitors could potentially suppress resistance evolution.
This work highlights the value of understanding genomic drivers to predict and mitigate resistance development in bacterial pathogens.

## Project Breakdown and Assignments

The project unfolds across five assignments, each building on the previous to create a cohesive learning experience.
Students begin by mastering Python programming fundamentals, a skill critical for automating and interpreting bioinformatics workflows.
They then apply these skills to analyze sequencing data, assemble genomes, and uncover genetic changes associated with antibiotic resistance using [Galaxy](https://usegalaxy.org/).

### Python Basics (P01A)

The journey starts with Python basics.
Here, students gain the programming foundation required for bioinformatics tasks.
They learn to work with variables, functions, loops, and data structures like lists and dictionaries.

### DNA Sequencing Quality Control (P01B)

Building on their Python skills, students dive into raw sequencing data quality control.
Using tools like [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/), they assess sequencing files for low-quality bases and adapter contamination.
They trim problematic reads using [fastp](https://academic.oup.com/bioinformatics/article/34/17/i884/5093234), ensuring high-quality inputs for subsequent genome assembly.
This assignment reinforces the importance of data preprocessing and introduces bioinformatics software workflows.

### Genome Assembly (P01C)

With cleaned sequencing data in hand, students proceed to genome assembly.
They use [SPAdes](https://ablab.github.io/spades/) to reconstruct bacterial genomes from the parental and evolved isolates.
Quality metrics such as N50 and contig count are explored using [QUAST](https://github.com/ablab/quast), and assemblies are visualized in [Bandage](https://rrwick.github.io/Bandage/).
This stage emphasizes computational evaluation of assembly performance and introduces students to challenges in reconstructing genomic data.

### Gene Prediction (P01D)

Next, students annotate their assembled genomes to identify coding sequences, rRNAs, tRNAs, and other genomic features.
Using [Prokka](https://academic.oup.com/bioinformatics/article/30/14/2068/2390517), they generate detailed annotations for both parental and evolved genomes.
By comparing annotations, students gain insights into the functional differences between the isolates, building their ability to interpret genomic data in a biological context.

### Sequence Alignment and Comparative Genomics (P01E)

The final assignment focuses on identifying genetic changes associated with antibiotic resistance.
Students align annotated genomes against a reference using [snippy](https://github.com/tseemann/snippy), uncovering single nucleotide polymorphisms (SNPs) and structural variations.
They correlate these changes with observed resistance levels, tying their bioinformatics analyses back to real-world phenotypes.
