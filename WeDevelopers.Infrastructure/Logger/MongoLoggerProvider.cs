using Microsoft.Extensions.Logging;
using WeDevelopers.Repositories.MongoRepository;
using WeDevelopers.Repositories.MongoRepository.MongoEntities;

namespace WeDevelopers.Infrastructure.Logger
{
    [ProviderAlias("Mongo")]
    public sealed class MongoLoggerProvider(IMongoRepository<ApplicationLogsEntity> logCollection) : ILoggerProvider
    {
        public ILogger CreateLogger(string categoryName) => new MongoLogger(categoryName, logCollection);

        public void Dispose() { }
    }
}
