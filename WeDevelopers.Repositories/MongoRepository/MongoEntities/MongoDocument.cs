using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WeDevelopers.Repositories.MongoRepository.MongoEntities
{
    public abstract class MongoDocument
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
