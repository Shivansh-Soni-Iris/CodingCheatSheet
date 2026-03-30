const e={slug:"typescript",name:"TypeScript Mastery",description:"Adding static types to JavaScript. Enhancing code quality and developer productivity.",sections:[{id:"basics",title:"Basic Types",entries:[{label:"Primitive Types",description:"The fundamental building blocks of TypeScript.",code:`let isDone: boolean = false;
let lines: number = 42;
let name: string = "Shivansh";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];`,language:"typescript"},{label:"Interfaces",description:"Defining the shape of an object.",code:`interface User {
  name: string;
  id: number;
  isAdmin?: boolean; // Optional
}

const user: User = {
  name: "Shivansh",
  id: 1
};`,language:"typescript"}]},{id:"advanced",title:"Advanced Concepts",entries:[{label:"Generics",description:"Reusable components that work with a variety of types.",code:`function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");`,language:"typescript"},{label:"Unions & Intersections",description:"Combining multiple types.",code:`type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";

function checkState(state: WindowStates) {
  // ...
}`,language:"typescript"}]}]};export{e as typescript};
