# GFP activity

This activity will guide you through an exploration of different GFP variants using PyMOL. You will investigate structural differences, compare sequences, and measure key distances between residues to understand how small modifications influence protein structure and function.

## Background

Green Fluorescent Protein (GFP) from *Aequorea victoria* has been extensively modified to produce variants with improved brightness, stability, and altered spectral properties. Some notable variants include:

-   **eGFP (Enhanced GFP)**: [`2Y0G`](https://www.rcsb.org/structure/2Y0G)
-   **sfGFP (Superfolder GFP)**: [`2B3P`](https://www.rcsb.org/structure/2B3P)
-   **GFPuv (UV-optimized GFP)**: [`6IR6`](https://www.rcsb.org/structure/6IR6)
-   **YFP (Yellow Fluorescent Protein)**: [`1YFP`](https://www.rcsb.org/structure/1YFP)
-   **mTurquoise2 (a Cyan Fluorescent Protein)**: [`3ZTF`](https://www.rcsb.org/structure/3ZTF)
-   **roGFP2 (Redox-sensitive GFP)**: [`1JC0`](https://www.rcsb.org/structure/1JC0)

Each of these variants has been structurally characterized and deposited in the Protein Data Bank (PDB).
Your task is to analyze their differences relative to wild-type avGFP.

## Investigation 1: Loading and Aligning Structures

To begin, load the wild-type GFP structure (*Aequorea victoria* GFP, PDB ID: 1EMA) into PyMOL.
Then, choose one of the GFP variants from the list above and load it as well.

-   What do you notice when both structures are displayed together?
-   How well do they align with each other?
-   What is the root-mean-square deviation (RMSD) between the two structures? How does this value help us understand structural changes?

## Investigation 2: Sequence Comparison

Once you have aligned the structures, examine the amino acid sequences of avGFP and your chosen variant.

-   Where do you see differences in the sequence?
-   How do these differences correlate with changes in structure? Are they clustered in specific regions?
-   Do these sequence differences relate to changes in function, such as fluorescence intensity or stability?

### Investigation 3: Key Residue Interactions

Several residues are critical for GFP function. Two key residues are **Ser205** and **Glu222**, which are involved in chromophore stabilization and fluorescence.

-   What is the distance between oxygen atoms Ser205 and Glu222 in avGFP?
-   Does this distance change in your chosen GFP variant? If so, how might that affect the protein’s function?
-   Can you identify other residues that might interact with the chromophore? What role might these residues play?
