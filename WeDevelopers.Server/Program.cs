using System.Threading.RateLimiting;
using MongoDB.Driver;
using WeDevelopers.Infrastructure.Authorization;
using WeDevelopers.Infrastructure.Logger;
using WeDevelopers.Infrastructure.Smtp;
using WeDevelopers.Repositories.MongoRepository;

var builder = WebApplication.CreateBuilder(args);

var mongoConnectionString = builder.Configuration.GetConnectionString("MongoDb_Main");
if (string.IsNullOrWhiteSpace(mongoConnectionString))
    throw new InvalidOperationException("ConnectionStrings:MongoDb_Main is not configured. Set it with 'dotnet user-secrets' or an environment variable.");

var mongoUrl = new MongoUrl(mongoConnectionString);
var mongoDatabaseName = mongoUrl.DatabaseName ?? throw new InvalidOperationException("ConnectionStrings:MongoDb_Main must include a database name.");
builder.Services.AddSingleton<IMongoClient>(new MongoClient(mongoUrl));
builder.Services.AddSingleton<IMongoDatabase>(sp => sp.GetRequiredService<IMongoClient>().GetDatabase(mongoDatabaseName));
builder.Services.AddSingleton(typeof(IMongoRepository<>), typeof(MongoRepository<>));
builder.Services.AddSingleton<ILoggerProvider, MongoLoggerProvider>();

builder.Services.AddIdentityAndJwt(builder.Configuration, mongoConnectionString);

builder.Services.Configure<SmtpOptions>(builder.Configuration.GetSection(SmtpOptions.SectionName));
builder.Services.AddSingleton<ISmtpServer, SmtpServer>();

builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    options.AddPolicy("auth", context => RateLimitPartition.GetFixedWindowLimiter(
        context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
        _ => new FixedWindowRateLimiterOptions { PermitLimit = 10, Window = TimeSpan.FromMinutes(1) }));
});

builder.Services.AddProblemDetails();
builder.Services.AddHealthChecks();
builder.Services.AddControllers();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();
    app.UseHsts();
}

app.UseDefaultFiles();
app.MapStaticAssets();

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.UseRateLimiter();

app.MapControllers();
app.MapHealthChecks("/api/HealthCheck/IsAlive");
app.MapFallbackToFile("/index.html");

app.Run();
