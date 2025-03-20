<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>Lecture 10B</b><br>
    Atomistic insight
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Methodology
</h2>
<p style="text-align: center;">
    <b>Date:</b> Mar 20, 2025
</p>

In this activity, your group will analyze a short molecular dynamics (MD) simulation of PrsA2-LLO interactions at two different conditions: pH 7 and pH 5.
You will use PyMOL to gain atomistic insights into structural differences between the simulations.
The goal is to understand how changes in molecular interactions influence biological function.

## Simulation context

You will be provided with two simulations, each containing 41 frames with

-   [LLO](https://www.uniprot.org/uniprotkb/P13128/entry), a pore-forming toxin secreted by *Listeria monocytogenes*;
-   Two [PrsA2](https://www.uniprot.org/uniprotkb/Q8Y557/entry) monomers that form a dimer and assist with folding LLO.

One simulation was ran at pH 7 and one at pH 5.

## Loading structures

First, you need to load the initial structures (in PDB format) for the [pH 7](/data/md/prsa2-llo/prsa2-llo-ph7.pdb){:download="prsa2-llo-ph7.pdb"} and [pH 5](/data/md/prsa2-llo/prsa2-llo-ph5.pdb){:download="prsa2-llo-ph5.pdb"} simulations.
You can download the structures by clicking the link in the previous sentence, or use the [`load` command](https://pymolwiki.org/index.php/Load) with the URLs.

```bash
load https://github.com/oasci/pitt-biosc1540-2025s/raw/refs/heads/main/content/data/md/prsa2-llo/prsa2-llo-ph7.pdb
load https://github.com/oasci/pitt-biosc1540-2025s/raw/refs/heads/main/content/data/md/prsa2-llo/prsa2-llo-ph5.pdb
```

## Loading trajectories

We have to use the [`load_traj`](https://pymolwiki.org/index.php/Load_traj) command to load in the trajectories.
Unfortunately, we are not able to load directly from GitHub so you have to download the trajectories for [ph 7](/data/md/prsa2-llo/prsa2-llo-ph7.dcd){:download="prsa2-llo-ph7.dcd"} and [pH 5](/data/md/prsa2-llo/prsa2-llo-ph5.dcd){:download="prsa2-llo-ph5.dcd"}.

Then, you can load in these trajectories by specifying the path to the downloaded coordinate files.
For example,

```bash
load_traj ~/Downloads/prsa2-llo-ph7.dcd, prsa2-llo-ph7
load_traj ~/Downloads/prsa2-llo-ph5.dcd, prsa2-llo-ph5
```

## Questions

These questions will help guide you through the interpreting simulation data.
The [`select`](https://pymolwiki.org/index.php/Select) and [`center`](https://pymolwiki.org/index.php/Center) commands will come in handy.
Remember to use your [selection algebra](https://pymolwiki.org/index.php/Selection_Algebra).

All questions should be answered in the context of the very first frame of each simulation unless specified otherwise.

### Q01

1.  Align the cholesterol-binding domain of listeriolysin O (LLO), which includes residues 937-1051, of pH 5 to pH 7 in the first frame of your simulation.
    What is the root-mean-square deviation (RMSD)?
    Make sure you have loaded the trajectories into your PyMOL session.
2.  Analyze the secondary structure of this domain throughout the simulation.
    What type of secondary structure (α-helices, β-sheets, or loops) is predominant in this region?

### Q02

1.  Investigate the protonation state of His833 at different pH conditions.
    Compare the protonation state at neutral pH (7) versus an acidic pH (5).
    Does His833 gain or lose a proton in response to the pH change?
2.  Consider how changes in protonation state might alter noncovalent interactions involving His833.
    Identify nearby residues that interact with His833 at different pH levels.
    Does the change in protonation strengthen, weaken, or disrupt these interactions?
    Hint: Use the licorice representation to visualize the side chains of residues close to His833.
3.  Determine whether these altered interactions lead to structural changes in LLO.
    Does the LLO structure shift due to new or broken noncovalent interactions?
    If so, what regions of LLO are affected?
4.  Hypothesize how these structural and interaction changes might affect the binding of PrsA2 to LLO.
    Could these modifications enhance or reduce the affinity of PrsA2 for LLO?
    What implications might this have for LLO’s function in different pH environments?

### Q03

1.  Examine the noncovalent interactions between His972 and Lys467 under different pH conditions.
    What type of interaction is present at pH 7?
2.  Measure the distances between the alpha carbon atoms in the first frame of pH 5 and pH 7 simulations.
    How does the distance fluctuate within each pH condition?
    How does it compare between pH 7 and pH 5?
3.  Predict how these differences could impact the binding of PrsA2 to LLO.
    How might these structural adjustments influence PrsA2 binding affinity?
