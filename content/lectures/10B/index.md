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

### Q01

1. Align the cholesterol-binding domain of listeriolysin O (LLO), which includes residues 937–1051, in the first frame of your simulation.
    Ensure that this domain is properly superimposed to enable meaningful structural comparisons.
2. Calculate the root-mean-square deviation (RMSD) for the cholesterol-binding domain over the course of the simulation.
    What does the RMSD value indicate about the stability of this domain?
    Does the domain maintain its original conformation, or does it undergo significant structural deviations?
3. Analyze the secondary structure of this domain throughout the simulation.
    What type of secondary structure (α-helices, β-sheets, or loops) is predominant in this region?
    How does the secondary structure contribute to its ability to bind cholesterol?

### Q02

1. Investigate the protonation state of His833 at different pH conditions.
    Compare the protonation state at neutral pH (7) versus an acidic pH (5).
    Does His833 gain or lose a proton in response to the pH change?
2. Consider how changes in protonation state might alter noncovalent interactions involving His833.
    Identify nearby residues that interact with His833 at different pH levels.
    Does the change in protonation strengthen, weaken, or disrupt these interactions?
    Hint: Use the licorice representation to visualize the side chains of residues close to His833.
3. Determine whether these altered interactions lead to structural changes in LLO.
    Does the LLO structure shift due to new or broken noncovalent interactions?
    If so, what regions of LLO are affected?
4. Hypothesize how these structural and interaction changes might affect the binding of PrsA2 to LLO.
    Could these modifications enhance or reduce the affinity of PrsA2 for LLO?
    What implications might this have for LLO’s function in different pH environments?

### Q03

1. Analyze the noncovalent interactions between His972 and Asp958 at different pH levels.
    What type of interaction (e.g., hydrogen bond, salt bridge, van der Waals) is present between these residues at pH 7?
    Does this interaction change at pH 5?
2. Identify specific heavy atoms (i.e., non-hydrogen atoms) that should be used to quantify this interaction.
    Which atoms best represent the interaction at pH 7?
    Do the key interacting atoms shift at pH 5?
3. Track the distance between these atoms over the course of the simulation.
    How does this distance fluctuate within each simulation?
    How does it differ when comparing pH 7 and pH 5?
4. Evaluate how these changes could impact the binding of PrsA2 to LLO.
    If the His972-Asp958 interaction strengthens or weakens, what effect might this have on LLO’s overall structure?
    Could this structural alteration enhance or reduce PrsA2’s ability to bind?

### Q04

1.  Examine the noncovalent interactions between His972 and Lys467 under different pH conditions.
    What type of interaction is present at pH 7?
    Does this interaction change at pH 5?
2.  Identify the heavy atoms that should be used to measure this interaction.
    Which atoms are involved at pH 7?
    Do these atoms differ at pH 5?
3.  Measure the distances between these atoms throughout the simulation.
    How does the distance fluctuate within each pH condition?
    How does it compare between pH 7 and pH 5?
4.  Predict how these differences could impact the binding of PrsA2 to LLO.
    If the interaction between His972 and Lys467 changes, does it affect LLO’s conformation?
    How might these structural adjustments influence PrsA2 binding affinity?

### Q05

1.  Investigate the interaction between His122 and His200 at different pH levels.
    What type of noncovalent interaction exists between their side chains at pH 7?
    Does this interaction change when the pH shifts to 5?
2.  Identify the heavy atoms involved in these interactions.
    Which atoms should be used to quantify this interaction at pH 7?
    Are the interacting atoms the same at pH 5?
3.  Track the distance between these atoms during the simulation.
    How does the distance change within each simulation?
    How do the distance trends compare between pH 7 and pH 5?
4.  Analyze potential changes in the side-chain dihedral angles of His122 and His200.
    Are there any significant dihedral shifts that might explain the observed interaction differences?
    How do these dihedral angles influence the stability of the His122-His200 interaction?
5.  Assess how these changes might affect the binding of PrsA2 to LLO.
    Does the interaction between His122 and His200 play a role in stabilizing LLO’s structure?
    If this interaction is altered, could it enhance or weaken PrsA2’s ability to bind?
