<h1 style="margin-bottom: 0.4em; text-align: center;">
    <b>Lecture 14A</b><br>
    Molecular simulations
</h1>
<h2 style="margin-top: 0.0em; text-align: center;">
    Foundations
</h2>
<p style="text-align: center;">
    <b>Date:</b> Apr 15, 2025
</p>

!!! danger "DRAFT"

    This page is a work in progress and is subject to change at any moment.

Building on the foundations from the previous lecture, this session focuses on the practical aspects of setting up and running MD simulations.
We'll walk through the steps involved in preparing a system for simulation.

## Learning objectives

After today, you should have a better understanding of:

1.  Explain why DHFR is a promising drug target.
2.  Select and prepare a protein structure for molecular simulations.
3.  Explain the importance of approximating molecular environments.
4.  Describe periodic boundary conditions and their role in MD simulations.
5.  Explain the role of force field selection and topology generation.
6.  Outline the process of energy minimization and its significance.

## Supplementary material

Relevant content for today's lecture if you are interested.

-   [GROMACS documentation](https://manual.gromacs.org/current/index.html)
-   [Amber documentation](https://ambermd.org/index.php)

<!-- ## Presentation

-   **View:** [slides.com/aalexmmaldonado/biosc1540-l14](https://slides.com/aalexmmaldonado/biosc1540-l14-eb4e42)
-   **Live link:** [slides.com/d/Du95WE4/live](https://slides.com/d/Du95WE4/live)
-   **Download:** [biosc1540-l14.pdf](/lectures/14/biosc1540-l14.pdf)

<iframe src="https://slides.com/aalexmmaldonado/biosc1540-l14-eb4e42/embed?byline=hidden&share=hidden" width="100%" height="600" title="BIOSC 1540: Lecture 14" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->

This final lecture in the MD series focuses on the analysis and interpretation of MD simulation data.
We'll explore common analysis techniques and how to extract meaningful biological insights from simulation trajectories.

## Learning objectives

After today, you should better understand:

1.  Molecular ensembles and their relevance.
2.  Maintaining thermodynamic equilibrium.
3.  Relaxation and production MD simulations.
4.  RMSD and RMSF as conformational changes and flexibility metrics.
5.  Relationship between probability and energy in simulations.

## Supplementary material

Relevant content for today's lecture.

-   Any scientific literature.

<!-- ## Presentation

-   **View:** [slides.com/aalexmmaldonado/biosc1540-l15](https://slides.com/aalexmmaldonado/biosc1540-l15)
-   **Live link:** [slides.com/d/QSAvIIo/live](https://slides.com/d/QSAvIIo/live)
-   **Download:** [biosc1540-l15.pdf](/lectures/15/biosc1540-l15.pdf)

<iframe src="https://slides.com/aalexmmaldonado/biosc1540-l15/embed?byline=hidden&share=hidden" width="100%" height="600" title="BIOSC 1540: Lecture 15" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->

<!--
Notes

- To explain the MD sampling aspect (one long vs. three short), you can use getting from one building to another.
- PMF is a little complicated to explain the meaning, probably just emphasize that it is a "kind" of energy (e.g., kinetic vs. potential).

-->
