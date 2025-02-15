<h1 align="center">
    <b>Project 02:</b><br>
    Transcriptomics
</h1>

This project introduces students to the analysis of RNA-Seq data from *Pseudomonas aeruginosa* biofilms grown in spaceflight conditions aboard the International Space Station and their counterparts on Earth ([OSD-554](https://osdr.nasa.gov/bio/repo/data/studies/OSD-554)).
By investigating how bacterial gene expression changes in response to microgravity, students will engage in a hands-on exploration of computational biology workflows.
They will learn to process raw sequencing reads, remove contamination, map sequences to a reference genome, and quantify gene expression levels.
Ultimately, this project will provide insight into how spaceflight affects microbial physiology and adaptation while reinforcing key bioinformatics and data analysis skills.

## Background & Relevance

Microorganisms have an extraordinary ability to form biofilms, structured communities of cells encased in an extracellular matrix that enhances their survival under stress.
These biofilms play a critical role in various biological and industrial settings, from chronic infections to environmental remediation.
However, in the context of space exploration, biofilms present a unique challenge.
They can colonize spacecraft surfaces, degrade materials, and pose potential health risks to astronauts.
Despite rigorous sterilization efforts, biofilms persist, making it essential to understand how the space environment influences their growth and gene expression.

Microgravity presents a unique stressor that can alter microbial behavior in ways that are not fully understood.
Previous studies have shown that spaceflight can affect microbial growth rates, antibiotic resistance, and gene expression patterns.
By analyzing RNA-Seq data from *Pseudomonas aeruginosa* biofilms grown in space and on Earth, this project seeks to identify specific genes and pathways that are differentially expressed in response to microgravity.
Understanding these changes could help develop new strategies to mitigate biofilm-related risks on long-duration space missions and improve spacecraft hygiene.

## Project workflow

Students will follow a structured workflow that mirrors real-world bioinformatics pipelines.
They will filter out ribosomal RNA contamination and align the remaining reads to a reference genome using Bowtie2.
Gene expression quantification will be performed using Salmon, followed by differential expression analysis with DESeq2.

Alongside these steps, students will tackle Python-based problems designed to reinforce data handling and visualization skills.
These exercises will cover topics such as parsing sequencing data, automating repetitive tasks, and generating plots to interpret experimental results.
By the end of the project, students will have a well-rounded understanding of RNA-Seq data analysis and its applications in biological research.
