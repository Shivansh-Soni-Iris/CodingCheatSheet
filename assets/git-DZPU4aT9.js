const e={slug:"git",name:"Git Essentials",description:"The industry-standard version control system. Command-line mastery for developers.",sections:[{id:"setup",title:"Setup & Config",entries:[{label:"Configuration",description:"Set your user information.",code:`git config --global user.name "Your Name"
git config --global user.email "name@email.com"
git config --global color.ui auto`,language:"bash"},{label:"Initialize",description:"Start a new repository.",code:`git init
git clone <url>`,language:"bash"}]},{id:"workflow",title:"Daily Workflow",entries:[{label:"Staging & Committing",description:"Save your changes.",code:`git add <file>    # Stage file
git add .         # Stage all
git commit -m "msg" # Commit`,language:"bash"},{label:"Branching",description:"Manage different versions.",code:`git branch <name>   # Create branch
git checkout <name> # Switch
git merge <name>    # Merge into current`,language:"bash"}]}]};export{e as git};
