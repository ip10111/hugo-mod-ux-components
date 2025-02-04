# Hugo UX Components / Reading Progress Bar

Enhance users reading experience with a Reading Progress Bar component. This component tracks the reader's progress as they scroll through an article or page, providing visual feedback.

```gohtml
    (resources.Get "scss/reading-progress-bar.scss" | resources.ToCSS )
```

```gohtml
    (resources.Get "ts/ReadingProgressBar.ts" | js.Build)
```

```gohtml
    {{- partial "reading_progress_bar.html" . -}}
```