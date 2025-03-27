<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>Lecture 11B</b><br>
    Protein structure prediction
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Methodology
</h2>
<p style="text-align: center;">
    <b>Date:</b> Mar 27, 2025
</p>

In this activity, you will predict protein structures of *Listeria monocytogenes* [PrsA2](https://www.uniprot.org/uniprotkb/Q8Y557/entry).

```text
> PrsA2
CGGGGDVVKTDSGDVTKDELYDAMKDKYGSEFVQQLTFEKILGDKYKVSDE
DVDKKFNEYKSQYGDQFSAVLTQSGLTEKSFKSQLKYNLLVQKATEANTDT
SDKTLKKYYETWQPDITVSHILVADENKAKEVEQKLKDGEKFADLAKEYST
DTATKDNGGQLAPFGPGKMDPAFEKAAYALKNKGDISAPVKTQYGYHIIQM
DKPATKTTFEKDKKAVKASYLESQLTTENMQKTLKKEYKDANVKVEDKDLK
DAFKDFDGSSSSDSDSSK
```

## Homology model

In this part of the activity, you will be using [SWISS-MODEL](https://doi.org/10.1093/nar/gky427) to predict protein structures.
This homology modeling approach uses standard workflow of (1) searching for similar sequences, (2) ranking structural templates and alignments, (3) building the structure from the selected templates, and (4) estimate the quality of the predicted structure.

### Template search

1.  Go to [SWISS-MODEL](https://swissmodel.expasy.org/interactive).
2.  Copy and paste the PrsA2 FASTA file from above into the "Target Sequence(s)" textbox.
3.  Click the "Search For Templates" button.

SWISS-MODEL will search a custom database called the [SWISS-MODEL template library (SMTL)](https://doi.org/10.1093/nar/gku340), which originally contains structures from the [Protein Data Bank](https://www.rcsb.org/) and, more recently, the [AlphaFold Protein Structure Database](https://swissmodel.expasy.org/docs/blog#afdbTemplates).

**Question 1:** What does GMQE stand for and how should it inform your template selection?

**Question 2:** How does QSQE compare to GMQE and when should it be used?

**Question 3:** What is the full label of the top scoring experimental template you should use?

### Model building

1.  Select both `6vj4.1.A` and `5htf.1.B` in the list of Templates and click the "Build Models" button on the top right.
    It can take a few minutes to build these models.
2.  Once they are finished, click "Download files" and then "PDB Format" for each model.
    We will use these later.
3.  Then, open the "Structure Assessment" for each model.

**Question 4:** How are you supposed to interpret Ramachandran plots of your protein structure prediction?

**Question 5:** Why would SWISS-MODEL give separate Ramachandran plots for glycine and proline?

**Question 6:** What is the MolProbity score for `5htf.1.B`?

**Question 7:** What does MolProbity mean?
How does this compare to the model from `6vj4.1.A`, and what is your interpretation of this difference?

## AlphaFold

You will be using [AlphaFold 3](https://doi.org/10.1038/s41586-024-07487-w) to predict the same PrsA2 structure.

1.  Go to the [AlphaFold Server](https://alphafoldserver.com/) and log into your account.
    Please make an account if you do not already have one.
2.  Ensure that you have one entity for the job where you can paste a sequence.
    If there are no entities shown, just click the "Add entity" button on the left.
3.  The entity type should be "Protein", Copies should be "2", and you should paste the whole FASTA sequence (including the `>` header).
4.  Click "Continue and preview job" and check that the length of the protein sequence is `273`.
5.  Click "Confirm and submit job" and wait a few minutes for the prediction to finish.
6.  Once finished, click on the job name and then "Download" at the top.
    Extract the zip file, which will contain `.cif` files which contain the predicted structures.
    The file that ends in `model_0.cif` is the top scoring prediction from AlphaFold 3.

**Question 8:** Explain plDDT and how is it computed.
Are there any regions of the predicted protein structure that we should be more skeptical of?
Why would AlphaFold 3 be less confident in these regions?
Hint: Examine the biophysical properties of the last 10 amino acids of the protein sequence.
Think about what non-covalent interactions would be present between these residues and water.

**Question 9:** What is ipTM and how is it computed?
How confident is AlphaFold 3 on this protein-protein interaction?

## PyMOL

Now, we are going to analyze these structures using PyMOL.
You should already have the protein structure predictions downloaded from the previous steps.

## Reference structure

Please download the *Lm* [PrsA1](https://www.uniprot.org/uniprotkb/Q8Y759/entry) structure at [5HTF](https://www.rcsb.org/structure/5HTF).
Since we do not have an experimental [PrsA2](https://www.uniprot.org/uniprotkb/Q8Y557/entry) structure, we will use PrsA1 as related reference.
We can evaluate sequence similarities using a multiple sequence aligner program called MUSCLE.

```text
CLUSTAL multiple sequence alignment by MUSCLE (3.8)


sp|Q8Y557|PRSA2_LISMO      -MKKKLILGLVMMMALFSLAACGGGGDVVKTDSGDVTKDELYDAMKDKYGSEFVQQLTFE
sp|Q8Y759|PRSA1_LISMO      MTKLKKVMISVIAATLLLLAGCGSSA-VIKTDAGSVTQDELYEAMKTTYGNEVVQQLTFK
                             * * ::  *:  :*: **.**... *:***:*.**:****:*** .**.*.******:

sp|Q8Y557|PRSA2_LISMO      KILGDKYKVSDEDVDKKFNEYKSQYGDQFSAVLTQSGLTEKSFKSQLKYNLLVQKATEAN
sp|Q8Y759|PRSA1_LISMO      KILEDKYTVTEKEVNAEYKKYEEQYGDSFESTLSSNNLTKTSFKENLEYNLLVQKATEAN
                           *** ***.*::::*: ::::*:.****.*.:.*:...**:.***.:*:************

sp|Q8Y557|PRSA2_LISMO      TDTSDKTLKKYYETWQPDITVSHILVADENKAKEVEQKLKDGEKFADLAKEYSTDTATKD
sp|Q8Y759|PRSA1_LISMO      MDVSESKLKAYYKTWEPDITVRHILVDDEATAKEIQTKLKNGEKFTDLAKEYSTDTATST
                            *.*:..** **:**:***** **** ** .***:: ***:****:************.

sp|Q8Y557|PRSA2_LISMO      NGGQLAPFGPGKMDPAFEKAAYALKNKGDISAPVKTQYGYHIIQMDKPATKTTFEKDKKA
sp|Q8Y759|PRSA1_LISMO      NGGLLDPFGPGEMDETFEKAAYALENKDDVSGIVKSTYGYHLIQLVKKTEKGTYAKEKAN
                           *** * *****:** :********:**.*:*. **: ****:**: * : * *: *:*

sp|Q8Y557|PRSA2_LISMO      VKASYLESQLTTENMQKTLKKEYKDANVKVEDKDLKDAFKDFDGSSSSDSDSSK-
sp|Q8Y759|PRSA1_LISMO      VKAAYIKSQLTSENMTAALKKELKAANIDIKDSDLKDAFADYTSTSSTSSTTTSN
                           ***:*::****:***  :**** * **:.::*.****** *: .:**:.* ::.
```

The consensus line, positioned between the aligned sequences, summarizes how conserved each position is across the sequences succinctly.
In this line, an asterisk (`*`) shows that the amino acid in that column is exactly the same in every sequence, highlighting complete conservation.
A colon (`:`) indicates that although the residues are not identical, they share strong biochemical similarities—suggesting that these positions might fulfill similar roles in the protein’s structure or function.
A period (`.`) denotes a weaker level of similarity, where the residues are somewhat alike but not as closely matched as those marked by a colon.
Finally, when there is a blank space, it signals that there is little to no similarity at that particular position.

### Analysis

We first need to align the structures to begin a comparative analysis.
Be sure to remove all non-protein atoms and also remove the hydrogens.

**Question 10:** Align all alpha carbons of your SWISS-MODEL structure to `5htf`.
What is the RMSD of the 488 atoms?

**Question 11:** Align all alpha carbons of your AlphaFold 3 structure to `5htf`.
What is the RMSD of the 369 atoms?

**Question 12:** Which predicted structure is most similar to `5htf`?
How did you come to this conclusion with only these alignments?
Are these alignments robust to evaluate similarity?

Create a selection called "5htf-b" that only contains chain B of the `5htf` structure.
Hint: You can name a selection by renaming a current one.
Do the same for your swiss model by calling it "swiss-b".

**Question 13:** Align the "swiss-b" selection to the "5htf-b" selection.
What is the RMSD?

Create your AlphaFold 3 chain selection and call it "af3-b".

**Question 14:** Align the "af3-b" selection to the "5htf-b" selection.
What is the RMSD?

**Question 15:** While examining only the B chains, which prediction is the most structurally similar to `5htf`?
Explain if this surprising or unexpected.

**Question 16:** Center your PyMOL viewport to the selection `model 5htf and chain B and resi 228`.
Please explain why the `5htf` structure would be missing the atomic structure here as denoted by the dashed lines.
Are the differences between the SWISS-MODEL and AlphaFold 3 important in this region?

**Question 17:** Center your PyMOL viewport to the selection `model 5htf and chain B and resi 25`.
How does the SWISS-MODEL structure compare to `5htf` in this region?
Hint: examine the backbone similarity and side-chain positions.

**Question 18:** Center your PyMOL viewport to the selection `model 5htf and chain B and resi 25`.
How does the AlphaFold 3 structure compare to SWISS-MODEL in this region?
Hint: You might want to align this section in AlphaFold 3 to your SWISS-MODEL.
