const e={slug:"jss",name:"JSS (CSS-in-JS)",description:"A tool for generating CSS with JavaScript. Enabling powerful dynamic styling and theme-driven architecture.",sections:[{id:"basics",title:"Foundations",entries:[{label:"Installation",description:"Setting up JSS in your project.",code:"npm install jss jss-preset-default react-jss",language:"bash"},{label:"Basic Styles",description:"Defining style objects.",code:`import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: { top: 5, right: 0, bottom: 0, left: '1rem' }
  }
});`,language:"javascript"}]},{id:"dynamic",title:"Dynamic & Props",entries:[{label:"Function Values",description:"Styling based on React props.",code:`const useStyles = createUseStyles({
  banner: {
    backgroundColor: props => props.status === 'ok' ? 'green' : 'red',
    transition: 'all .3s'
  }
});`,language:"javascript"},{label:"Theming",description:"Global design tokens access.",code:`const useStyles = createUseStyles(theme => ({
  container: {
    padding: theme.spacing,
    color: theme.primaryColor
  }
}));`,language:"javascript"}]},{id:"advanced",title:"Advanced Patterns",entries:[{label:"Nesting & Pseudo",description:"Targeting children and states.",code:`const useStyles = createUseStyles({
  nav: {
    '& li': { listStyle: 'none' },
    '&:hover': { opacity: 0.8 },
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  }
});`,language:"javascript"}]}]};export{e as jss};
