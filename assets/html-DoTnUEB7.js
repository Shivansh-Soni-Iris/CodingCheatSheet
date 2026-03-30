const e={slug:"html",name:"HTML5",description:"The backbone of the web. Learn everything from document structure to advanced semantic SEO and forms.",sections:[{id:"skeleton",title:"Modern Boilerplate",entries:[{label:"The Base Template",description:"The standard HTML5 document structure.",code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title Goes Here</title>
</head>
<body>
    <!-- Content -->
</body>
</html>`,language:"html"},{label:"Meta SEO Tags",description:"Essential tags for social sharing and search engines.",code:`<!-- Standard SEO -->
<meta name="description" content="Awesome site info">
<meta name="keywords" content="html, css, javascript">

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="Page Title">
<meta property="og:image" content="cover.jpg">`,language:"html"}]},{id:"semantics",title:"Semantic Layout",entries:[{label:"Structural Elements",description:"Self-describing elements for better accessibility.",code:`<header>Logo & Nav</header>
<nav>Navigation links</nav>
<main>Main site content</main>
<article>Single independent post</article>
<section>Group of themed content</section>
<aside>Sidebar / Secondary info</aside>
<footer>Copyright & Contacts</footer>`,language:"html"},{label:"Text Semantics",description:"Meaningful text wrapping.",code:`<p>Paragraph text</p>
<mark>Highlighted text</mark>
<code>Code snippet</code>
<time datetime="2026-03-27">Mar 27</time>
<figure>
  <img src="img.jpg" alt="Info">
  <figcaption>The Caption</figcaption>
</figure>`,language:"html"}]},{id:"forms-hero",title:"Advanced Forms",entries:[{label:"Input Types",description:"Native validation and varied data types.",code:`<input type="text" placeholder="Name">
<input type="email" required>
<input type="date">
<input type="range" min="0" max="100">
<input type="file" accept="image/*">
<input type="color">`,language:"html"},{label:"Data Lists & Options",description:"Searchable dropdowns.",code:`<label>Choose browser:</label>
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Arc">
</datalist>`,language:"html"}]},{id:"multimedia",title:"Multimedia & SVG",entries:[{label:"Responsive Images",description:"Loading the right image for the right screen.",code:`<picture>
  <source srcset="large.webp" media="(min-width: 800px)">
  <source srcset="medium.webp" media="(min-width: 500px)">
  <img src="small.jpg" alt="Responsive img">
</picture>`,language:"html"},{label:"SVG Integration",description:"Crisp vector graphics directly in HTML.",code:`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" 
          stroke="black" stroke-width="3" 
          fill="red" />
</svg>`,language:"html"}]}]};export{e as html};
