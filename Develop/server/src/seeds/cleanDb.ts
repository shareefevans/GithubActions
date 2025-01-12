import models from '../models/index.js'; // Ensure models is properly typed
import db from '../config/connection.js'; // Ensure db is properly typed

export default async function dropCollectionIfExists(
  modelName: 'Question',
  collectionName: string
) {
  try {
    const model = models[modelName]; // Extract the model for clarity and checking

    if (!model || !model.db || !model.db.db) {
      throw new Error(
        `Model or database connection for ${modelName} is undefined.`
      );
    }

    const modelExists = await model.db.db
      .listCollections({ name: collectionName })
      .toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
