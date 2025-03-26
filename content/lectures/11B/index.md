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

In this activity, you will predict protein structures of *Listeria monocytogenes* PrsA2.

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

**Question 1A:** What does GMQE stand for and how should it inform your template selection?

**Question 1B:** How does QSQE compare to GMQE and when should it be used?

**Question 1C:** What is the full label of the top scoring experimental template you should use?

### Model building

1.  Select both `6vj4.1.A` and `5htf.1.B` in the list of Templates and click the "Build Models" button on the top right.
    It can take a few minutes to build these models.
2.  Once they are finished, click "Download files" and then "PDB Format" for each model.
    We will use these later.
3.  Then, open the "Structure Assessment" for each model.

**Question 1D:** How are you supposed to interpret Ramachandran plots of your protein structure prediction?

**Question 1E:** Why would SWISS-MODEL give separate Ramachandran plots for glycine and proline?

**Question 1F:** What is the MolProbity score for `5htf.1.B`?
What does this mean?
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
