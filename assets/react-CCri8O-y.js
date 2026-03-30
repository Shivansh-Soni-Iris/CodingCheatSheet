const e={slug:"react",name:"React 18+",description:"The JavaScript library for building component-based user interfaces. Modern patterns and hook architecture.",sections:[{id:"hooks-core",title:"Core Hooks",entries:[{label:"useState & useEffect",description:"Handling state and side effects.",code:`const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Click: \${count}\`;
  return () => { /* Cleanup */ };
}, [count]);`,language:"jsx"},{label:"useRef",description:"Persistent values and DOM references.",code:`const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;`,language:"jsx"}]},{id:"performance",title:"Memoization & Perf",entries:[{label:"useMemo",description:"Caching expensive calculations.",code:`const expensiveVal = useMemo(() => {
  return calculateHugeData(data);
}, [data]);`,language:"jsx"},{label:"useCallback",description:"Stabilizing function references.",code:`const handleClick = useCallback(() => {
  doSomething(id);
}, [id]); // Only changes when id changes`,language:"jsx"}]},{id:"state-mgmt",title:"Global State",entries:[{label:"Context API",description:"Passing data without prop drilling.",code:`const ThemeCtx = createContext('light');

const App = () => (
  <ThemeCtx.Provider value="dark">
    <Component />
  </ThemeCtx.Provider>
);

const Component = () => {
  const theme = useContext(ThemeCtx);
  return <div>{theme}</div>;
};`,language:"jsx"},{label:"useReducer",description:"Complex state logic management.",code:`const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'INCREMENT' });`,language:"jsx"}]},{id:"custom-hooks",title:"Custom Hooks",entries:[{label:"useLocalStorage",description:"Example of reusable state logic.",code:`function useLocalStorage(key, initialValue) {
  const [val, setVal] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const update = (newVal) => {
    setVal(newVal);
    window.localStorage.setItem(key, JSON.stringify(newVal));
  };

  return [val, update];
}`,language:"jsx"}]}]};export{e as react};
