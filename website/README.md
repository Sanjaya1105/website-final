# Lumora research website

A portable research project website built only with HTML, CSS, and vanilla JavaScript. No installation, build step, API keys, external fonts, or backend is required.

Open `index.html` in a browser, or upload the complete contents of this folder to any static web host. Keep the `css`, `js`, `assets`, and `files` folders beside the HTML pages. The original research application is unchanged.

## Pages

- `index.html`: project introduction, four components, authored adaptation demo.
- `domain.html`: literature themes, proposed research gap, problem, objectives, methodology, technologies.
- `milestones.html`: assessment dropdown and project stages.
- `documents.html`: searchable document archive.
- `presentations.html`: searchable slide archive.
- `about.html`: component responsibilities and team information.
- `contact.html`: enquiry draft preparation and optional mailto contact.

## Add your real project information

Edit `js/data.js` to set the general contact email, supervisor details, team member details, assessment dates and marks, and document/presentation URLs. The four supplied members, student IDs, email addresses, supervisor, and co-supervisor are populated. Student addresses appear on the About and Contact pages; the general enquiry address remains unassigned. Dilshan's `my.sllit.lk` domain is preserved exactly as provided and should be checked before publishing. Put approved PDFs and slide files in `files/` and set URLs such as `files/project-charter.pdf`. Blank URLs show “File pending” rather than broken download links. Team member records support name, studentId, initials, role, description, and email. Initial avatars are used until photos are provided.

The purple, white, and blue theme is in `css/theme.css`. It includes gradient graphics, floating preview elements, scroll reveals, hover transitions, and a sticky translucent header. Reduced-motion preferences disable movement. No external assets or libraries are required.

Add your verified literature review and citations to the Domain renderer in `js/app.js`. The supplied research gap is a proposed project framing, not a verified novelty claim. No model accuracy, assessment status, publication details, names, or dates have been fabricated.

The home demo contains authored examples and does not run AI or capture webcam/cursor behavior. This site presents the research; the actual learning platform remains in the repository's existing frontend and services. The contact form sends nothing from the browser: with an email configured it opens an email draft; otherwise it produces text the visitor can copy.

The PDF guideline's maximum upload size is 20 MB. The website starts well below that limit; check total size after adding reports, slides, and photos. All links are relative for hosting in a subdirectory. JavaScript must be enabled.

## Checks

JavaScript syntax and local file references can be checked without installing dependencies. No automated browser validation is included. Before submission, review all seven pages on desktop and mobile and confirm uploaded file links and your configured contact email.
