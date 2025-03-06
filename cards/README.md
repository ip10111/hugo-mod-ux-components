# Hugo UX Components / Card with image overlay

## Usage

### Card with Image Cover as Header

Add partial file:

```gohtml
{{ partial "card_img" (dict 
    "img" "path/to/image.jpg"
    "img_alt" "Image alt text"
    "content" `
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
`) }}
```

### Horizontal Card with Image on the left

Add scss file:

```gohtml
    (resources.Get "scss/card-horizontal.scss" | resources.ToCSS )
```

Add partial file:

```gohtml
{{ partial "card_horizontal" (dict 
    "img" "path/to/image.jpg"
    "img_alt" "Image alt text"
    "content" `
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
`) }}
```

### Card with Image Overlay

Add scss file:

```gohtml
    (resources.Get "scss/card-img-overlay.scss" | resources.ToCSS )
```

Add partial file:

```gohtml
{{ partial "card_img_overlay" (dict 
    "img" "path/to/image.jpg"
    "img_alt" "Image alt text"
    "content" `
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
`) }}
```