const e={slug:"css",name:"CSS Mastery",description:"From selector specificity to advanced layout systems. Transform plain HTML into stunning visual experiences.",sections:[{id:"resets",title:"Foundation & Resets",entries:[{label:"Modern Reset",description:"Standard starting point for clean layouts.",code:`/* Box sizing rules */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Remove default margins */
body, h1, p, figure {
  margin: 0;
  line-height: 1.5;
}

img {
  max-width: 100%;
  display: block;
}`,language:"css"},{label:"CSS Variables",description:"Dynamic tokens for the entire project.",code:`:root {
  --primary: #6366f1;
  --secondary: #64748b;
  --bg: #ffffff;
  --spacing: 1rem;
}

body {
  color: var(--secondary);
  padding: var(--spacing);
}`,language:"css"}]},{id:"flex-hero",title:"Flexbox System",entries:[{label:"Centering Anything",description:"The golden rule of layout.",code:`.center-all {
  display: flex;
  justify-content: center; /* Horiz */
  align-items: center;     /* Vert */
  height: 100vh;
}`,language:"css"},{label:"Flexible Grids",description:"Creating space and alignment.",code:`.nav {
  display: flex;
  gap: 2rem;
}

.spacer {
  flex-grow: 1; /* Pushes items apart */
}`,language:"css"}]},{id:"grid-hero",title:"CSS Grid Unleashed",entries:[{label:"Responsive Auto-Grid",description:"Zero media queries needed.",code:`.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,language:"css"},{label:"Named Areas",description:"Painting the layout with words.",code:`.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}

header { grid-area: header; }
main { grid-area: main; }`,language:"css"}]},{id:"effects",title:"Advanced Effects",entries:[{label:"Glassmorphism",description:"Modern frosted glass effect.",code:`.glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
}`,language:"css"},{label:"Custom Animations",description:"Smooth entry and loop effects.",code:`@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.float-img {
  animation: float 3s ease-in-out infinite;
}`,language:"css"}]}]};export{e as css};
