using Microsoft.Extensions.Logging;
using WeDevelopers.Repositories.MongoRepository;
using WeDevelopers.Repositories.MongoRepository.MongoEntities;

namespace WeDevelopers.Infrastructure.Logger
{
    public sealed class MongoLogger(string category, IMongoRepository<ApplicationLogsEntity> logCollection) : ILogger
    {
        public IDisposable? BeginScope<TState>(TState state) where TState : notnull => null;

        public bool IsEnabled(LogLevel logLevel) => logLevel != LogLevel.None;

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
        {
            if (!IsEnabled(logLevel))
                return;

            var entry = new ApplicationLogsEntity
            {
                LogLevel = logLevel,
                Category = category,
                Message = formatter(state, exception),
                Exception = exception?.ToString()
            };

            // ponytail: fire-and-forget insert per log line; entries are dropped on DB failure or shutdown. Upgrade to a Channel + BackgroundService batch writer if log volume grows.
            _ = logCollection.InsertOneAsync(entry);
        }
    }
}
