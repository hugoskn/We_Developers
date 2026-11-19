using System.Linq.Expressions;
using MongoDB.Driver;
using WeDevelopers.Repositories.MongoRepository.MongoEntities;

namespace WeDevelopers.Repositories.MongoRepository
{
    public interface IMongoRepository<TDocument> where TDocument : MongoDocument
    {
        Task<TDocument?> FirstOrDefaultAsync(Expression<Func<TDocument, bool>> filter, CancellationToken cancellationToken = default);
        Task InsertOneAsync(TDocument document, CancellationToken cancellationToken = default);
        Task<UpdateResult> UpdateOneAsync(Expression<Func<TDocument, bool>> filter, UpdateDefinition<TDocument> update, bool upsert = false, CancellationToken cancellationToken = default);
    }
}
