const e={slug:"python",name:"Pythonic Mastery",description:"The Swiss Army Knife of languages. From automation scripts to complex machine learning architecture.",sections:[{id:"basics",title:"Syntax & Built-ins",entries:[{label:"Data Structures",description:"The core buckets of Python.",code:`list = [1, "apple", True] # Mutable
tuple = (1, 2, 3)        # Immutable
dict = {"id": 1, "n": "S"} # Key-Value
set = {1, 2, 2, 3}       # {1, 2, 3} (Unique)`,language:"python"},{label:"List Comprehensions",description:"Concise way to transform data.",code:`nums = [1, 2, 3, 4, 5]
squares = [x**2 for x in nums if x % 2 == 0]
# Result: [4, 16]`,language:"python"}]},{id:"functions-adv",title:"Advanced Functions",entries:[{label:"Lambda & Maps",description:"Anonymous functions and mapping.",code:`f = lambda x, y: x + y
print(f(5, 10))

nums = [1, 2, 3]
doubled = list(map(lambda x: x*2, nums))`,language:"python"},{label:"Decorators",description:"Modifying behavior without changing code.",code:`@timer_decorator
def heavy_task():
    time.sleep(1)
    print("Done")

# Executes timer logic before/after heavy_task`,language:"python"}]},{id:"data-processing",title:"Data & File I/O",entries:[{label:"With Context Manager",description:"Safe file handling.",code:`with open('log.txt', 'r') as f:
    content = f.read()
    # Auto-closes file after block`,language:"python"},{label:"JSON handling",description:"Parsing and dumping JSON.",code:`import json

data = json.loads(json_string)
json_str = json.dumps(dict_obj, indent=4)`,language:"python"}]},{id:"oop-py",title:"Object Oriented",entries:[{label:"Classes & Dunder Methods",description:"Pythonic OOP patterns.",code:`class User:
    def __init__(self, name):
        self.name = name
    
    def __repr__(self):
        return f"User({self.name})"

u = User("Shivansh")
print(u) # Calls __repr__`,language:"python"}]}]};export{e as python};
