# FRS Inspect

A self-contained field inspection showcase by Dlamini House for Fire Risk Systems. Open index.html in a modern browser after extracting the entire ZIP. No installation, network connection or credentials required. Use the same browser and origin to retain saved visits.

## GitHub Pages

1. Create a repository and upload the **contents** of this folder so index.html is at the repository root. Commit to main.
2. Open Settings > Pages. Under Build and deployment choose Deploy from a branch, then main and / (root). Save.
3. After deployment, copy the HTTPS website address from Settings > Pages. Share the published site address with the client. The technician view is available at that address followed by #tech and the office view at #manager. Hash routes work after refresh. An unfinished inspection is held in memory and restarts after reload.
4. For offline presentations, open the extracted local copy. localStorage is scoped to the browser and origin. Private browsing and local-file persistence can vary by browser. Reset demo restores the fictional starting records on this device.

## Presenter’s route

Select Take the tour, scan EXT-001 and open its asset history. Start inspection, pass the first item, fail the access check, attach sample evidence, select severity and record “Cartons obstruct the approach”. Complete the remaining questions and draw a signature. Submit, open the report and select Print / save PDF. In Manager, inspect the updated totals, assign the defect and update its status. Use QR labels to print a permanent asset identifier. The code encodes the ID as plain text. A generic scanner returns that ID.

Try a sample QR offers all six asset types without requiring camera permission. Reports and signature images are snapshots. Defect follow-up fields show current status. CSV exports inspection observations as Excel-readable UTF-8 CSV. The template editor changes future inspections, preserving earlier results. Seeded report signatures are illustrative. Drawn signatures are available on new visits.

## File tree

    index.html
    style.css
    app.js
    data.js
    labels.js
    README.md
    assets/
      logo.png
      plant.jpg
      technician.jpg
      evidence.jpg

## Design and data

Profile vector fills provide the navy surfaces, cyan accent, darker teal, grey-blue surface and white. The source PDF uses DejaVu Sans, DejaVu Sans Bold and Helvetica. CSS requests locally installed DejaVu Sans, then Helvetica or Arial. All four image assets come from the supplied corporate profile. Sample evidence is an illustrative equipment photo. The 40 standard QR matrices were precomputed with ReportLab for the fixed asset IDs. SVG labels are rendered locally at any resolution. No runtime libraries, tracking or external font requests.

Customers, sites, observations and work assignments are fictional. The six example checklists illustrate a visual inspection workflow for discussion with FRS. Scanning, evidence capture and user roles are simulated. Local saving, signature drawing, CSV download and browser printing work. There is no production database, identity verification, cloud sync or field-service integration.
