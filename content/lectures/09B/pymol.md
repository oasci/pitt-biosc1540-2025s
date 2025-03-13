## PyMOL

- **What is PyMOL?**
  - Open-source molecular visualization tool for structural biology.
  - Used for **protein visualization, structural alignment, molecular modeling, and figure generation**.
- **Why Use PyMOL?**
  - Interactive, publication-quality visualization.
  - Supports **PDB file handling, ligand interactions, electron density fitting, and scripting**.

## Installation

- Official source: [https://pymol.org](https://pymol.org)
- Available for **Windows, macOS, and Linux**.
- Free **open-source** version and **Schrödinger commercial version**.

## Launching PyMOL

- Running PyMOL from **GUI mode** vs. **command-line mode**.
- Understanding the **PyMOL interface**:
  - **Command Line** – Enter commands directly.
  - **Object Control Panel** – Manage loaded structures.
  - **View Window** – Interactive 3D molecular viewer.

## Loading and Viewing Molecular Structures

### Loading PDB Structures

- **Fetching structures directly from PDB**:
  ```bash
  fetch 1HHO
  ```
- **Loading local PDB files**:
  ```bash
  load my_protein.pdb
  ```

### Basic Navigation

- Mouse controls for **rotating, zooming, translating**.
- **Centering on a selection**:
  ```bash
  center chain A
  ```
- **Changing background color** for better visibility:
  ```bash
  bg_color white
  ```

## Representations and Visual Styles

### Changing Molecular Representations

- **Cartoon view** (secondary structure visualization):
  ```bash
  show cartoon
  ```
- **Stick view** (atomic bonds):
  ```bash
  show sticks
  ```
- **Surface representation** (solvent accessibility):
  ```bash
  show surface
  ```

### Coloring Schemes

- **Coloring by chain**:
  ```bash
  color cyan, chain A
  color magenta, chain B
  ```
- **Coloring by secondary structure**:
  ```bash
  spectrum b, blue_white_red, minimum=0, maximum=100
  ```

## Selecting and Modifying Structures

### Selecting Specific Atoms, Residues, or Chains\

- **Selecting a specific residue**:
  ```bash
  select my_res, resi 50
  ```
- **Selecting a ligand**:
  ```bash
  select ligand, resn ATP
  ```

###  Measuring Distances and Angles

- **Measuring distances between atoms**:
  ```bash
  distance dist1, resi 50 and name CA, resi 100 and name CA
  ```
- **Measuring angles**:
  ```bash
  angle ang1, resi 50, resi 75, resi 100
  ```

###  Detecting Steric Clashes

- **Identifying close contacts**:
  ```bash
  show cgo_clash
  ```

## Structural Alignments and Comparisons

### Superimposing Two Structures

- **Aligning two structures using PyMOL’s `align` function**:
  ```bash
  fetch 1HHO
  fetch 2HBB
  align 2HBB, 1HHO
  ```

### RMSD Calculation
- **Computing root-mean-square deviation (RMSD)**:
  ```bash
  rms_cur all, 1HHO, 2HBB
  ```

## Ligand and Binding Site Analysis

### Identifying Ligand Interactions

- **Displaying ligands in stick representation**:
  ```bash
  show sticks, resn ATP
  ```
- **Highlighting hydrogen bonds**:
  ```bash
  distance hbonds, (resn ATP), (chain A)
  ```

### Surface and Pocket Visualization

- **Showing molecular surface**:
  ```bash
  show surface
  ```
- **Hiding solvent-exposed residues**:
  ```bash
  remove solvent
  ```

## Electron Density

- **Fetching and visualizing electron density maps** (if available from PDB):
  ```bash
  fetch 1HHO, type=2fofc
  ```

## Protonation

### **8.2. Adding Hydrogens and Modifying Protonation States**
- **Adding hydrogens**:
  ```bash
  h_add
  ```
- **Changing protonation states of histidine**:
  ```bash
  alter resn HIS, resn HIE
  ```


## Saving and Exporting PyMOL Sessions

### Saving PyMOL Sessions
- **Save the current PyMOL state for later use**:
  ```bash
  save my_session.pse
  ```

### Exporting Images for Publication

- **Adjusting ray tracing for high-quality rendering**:
  ```bash
  ray
  ```
- **Saving an image in PNG format**:
  ```bash
  png my_image.png, dpi=300
  ```


## Scripting and Automation in PyMOL

### Writing PyMOL Scripts

PyMOL allows **batch processing** and **automating workflows** using scripts.\nExample script to load, color, and align structures:

```python
load 1HHO.pdb
load 2HBB.pdb
color blue, 1HHO
color red, 2HBB
align 2HBB, 1HHO
save aligned.pse
```

### Running a PyMOL Script

- Save script as `my_script.pml`, then run:
  ```bash
  @my_script.pml
  ```

