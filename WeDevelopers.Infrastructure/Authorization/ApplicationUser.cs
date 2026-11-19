using AspNetCore.Identity.Mongo.Model;
using MongoDB.Bson;

namespace WeDevelopers.Infrastructure.Authorization
{
    public class ApplicationUser : MongoUser<ObjectId>
    {
        public bool? IsDeleted { get; set; }
    }

    public class ApplicationRole : MongoRole<ObjectId> { }
}
