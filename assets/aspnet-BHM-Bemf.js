const e={slug:"aspnet",name:"ASP.NET Core",description:"High-performance, cross-platform framework for building modern cloud-connected applications.",sections:[{id:"basics",title:"Startup & Middleware",entries:[{label:"Program.cs Layout",description:"Entry point for .NET 6+ apps.",code:`var builder = WebApplication.CreateBuilder(args);
// 1. Add Services (DI)
builder.Services.AddControllers();

var app = builder.Build();
// 2. Middleware Pipeline
app.UseHttpsRedirection();
app.MapControllers();
app.Run();`,language:"csharp"},{label:"Custom Middleware",description:"Injecting logic into the HTTP pipeline.",code:`app.Use(async (context, next) => {
    // Before
    await next();
    // After
});`,language:"csharp"}]},{id:"api-patterns",title:"Web API & Routing",entries:[{label:"Controller Action",description:"Handling HTTP requests.",code:`[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase {
    [HttpGet("{id}")]
    public IActionResult Get(int id) {
        return Ok(new { Id = id, Name = "Shiv" });
    }
}`,language:"csharp"},{label:"Dependency Injection",description:"Injecting services into controllers.",code:`public class UsersController {
    private readonly IUserService _service;
    public UsersController(IUserService service) {
        _service = service;
    }
}`,language:"csharp"}]},{id:"ef-core",title:"Entity Framework Core",entries:[{label:"DbContext Definition",description:"Mapping models to database tables.",code:`public class AppDbContext : DbContext {
    public DbSet<User> Users { get; set; }
    protected override void OnConfiguring(...) { ... }
}`,language:"csharp"},{label:"LINQ Queries",description:"Querying data from DB.",code:`var user = await _context.Users
    .Where(u => u.IsActive)
    .OrderBy(u => u.Name)
    .ToListAsync();`,language:"csharp"}]}]};export{e as aspnet};
