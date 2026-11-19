using MongoDB.Bson.Serialization.Attributes;

namespace WeDevelopers.Repositories.MongoRepository.MongoEntities
{
    [BsonIgnoreExtraElements]
    [BsonCollection("UserDetails")]
    public class UserDetailsEntity : MongoDocument
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
    }
}
