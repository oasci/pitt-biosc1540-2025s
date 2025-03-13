# UniProt

**UniProt (Universal Protein Resource)** is a comprehensive and widely used database that provides curated information on protein sequences, structures, and functions. It serves as a central resource for researchers seeking detailed annotations on protein characteristics, making it a fundamental tool in computational biology and bioinformatics. UniProt integrates data from multiple sources, including experimental findings and computational predictions, to offer a complete view of protein biology.

Researchers use UniProt for a variety of purposes, including identifying protein function and biological roles. Each protein entry in UniProt includes annotations related to its molecular function, biological processes, and cellular localization. These annotations help scientists understand how proteins contribute to cellular mechanisms and disease pathways.

UniProt is also an essential tool for identifying **domains, motifs, and post-translational modifications (PTMs)**. Domains and motifs are conserved regions within proteins that play key structural and functional roles, often dictating interactions with other molecules. PTMs, such as phosphorylation or glycosylation, regulate protein activity and stability, influencing cellular signaling and function. UniProt entries provide detailed information on these features, often linking to experimental studies that validate their significance.

Another valuable feature of UniProt is its ability to link protein sequence data to experimentally determined **Protein Data Bank (PDB) structures**. For proteins with resolved three-dimensional structures, UniProt provides direct access to structural models, enabling researchers to visualize protein architecture and assess functional sites. This integration facilitates structural and functional analysis, aiding in drug discovery and molecular modeling.

UniProt also supports the exploration of **isoforms** generated through **alternative splicing**. Many genes produce multiple protein variants due to alternative splicing events, which can significantly impact protein function and interactions. UniProt provides detailed information on these isoforms, allowing researchers to compare sequence differences and predict functional implications.

## Navigating

Accessing and analyzing protein data in UniProt is a straightforward process that allows researchers to retrieve comprehensive details about protein sequences, structures, and functions.
The platform is designed to provide intuitive search capabilities, making it easy to locate specific protein entries and explore their associated biological information.

To begin using UniProt, open a web browser and navigate to [UniProt](https://www.uniprot.org/). Once on the homepage, use the search bar to enter a protein name, gene name, or accession number.
For instance, searching for [`hemoglobin beta`](https://www.uniprot.org/uniprotkb?query=hemoglobin+beta) retrieves relevant protein entries.

From the search results, select the **canonical UniProt entry** for the protein of interest, such as `HBB_HUMAN` for human hemoglobin beta. This entry provides a detailed overview of the protein, organized into various sections that facilitate functional and structural analysis.

## Information

Each UniProtKB (UniProt Knowledgebase) entry is meticulously organized into various sections to facilitate easy access to specific data.
Below is an overview of these sections, exemplified by the UniProt entry for the human hemoglobin subunit beta (HBB), known by the entry name **HBB_HUMAN**.

### Entry Information

This section provides general details about the entry, including:

-   **Entry Name**: A unique identifier for the protein entry, typically combining the gene name and species. For example, `HBB_HUMAN` denotes the hemoglobin subunit beta in humans.
-   **Accession Number**: A stable, unique identifier assigned to the protein sequence. The primary accession number for `HBB_HUMAN` is [P68871](https://www.uniprot.org/uniprotkb/P68871/entry).
-   **Entry Status**: Indicates whether the entry has been manually annotated and reviewed by UniProtKB curators or not, in other words, if the entry belongs to the Swiss-Prot section of UniProtKB (reviewed) or to the computer-annotated TrEMBL section (unreviewed).

### Protein Names and Origin

This section details the protein's recommended name, alternative names, and its gene name(s). For `HBB_HUMAN`:

-   **Protein Name**: Hemoglobin subunit beta
-   **Gene Name**: HBB
-   **Organism**: [Homo sapiens (Human)](https://www.uniprot.org/taxonomy/9606)

### Function

This section provides any useful information about the protein, mostly biological knowledge.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Function: General function(s) of a protein
-   Miscellaneous: Any relevant information that doesn't fit in any other defined sections
-   Caution: Warning about possible errors and/or grounds for confusion
-   Catalytic activity: Reaction(s) catalyzed by an enzyme
-   Cofactor: Non-protein substance required for enzyme activity
-   Activity regulation: Regulatory mechanism of enzymes, transporters, microbial transcription factors
-   Biophysicochemical properties: Biophysical and physicochemical properties
-   Pathway: Associated metabolic pathways
-   Active site: Amino acid(s) directly involved in the activity of an enzyme
-   Metal binding: Binding site for a metal ion
-   Binding site: Binding site for any chemical group (co-enzyme, prosthetic group, etc.)
-   Site: Any interesting single amino acid site on the sequence
-   Calcium binding: Position(s) of calcium binding region(s) within the protein
-   Zinc finger: Position(s) and type(s) of zinc fingers within the protein
-   DNA binding: Position and type of a DNA-binding domain
-   GO 'Molecular function': Selection of Gene Ontology (GO) terms
-   Keywords 'Molecular function': Selection of controlled vocabulary which summarises the content of an entry
-   Keywords 'Biological process': Selection of controlled vocabulary which summarises the content of an entry
-   Keywords 'Ligand': Selection of controlled vocabulary which summarises the content of an entry
-   Enzyme and pathway databases: Selection of cross-references that point to data collections other than UniProtKB
-   Family databases: Selection of cross-references that point to data collections other than UniProtKB

### Names and taxonomy

This section provides information about the protein and gene name(s) and synonym(s) and about the organism that is the source of the protein sequence.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Protein names: Name and synonyms of the protein
-   Gene names: Name(s) of the gene(s) that code for the protein
-   Encoded on: Organelle or plasmid gene source
-   Organism: Name of the source organism
-   Taxonomic identifier: NCBI unique identifier for the source organism
-   Taxonomic lineage: Taxonomic classification of the source organism
-   Proteomes: Proteome ID and component name for entries that are part of a proteome
-   Virus host: The species that can be infected by a specific virus
-   Organism-specific databases: Selection of cross-references that point to data collections other than UniProtKB

### Subcellular location

This section provides information on the location and the topology of the mature protein in the cell.
The information is filed in different subsections. The current subsections and their content are listed below:

-   Subcellular location: Description of the subcellular location of the mature protein (including isoform locations if available)
-   GO 'Cellular component': Selection of Gene Ontology (GO) terms
-   SwissBioPics: Biological images for the visualization of subcellular location data to enhance the representation of UniProt and Gene Ontology (GO) subcellular location annotations.
-   Transmembrane: Extent of a membrane-spanning region
-   Topological domain: Location of non-membrane regions of membrane-spanning proteins
-   Intramembrane domain: Extent of a region located in a membrane without crossing it
-   Keywords 'Cellular component': Selection of controlled vocabulary which summarises the content of an entry

### Disease/Phenotypes and variants

This section provides information on the disease(s), phenotype(s), and variants associated with a protein.

The information is filed in different subsections, and is manually curated and maintained by UniProt.
The current subsections and their content are listed below:

The data in the Variant Viewer includes both manually curated and automatically imported data from external sources such as dbSNP and ClinVar. For accessing and downloading variant data, please check out the Proteins API.

-   Involvement in disease: Description of the disease(s) associated with the deficiency of a protein
-   Natural variant: Natural variants of the protein that are associated with one of the diseases listed above
-   Allergenic properties: Information relevant to allergenic proteins
-   Biotechnological use: Use of a specific protein in the biotechnological industry
-   Toxic dose: Lethal, paralytic, or effect dose, or lethal concentration of a toxin
-   Pharmaceutical use: Description of the use of a protein as a pharmaceutical drug
-   Disruption phenotype: Description of the effects caused by the disruption of a protein-encoding gene
-   Mutagenesis: Site which has been experimentally altered by mutagenesis
-   Keywords 'Disease': Selection of controlled vocabulary which summarises the content of an entry
-   Some chemistry and organism-specific databases: Selection of cross-references that point to data collections other than UniProtKB

### PTM/Processing

This section describes post-translational modifications (PTMs) and/or processing events.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Initiator methionine: Cleaved initiator methionine
-   Signal: Sequence targeting proteins to the secretory pathway or periplasmic space
-   Propeptide: Part of a protein that is cleaved during maturation or activation
-   Transit peptide: Extent of a transit peptide for organelle targeting
-   Chain: Extent of a polypeptide chain in the mature protein
-   Peptide: Extent of an active peptide in the mature protein
-   Modified residue: Modified residues excluding lipids, glycans and protein crosslinks
-   Lipidation: Covalently attached lipid group(s)
-   Glycosylation: Covalently attached glycan group(s)
-   Disulfide bond: Cysteine residues participating in disulfide bonds
-   Cross-link: Residues participating in covalent linkage(s) between proteins
-   Post-translational modification: Description of post-translational modifications
-   Keywords 'PTM': Selection of controlled vocabulary which summarises the content of an entry
-   Proteomics and PTM databases: Selection of cross-references that point to data collections other than UniProtKB

### Expression

This section provides information on the expression of a gene at the mRNA or protein level in cells or in tissues of multicellular organisms.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Tissue specificity: Description of the expression of a gene in different tissues
-   Developmental stage: Description of how the expression of a gene varies according to the stage of cell, tissue or organism development
-   Induction: Description of the effects of environmental factors on the gene expression
-   Keywords 'Developmental stage': Selection of controlled vocabulary which summarises the content of an entry
-   Gene expression databases: Selection of cross-references that point to data collections other than UniProtKB

### Interaction

This section provides information on the quaternary structure of a protein and on interaction(s) with other proteins or protein complexes.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Subunit structure: Description of the quaternary structure of a protein
-   Binary interactions: Information relevant to binary protein-protein interactions
-   Complex viewer: Visualisation of protein complexes
-   Protein-protein interaction databases: Selection of cross-references that point to data collections other than UniProtKB

### Structure

This section provides information on the tertiary and secondary structure of a protein.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Turn: Turns within the experimentally determined protein structure
-   Beta strand: Beta strand regions within the experimentally determined protein structure
-   Helix: Helical regions within the experimentally determined protein structure
-   3D structure databases: Cross-references that point to data collections other than UniProtKB (i.e. PDB)

### Family and Domains

This section provides information on sequence similarities with other proteins and the domain(s) present in a protein.

The information is filed in different subsections. The current subsections and their content are listed below:

-   Domain: Denotes the position and type of each modular protein domain
-   Repeat: Denotes the positions of repeated sequence motifs or repeated domains
-   Compositional bias: Region of compositional bias in the protein
-   Region: Region of interest in the sequence
-   Coiled coil: Denotes the positions of regions of coiled coil within the protein
-   Motif: Short (up to 20 amino acids) sequence motif of biological interest
-   Domain (non-positional): Description of the domain(s) present in a protein
-   Sequence similarities: Description of the sequence similaritie(s) with other proteins
-   Keywords 'Domain': Selection of controlled vocabulary which summarises the content of an entry
-   Phylogenomic databases: Selection of cross-references that point to data collections other than UniProtKB
-   Family and domain databases: Selection of cross-references that point to data collections other than UniProtKB

### Sequence

This section displays by default the canonical protein sequence and upon request all isoforms described in the entry. It also includes information pertinent to the sequence(s), including length and molecular weight. The information is filed in different subsections. The current subsections and their content are listed below:

-   Sequence status: Indicates if the protein sequence is complete or not
-   Sequence processing: Indicates if the mature form of a protein is derived by processing of a precursor
-   Sequence: Canonical protein sequence data and list of described protein isoforms
-   Alternative products: Description of the different proteins generated from the same gene
-   Computationally mapped potential isoform sequences: Automatic gene-centric isoform mapping for eukaryotic reference proteome sequences
-   Sequence caution: Warning about possible errors related to the protein sequence
-   RNA editing: Description of amino acid change(s) due to RNA editing
-   Mass spectrometry: Information derived from mass spectrometry experiments
-   Polymorphism: Description of polymorphism(s)
-   Natural variant: Natural variants documented for the protein
-   Alternative sequence: Amino acid change(s) producing alternate protein isoforms
-   Sequence uncertainty: Regions of uncertainty in the sequence
-   Sequence conflict: Description of sequence discrepancies of unknown origin
-   Non-adjacent residues: Indicates that two residues in a sequence are not consecutive
-   Non-terminal residue: The sequence is incomplete. Indicate that a residue is not the terminal residue of the complete protein
-   Non-standard residue: Occurence of non-standard amino acids (selenocysteine and pyrrolysine) in the protein sequence
-   Sequence databases: Selection of cross-references that point to data collections other than UniProtKB
-   Genome annotation databases: Selection of cross-references that point to data collections other than UniProtKB
-   Genetic variation databases: Selection of cross-references that point to data collections other than UniProtKB
-   Keywords 'Coding sequence diversity': Selection of controlled vocabulary which summarises the content of an entry

### Similar proteins

This section provides links to proteins that are similar to the protein sequence(s) described in this entry at different levels of sequence identity thresholds (100%, 90% and 50%) based on their membership in UniProt Reference Clusters (UniRef).
