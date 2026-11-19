using System.Linq.Expressions;
using System.Reflection;
using MongoDB.Driver;
using WeDevelopers.Repositories.MongoRepository.MongoEntities;

namespace WeDevelopers.Repositories.MongoRepository
{
    public class MongoRepository<TDocument>(IMongoDatabase database) : IMongoRepository<TDocument>
        where TDocument : MongoDocument
    {
        private readonly IMongoCollection<TDocument> _collection = database.GetCollection<TDocument>(
            typeof(TDocument).GetCustomAttribute<BsonCollectionAttribute>()?.CollectionName ?? typeof(TDocument).Name);

        public async Task<TDocument?> FirstOrDefaultAsync(Expression<Func<TDocument, bool>> filter, CancellationToken cancellationToken = default) =>
            await _collection.Find(filter).Limit(1).FirstOrDefaultAsync(cancellationToken);

        public Task InsertOneAsync(TDocument document, CancellationToken cancellationToken = default) =>
            _collection.InsertOneAsync(document, cancellationToken: cancellationToken);

        public Task<UpdateResult> UpdateOneAsync(Expression<Func<TDocument, bool>> filter, UpdateDefinition<TDocument> update, bool upsert = false, CancellationToken cancellationToken = default) =>
            _collection.UpdateOneAsync(filter, update, new UpdateOptions { IsUpsert = upsert }, cancellationToken);
    }
}
