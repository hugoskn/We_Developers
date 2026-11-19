using Microsoft.Extensions.Logging;
using MongoDB.Bson.Serialization.Attributes;

namespace WeDevelopers.Repositories.MongoRepository.MongoEntities
{
    [BsonIgnoreExtraElements]
    [BsonCollection("ApplicationLogs")]
    public class ApplicationLogsEntity : MongoDocument
    {
        public LogLevel LogLevel { get; set; }
        public string Category { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public string? Exception { get; set; }
    }
}
