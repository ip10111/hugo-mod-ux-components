# Hugo UX Components / Back to Top Button

Improve site's navigation with a Back to Top Button component. This component allows users to effortlessly return to the top of the page with a single click, enhancing the overall browsing experience. Simple to integrate and customize, it's a perfect addition for any Hugo site with long-scrolling content.


## Usage

Add scss file:

```gohtml
    (resources.Get "scss/back-to-top.scss" | resources.ToCSS )
```


Add typescript file:

```gohtml
    (resources.Get "ts/BackToTop.ts" | js.Build)
```

Add partial file:

```gohtml
    {{- partial "back_to_top.html" . -}}
```