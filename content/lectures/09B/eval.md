# Choosing a Structure

Protein structures deposited in the **Protein Data Bank (PDB)** vary in quality and completeness due to differences in experimental methods, resolution, and refinement procedures.
Selecting an appropriate structure is crucial for reliable analysis in molecular modeling, docking, and functional studies.
Additionally, evaluating electron density maps helps assess the accuracy of atomic positioning in crystallographic structures.

## Key features

### Resolution

Resolution is a fundamental property of macromolecular structures obtained through experimental methods such as X-ray crystallography and cryo-electron microscopy. It quantifies the level of detail present in a structure and is measured in **angstroms (Å)**. A lower resolution value corresponds to finer detail, while a higher value indicates lower structural precision.

- **High resolution (< 2.0 Å):** At this level, atomic positions are well-defined, allowing for precise modeling of individual atoms within the protein. Side chains, backbone conformations, and even bound water molecules can often be distinguished with high confidence. Such resolution enables detailed mechanistic studies and accurate computational modeling.
- **Moderate resolution (2.0 - 3.5 Å):** The overall protein backbone remains well-resolved, but atomic details, particularly in flexible regions or side chains, may become less certain. Despite this, the structure is still highly informative for understanding protein function and interactions, especially when complemented with computational refinement techniques.
- **Low resolution (> 4.0 Å):** Structural features such as secondary structure elements (e.g., alpha-helices and beta-sheets) are still discernible, but atomic-level details are not. These structures are particularly useful for studying large macromolecular assemblies, such as ribosomes or viral capsids, where atomic precision is sacrificed in favor of capturing overall architecture and interactions.

The **Protein Data Bank (PDB)** provides resolution information for crystallographic and electron microscopy structures. To check the resolution of a given structure, navigate to the **Structure Summary** section of a PDB entry, where resolution is explicitly reported. This information is critical for assessing the reliability of structural models, guiding their appropriate use in research and computational simulations.

### R-Work and R-Free

In macromolecular crystallography, **R-Work** and **R-Free** are key statistical measures used to evaluate the accuracy and reliability of a solved structure. These values help determine how well the atomic model fits the experimental data and provide an assessment of potential errors in the structural refinement process.

**R-Work** (or the working R-factor) quantifies the agreement between the experimentally observed diffraction data and the model-generated diffraction pattern. It is calculated as follows:

\[ R_{work} = \frac{\sum | F_{obs} - F_{calc} |}{\sum F_{obs}} \]

where:
- \( F_{obs} \) represents the observed structure factor amplitudes from experimental data.
- \( F_{calc} \) represents the calculated structure factor amplitudes from the atomic model.

A lower R-Work value indicates a better fit between the model and the data, but by itself, R-Work does not fully validate the model's reliability since overfitting to the data set is possible.

To prevent overfitting, **R-Free** serves as an independent cross-validation measure. A subset of the diffraction data (typically 5-10%) is excluded from the refinement process and used only for validation. The R-Free value is then computed in the same manner as R-Work but using this unseen data subset. Because R-Free is calculated from data not used in model building, it provides an unbiased estimate of model accuracy.

-   **R-Work < 0.25** and **R-Free < 0.30** indicate a well-refined structure with a good fit to the experimental data.
-   **R-Work > 0.30** and **R-Free > 0.35** suggest that the model may contain errors or suffer from overfitting, requiring further refinement or validation.

### Completeness

The completeness of a protein structure refers to how much of the experimentally determined atomic model is available in a deposited structure file. Due to experimental limitations, some parts of a protein may be missing or ambiguous, which can impact structural analysis and computational modeling. Understanding these factors is essential for interpreting structural data accurately.

**Missing Residues**

In X-ray crystallography and cryo-electron microscopy, certain regions of a protein may not be resolved due to high flexibility or disorder. These typically include:

- **Loops and terminal regions:** Highly flexible segments often lack well-defined electron density and may be omitted from the final model.
- **Disordered regions:** Intrinsically disordered proteins or flexible domains may not adopt a single stable conformation, leading to missing residues in the structure.

These gaps can be identified by comparing the **SEQRES** (which lists all residues in the protein sequence) and **ATOM** (which contains resolved atomic coordinates) entries in a **PDB file**.

**Alternate Conformations**

Some amino acid side chains and backbone atoms may adopt multiple conformations, especially in regions with inherent flexibility. This is represented in PDB files using alternate location indicators (e.g., **ALTLOC** in the ATOM records). Multiple conformations can be relevant for understanding protein function, particularly in dynamic or allosteric sites.

**Presence of Ligands and Cofactors**

Functional studies often require the presence of specific ligands, cofactors, or metal ions necessary for activity. When evaluating completeness, consider:

- **Cofactors (e.g., heme, ATP, metal ions):** Ensure these are included if they are functionally important.
- **Binding partners or inhibitors:** If studying interactions, confirm that all relevant molecules are present.

To assess completeness:

- Use the **PDB’s 3D viewer** to visually inspect missing regions and alternate conformations.
- Compare **SEQRES vs. ATOM** records in the **PDB file** to identify missing residues.
- Check the ligand table in the PDB entry to verify the presence of important cofactors and binding partners.

### Recommendations

When studying a protein of interest, multiple structures may be available in the **Protein Data Bank (PDB)**, each with different experimental conditions, resolutions, and levels of completeness. Choosing the most suitable structure is crucial for obtaining reliable insights in structural biology and computational studies. The selection process involves evaluating several key factors to ensure the structure aligns with the intended application.

#### Prioritizing High-Resolution Structures

Resolution is a fundamental metric of structural quality. Higher resolution structures provide more precise atomic details, allowing for accurate modeling and analysis. The preferred resolution ranges depend on the experimental method:
- **X-ray Crystallography:** A resolution of **≤ 2.0 Å** is ideal for detailed atomic-level studies.
- **Cryo-Electron Microscopy (Cryo-EM):** Structures with a resolution of **≤ 3.5 Å** are generally considered reliable for backbone and side-chain positioning.

#### Wild-Type vs. Mutant Constructs

Some PDB entries may correspond to mutant constructs rather than the native (wild-type) protein. When selecting a structure, it is important to:

- Confirm whether the structure represents the wild-type sequence.
- Be aware of engineered mutations that may impact structural conformation or function.
- Consider mutant structures only if studying specific mutation effects.

#### Ligand-Bound (Holo) vs. Ligand-Free (Apo) Structures

Proteins may exist in different states, depending on whether they are bound to a ligand, substrate, or cofactor. The choice of structure depends on the study’s objectives:

- **Holo structures** (ligand-bound) are useful for investigating active sites, binding interactions, and functional states.
- **Apo structures** (ligand-free) provide insights into the unbound conformation and conformational flexibility.

#### Evaluating Structural Completeness

Selecting a PDB entry with the most complete representation of the protein ensures that no critical regions are missing. Important factors to check include:

- The presence of all expected domains and secondary structure elements.
- The absence of large unresolved regions, especially in functionally important areas.
- The inclusion of necessary cofactors, metal ions, or interacting molecules.

#### Checking R-Free and Model Quality

For X-ray crystallographic structures, **R-Work** and **R-Free** values provide an indication of refinement quality:

- **R-Free < 0.30** is preferable, as higher values may indicate model inaccuracies or overfitting.
- Lower R-Work and R-Free values generally suggest better agreement between the model and experimental data.

## Electron Density Maps

In **X-ray crystallography**, electron density maps are crucial for determining and validating macromolecular structures.
These maps represent the probability distribution of electron locations within a crystal and provide the experimental foundation upon which atomic models are built.
Understanding electron density maps is essential for evaluating the accuracy of a structure and identifying regions of uncertainty or error.

### Types of Electron Density Maps

The **2Fo-Fc map** is the main electron density map used for model building and refinement. It provides an overall representation of the electron density based on the experimental data and the current atomic model.
The name "2Fo-Fc" comes from the equation:

\[ \rho (x, y, z) = \sum 2F_o - F_c \]

where:

- **Fo** represents the experimentally observed structure factor amplitudes.
- **Fc** represents the calculated structure factor amplitudes derived from the atomic model.

The **2Fo-Fc map** is typically contoured at a level of **1.0σ**, meaning that it represents electron density at one standard deviation above the mean density level. At this threshold:

- Well-ordered atoms should have clearly defined density.
- Strong electron density should be visible around most atomic positions.
- Missing or weak density may indicate structural flexibility or errors in modeling.

A well-fitted atomic model should align with the **2Fo-Fc** electron density map, ensuring that atomic coordinates are placed in regions of high electron probability.

The **Fo-Fc map** is a difference map that highlights discrepancies between the observed data and the current atomic model. It is calculated as:

\[ \rho (x, y, z) = \sum (F_o - F_c) \]

This map helps in identifying errors or regions that require model refinement.
It is often contoured at **±3.0σ**, where:

- **Positive (green) density** indicates extra electron density not accounted for in the model, suggesting missing atoms, alternative conformations, or unmodeled ligands.
- **Negative (red) density** indicates electron density present in the model but absent in the experimental data, suggesting incorrect atom placements or overfitting.

By carefully interpreting **Fo-Fc** maps, researchers can adjust the model to improve accuracy, adding missing residues, correcting misplaced atoms, or refining ligand positions.

### Interpreting Sigma (σ) Levels

The contour levels of electron density maps are expressed in **sigma (σ) units**, which measure how much the electron density at a given point deviates from the mean density in the map. Higher sigma levels indicate stronger electron density signals, while lower levels indicate weaker density.

- **1.0σ (Typical for 2Fo-Fc maps):** Standard threshold for visualizing the backbone and most well-ordered side chains.
- **3.0σ (Used for Fo-Fc maps):** Indicates significant deviations that warrant attention, such as missing atoms or errors in model placement.
- **0.8σ - 1.2σ:** Useful for fine-tuning atomic positions in flexible regions.
- **>5.0σ:** Often used to identify metal ions or highly electron-dense features.

## Identifying Errors

Ensuring the accuracy of a protein structure is essential for reliable interpretation and downstream analyses. Structural errors can arise from experimental limitations, misinterpretation of electron density maps, or overfitting during refinement. Various validation techniques help detect and correct these errors, improving the overall quality of the model.

### Poorly Modeled Regions

Poorly modeled regions typically correspond to areas where the atomic model does not align well with the electron density map, leading to structural inaccuracies. Several indicators can reveal these problematic regions:

- **Gaps in the Electron Density Map:** Missing or weak electron density suggests unresolved portions of the structure, often corresponding to highly flexible loops or disordered regions. These regions may require additional refinement, alternative modeling approaches, or recognition that the disorder is biologically relevant.
- **Large Fo-Fc Difference Peaks:** The Fo-Fc difference map highlights discrepancies between the observed and calculated electron density. Large peaks in this map indicate potential issues such as misplaced atoms, incorrect side-chain orientations, or missing residues. Positive peaks (green) suggest additional unmodeled electron density, while negative peaks (red) indicate excess model density that may require removal.
- **Unusual B-Factors (Temperature Factors):** B-factors reflect atomic displacement and provide insight into structural flexibility. High B-factors in a region suggest excessive movement, disorder, or poorly defined electron density. Conversely, extremely low B-factors may indicate over-constrained refinement. Properly interpreting B-factors helps assess structural confidence and flexibility.

### Steric Clashes and Rotamer Outliers

Errors in side-chain placement and steric interactions can lead to unrealistic molecular conformations. Two key validation metrics for identifying these issues are:

- **Steric Clashes:** These occur when atoms are positioned too close together, violating van der Waals constraints. Steric clashes suggest improper refinement, incorrect torsional angles, or poor model fitting. Tools like MolProbity and PDB validation reports can highlight steric clashes that need correction.
- **Rotamer Outliers:** Amino acid side chains adopt preferred conformations known as rotamers. Rotamer outliers are residues whose side-chain conformations deviate significantly from known favorable states. These can result from incorrect density fitting, over-refinement, or suboptimal modeling decisions. Identifying and correcting these outliers ensures a more accurate structural representation.
