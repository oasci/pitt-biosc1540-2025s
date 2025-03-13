# PyMOL

PyMOL is an open-source molecular visualization tool widely used in structural biology.
It provides a powerful interface for visualizing and analyzing macromolecular structures, including proteins, nucleic acids, and small molecules.
Researchers and students use PyMOL for various applications such as protein visualization, structural alignment, molecular modeling, and figure generation for publications.
Due to its versatility and robust rendering capabilities, PyMOL has become a standard tool in the field of computational biology.

## Installing PyMOL

PyMOL is a widely used molecular visualization tool that is available for multiple operating systems, including Windows, macOS, and Linux.
Depending on the user's needs, PyMOL is available in two versions: a free open-source version and a commercial version offered by Schrödinger, which includes additional features and official support.

The official source for PyMOL downloads and documentation is [https://pymol.org](https://pymol.org). Users should always download PyMOL from trusted sources to ensure they are using a secure and up-to-date version of the software.

The open-source version of PyMOL provides essential molecular visualization and analysis tools and is maintained by the community. It is a great option for students, researchers, and educators who require basic functionality without additional costs.

The commercial version, provided by Schrödinger, includes enhanced performance, official support, additional plugins, and a more user-friendly interface. This version is recommended for professional users and institutions requiring advanced features and dedicated support.

### Windows

For Windows users, PyMOL is distributed as an executable installer, which simplifies the installation process. Users simply need to follow the setup wizard to install the software and configure any necessary dependencies.

### macOS

For macOS, PyMOL is available as a disk image (.dmg) file, which can be installed by dragging the application into the Applications folder.

### Linux

For Linux users, PyMOL can be installed through package managers such as apt (for Debian-based distributions) or via source compilation. Users may need to install additional dependencies, such as Python and OpenGL libraries, to ensure full functionality.

## Loading Molecular Structures

PyMOL allows users to load and visualize molecular structures from various sources, including online repositories and local files. Understanding how to load structures efficiently is fundamental for analyzing biomolecular interactions, performing structural modifications, and generating publication-quality images.

### Fetch

One of PyMOL’s most convenient features is its ability to fetch structures directly from the Protein Data Bank (PDB). This requires an internet connection and allows users to retrieve molecular structures using their unique PDB identifiers.

To fetch a structure from the PDB, use the following command in the PyMOL command line:
```bash
fetch 1HHO
```
This command will download and load the PDB file for the specified identifier (e.g., 1HHO, which corresponds to human deoxyhemoglobin). The fetched structure is automatically displayed in the PyMOL viewer.

### Local

If a PDB file is stored locally on a user’s computer, it can be loaded using the `load` command:

```bash
load my_protein.pdb
```

This command will open the specified PDB file (`my_protein.pdb`) and display the molecular structure in PyMOL. This method is useful for working with custom molecular models, modified structures, or structures downloaded separately from the PDB.

### Other

PyMOL supports various molecular file formats beyond PDB, including MOL, SDF, CIF, and XYZ, which are commonly used for small molecules, ligands, and crystallographic data.

-   **MOL and SDF files** (commonly used for small molecules and ligands):

```bash
load ligand.sdf
```

-   **CIF files** (used for crystallographic information):

```bash
load structure.cif
```

-   **XYZ files** (used in quantum chemistry applications):

```bash
load molecule.xyz
```

These file formats allow users to work with a diverse range of molecular data, from large protein complexes to individual ligands and drug-like molecules.

### Managing Loaded Structures

Once a structure is loaded, PyMOL assigns it a default object name, usually based on the file name or PDB ID.
Users can rename objects, hide/show specific elements, and change visualization styles to enhance clarity.
The following commands can help manage loaded structures:

```bash
set_name 1HHO, hemoglobin
hide everything, hemoglobin
show cartoon, hemoglobin
```

These commands rename the object to "hemoglobin," hide all default representations, and display the structure using a cartoon visualization.

## Viewing Molecular Structures

PyMOL allows users to manipulate structures interactively with the mouse. The default controls include:

- **Left-click and drag**: Rotate the structure.
- **Right-click and drag**: Zoom in and out.
- **Middle-click and drag**: Translate (move) the structure in the viewport.

For users with trackpads or limited mouse controls, PyMOL offers an alternative interaction mode known as **1-Button Viewing Mode**. This mode is particularly useful for laptop users who rely on a trackpad.

To enable **1-Button Viewing Mode**, enter the following command:

```bash
set mouse, 1
```

Alternatively, navigate to **Settings > Mouse Mode > 1-Button Viewing** in the graphical user interface. This mode allows users to manipulate structures using a single-button input along with keyboard modifiers (e.g., holding Shift or Ctrl for different actions).

### Centering on a Selection

Focusing on specific parts of a molecular structure can be crucial for detailed analysis. The `center` command allows users to recenter the view on a particular chain, residue, or atom. For example, to center the view on **chain A**, use:

```bash
center chain A
```

Similarly, users can center on a specific residue:

```bash
center resi 100
```

Or focus on a specific atom:

```bash
center name CA
```

This feature ensures that users can quickly navigate complex structures and highlight key molecular regions.

### Background Color

Adjusting the background color in PyMOL can improve visibility and contrast, especially when preparing figures for presentations or publications. The default background is black, but users can change it to white or any other color for better clarity.

To switch to a white background:

```bash
bg_color white
```

To revert to the default black background:

```bash
bg_color black
```

Other colors such as blue, gray, or gradient backgrounds can also be used to enhance visualization. Users can experiment with different colors based on their preferences or publication requirements.

## Representations and Visual Styles

Different representations emphasize various aspects of a molecular structure. Users can switch between representations using PyMOL commands to better understand protein architecture, atomic interactions, and solvent accessibility.

- **Cartoon Representation (Secondary Structure Visualization)**
  The **cartoon** representation is commonly used for proteins as it highlights secondary structure elements such as alpha-helices, beta-sheets, and loops.

  ```bash
  show cartoon
  ```

  This mode is particularly useful for analyzing protein folding and domain organization.

- **Stick Representation (Atomic Bonds and Ligands)**
  The **stick** representation emphasizes atomic connectivity and is useful for visualizing small molecules, ligands, and protein-ligand interactions.

  ```bash
  show sticks
  ```

  Users can also apply this representation to specific molecular components, such as ligands:

  ```bash
  show sticks, resn ATP
  ```

- **Surface Representation (Solvent Accessibility and Binding Sites)**
  The **surface** representation provides a visualization of the molecular surface, which helps in assessing solvent accessibility and identifying binding pockets.

  ```bash
  show surface
  ```

  To focus the surface representation on a specific selection, such as a ligand-binding site:

  ```bash
  show surface, resn ATP
  ```

Applying appropriate coloring schemes enhances molecular visualization by distinguishing structural features and highlighting functional components.

- **Coloring by Chain**
  Assigning distinct colors to different chains improves clarity when analyzing multi-chain protein complexes or protein-DNA interactions.

  ```bash
  color cyan, chain A
  color magenta, chain B
  ```

  This makes it easy to differentiate between separate protein subunits or domains.

- **Coloring by Secondary Structure**
  PyMOL allows users to color molecules based on their secondary structure, using a gradient to indicate structural variation.

  ```bash
  spectrum b, blue_white_red, minimum=0, maximum=100
  ```

  This gradient coloring scheme is particularly useful for analyzing temperature factors (B-factors), which indicate atomic flexibility and dynamic regions of a protein.

- **Custom Color Assignments**
  Users can define specific colors for residues, atoms, or structural features:

  ```bash
  color yellow, resi 50
  color red, name CA
  ```

  These commands highlight specific residues or atom types, which is useful for identifying active sites or functional residues.

By utilizing various molecular representations and coloring schemes, users can tailor visualizations to their specific research needs, making structural interpretation more effective and aesthetically appealing.

## Selecting and Modifying Structures

Selections in PyMOL provide a way to isolate specific structural elements for visualization or analysis. Selections can be named and referenced in subsequent commands.

- **Selecting a Specific Residue**
  Users can select individual residues using the `select` command. The selection is stored under a user-defined name:

  ```bash
  select my_res, resi 50
  ```

  This creates a selection named `my_res` that includes residue 50. The selection can be used in further commands, such as changing representations:

  ```bash
  show sticks, my_res
  ```

- **Selecting a Ligand**
  Ligands are typically represented by residue names (resn). To select a ligand such as ATP:

  ```bash
  select ligand, resn ATP
  ```

  This selection can be highlighted using:

  ```bash
  color red, ligand
  ```

- **Selecting an Entire Chain**
  To select a specific protein chain, use:

  ```bash
  select chainA, chain A
  ```

  This selection allows users to manipulate and analyze an entire subunit independently.

### Measuring Distances and Angles

Structural measurements such as interatomic distances and angles are crucial for understanding molecular interactions, binding sites, and conformational changes.

- **Measuring Distances Between Atoms**
  The `distance` command allows users to measure distances between atoms. For example, to measure the distance between the alpha carbons (CA) of residues 50 and 100:

  ```bash
  distance dist1, resi 50 and name CA, resi 100 and name CA
  ```

  The result will be displayed as a labeled dashed line between the two atoms.

- **Measuring Angles**
  To measure the angle formed by three residues (e.g., 50, 75, and 100):

  ```bash
  angle ang1, resi 50, resi 75, resi 100
  ```

  This calculation is useful for analyzing structural bends, hinge motions, and relative orientations of molecular components.

### Detecting Steric Clashes

Steric clashes occur when atoms are too close to each other, indicating unfavorable interactions. PyMOL can visualize these clashes using the `cgo_clash` representation.

- **Identifying Close Contacts**

  ```bash
  show cgo_clash
  ```

  This highlights steric clashes within the structure, helping researchers identify problematic regions that may require further refinement or adjustments.

## Structural Alignments and Comparisons

Structural superposition allows researchers to compare the spatial arrangement of atoms in different molecules. This is particularly useful when analyzing protein homologs, mutant structures, or ligand-bound versus unbound forms.

To align two structures using PyMOL’s `align` function, first fetch or load the structures:

```bash
fetch 1HHO
fetch 2HBB
align 2HBB, 1HHO
```

In this example, the structure of **2HBB** is aligned to **1HHO**. The `align` function performs sequence-based alignment followed by structural superposition, minimizing RMSD between corresponding atoms.

For more refined control, users can specify chains or particular regions for alignment:

```bash
align 2HBB and chain A, 1HHO and chain A
```

This aligns only chain A of **2HBB** to chain A of **1HHO**, which is useful for multi-chain complexes.

The **root-mean-square deviation (RMSD)** quantifies structural similarity by measuring the average distance between corresponding atoms of two superimposed structures. Lower RMSD values indicate greater similarity.

To compute RMSD between two structures:

```bash
rms_cur all, 1HHO, 2HBB
```

This calculates the RMSD of all atoms in **1HHO** and **2HBB** without performing additional structural fitting.

Alternatively, users can compute RMSD for a specific selection, such as backbone atoms, to focus on structural core elements:

```bash
rms_cur backbone, 1HHO, 2HBB
```

This method is commonly used for comparing conserved regions while ignoring side-chain variability.

## Ligand and Binding Site Analysis

To analyze ligand interactions, begin by displaying the ligand in an appropriate representation that highlights its structural features. One commonly used approach is the stick representation, which provides a clear visualization of the ligand's atomic structure. In PyMOL, this can be achieved using the following command:

```bash
show sticks, resn ATP
```

This command ensures that the ligand, in this case, ATP, is shown in a stick model, making it easier to observe its conformation and position within the binding site.

Once the ligand is visualized, it is important to analyze its interactions with surrounding residues. One key type of interaction is hydrogen bonding, which stabilizes ligand binding and contributes to molecular recognition. PyMOL allows users to highlight hydrogen bonds between the ligand and specific residues within the protein. This can be done using the command:

```bash
distance hbonds, (resn ATP), (chain A)
```

This command calculates and displays hydrogen bonds between the ligand (ATP) and the residues in chain A of the protein. By examining these bonds, researchers can gain insights into the strength and specificity of ligand binding.

Beyond hydrogen bonds, other interactions such as hydrophobic contacts, electrostatic interactions, and van der Waals forces play a role in ligand binding. Computational analysis tools provide further options to explore these interactions, allowing for a comprehensive understanding of molecular binding mechanisms.

By applying these visualization and analysis techniques, students can develop a deeper understanding of how ligands interact with their target proteins. This knowledge is foundational for fields such as drug design, enzyme kinetics, and biomolecular engineering.

### Surface and Pocket Visualization

To better understand the shape and accessibility of a protein, a molecular surface representation can be applied. This representation helps visualize the overall topology of the protein and highlights regions available for interactions. In PyMOL, this can be achieved with the following command:

```bash
show surface
```

This command renders the molecular surface of the structure, making it easier to identify protrusions, cavities, and possible interaction sites. The color and transparency of the surface can be adjusted to enhance clarity and contrast between different structural features.

Solvent-exposed residues can sometimes obscure key features of a protein’s binding pocket. To focus on the core structural elements and binding sites, removing solvent-exposed residues can be beneficial. This can be done using the command:

```bash
remove solvent
```

Executing this command removes water molecules and other solvent components, simplifying the visualization and making it easier to analyze the protein’s interaction surfaces. This step is particularly useful when studying deeply buried binding pockets or hydrophobic regions within the protein.

## Electron Density

To analyze electron density data, structural biologists often retrieve precomputed electron density maps from the Protein Data Bank (PDB). PyMOL allows users to fetch and visualize these maps directly, provided they are available for the given structure. This can be achieved using the following command:

```bash
fetch 1HHO, type=2fofc
```

This command retrieves the 2Fo-Fc electron density map for the protein with the PDB identifier 1HHO. The 2Fo-Fc map represents a weighted electron density map that highlights well-ordered regions of the structure, making it useful for validating atomic positions.

Once the electron density map is loaded, users can visualize it in PyMOL using the `isosurface` command to generate a three-dimensional contour representation. Adjusting contour levels and transparency settings can help clarify electron density features around specific regions of interest, such as ligand binding sites or flexible loops.

Understanding electron density maps is fundamental for assessing structural accuracy and improving molecular models. This process plays a significant role in fields such as drug design, structural refinement, and protein engineering, where precise atomic details are essential.

## Protonation

To ensure that a molecular structure includes hydrogen atoms, which are often missing in crystallographic models, PyMOL provides a command to add them automatically:

```bash
h_add
```

This command generates and places hydrogen atoms based on standard valency rules and atomic environments. Proper hydrogen placement is critical for studying hydrogen bonding networks, electrostatic interactions, and energy minimization in molecular simulations.

Histidine is unique among amino acids because its protonation state can vary depending on the local environment and pH. The two common protonation states of histidine are:

- **HIE (Neutral, Proton on ε-nitrogen)**
- **HIP (Positively Charged, Proton on Both ε and δ-nitrogens)**

To modify the protonation state of histidine residues in PyMOL, use the following command:

```bash
alter resn HIS, resn HIE
```

This command alters all histidine residues (HIS) in the structure to the epsilon-protonated form (HIE). Adjusting histidine protonation is particularly important when preparing structures for pKa calculations, molecular docking, or proton-coupled transport studies.
