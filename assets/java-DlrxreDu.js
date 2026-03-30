const e={slug:"java",name:"Java (Zero to Hero)",description:"Enterprise-grade object-oriented programming. Covering core syntax through advanced Streams and Multithreading.",sections:[{id:"basics",title:"Syntax & Types",entries:[{label:"Data Types",description:"Fixed-size memory allocation.",code:`int age = 25;           // 32-bit
long distance = 5000L;  // 64-bit
float pi = 3.14f;       // 32-bit
double precise = 3.1415;// 64-bit
boolean isValid = true; // 1-bit
char grade = 'A';       // 16-bit UNICODE`,language:"java"},{label:"String Methods",description:"Essential text manipulation.",code:`String s = " Hello World ";
s.trim();         // "Hello World"
s.toUpperCase();  // "HELLO WORLD"
s.indexOf("W");   // 6
s.substring(0,5); // "Hello"
s.replace("l", "w");// "Hewwo Worwd"`,language:"java"}]},{id:"oop-adv",title:"Advanced OOP",entries:[{label:"Abstract vs Interface",description:"Defining architectural structure.",code:`// Interface (Strict Contract)
interface Flyable { void fly(); }

// Abstract (Base Template)
abstract class Bird implements Flyable {
  abstract void sing();
  void breathe() { System.out.println("Oxygen..."); }
}`,language:"java"},{label:"Enum with Logic",description:"Type-safe constants with behavior.",code:`public enum Status {
  ACTIVE(1), INACTIVE(0);
  private final int code;
  Status(int c) { this.code = c; }
  public int getCode() { return code; }
}`,language:"java"}]},{id:"collections-hero",title:"Collections Framework",entries:[{label:"HashMap Internal",description:"Fast key-value storage.",code:`Map<String, User> users = new HashMap<>();
users.put("shiv", new User("Shivansh"));

// Merging (Java 8+)
users.merge("shiv", newUser, (oldV, newV) -> newV);`,language:"java"},{label:"List Operations",description:"Dynamic arrays and LinkedLists.",code:`List<String> list = new ArrayList<>();
Collections.sort(list); // Generic sorting
list.removeIf(s -> s.isEmpty()); // Dynamic remove`,language:"java"}]},{id:"streams-hero",title:"FP & Streams API",entries:[{label:"The Stream Pipeline",description:"Processing collections like a pro.",code:`List<String> highScores = players.stream()
  .filter(p -> p.getScore() > 1000)
  .map(Player::getName)
  .sorted()
  .limit(10)
  .collect(Collectors.toList());`,language:"java"},{label:"Optional Wrapper",description:"Nuclear strike on NullPointerExceptions.",code:`Optional<User> user = findById(5);

user.ifPresent(u -> System.out.println(u.getName()));
User found = user.orElseThrow(() -> new NotFoundEx());`,language:"java"}]},{id:"concurrency",title:"Concurrency",entries:[{label:"Executor Service",description:"Thread pool management.",code:`ExecutorService executor = Executors.newFixedThreadPool(10);

executor.submit(() -> {
  System.out.println("Processing in bg...");
});

executor.shutdown();`,language:"java"}]}]};export{e as java};
