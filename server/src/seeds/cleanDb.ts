import models from '../models/index.js'; // Ensure models is properly imported
import db from '../config/connection.js'; // Ensure db is properly imported and connected

export default async function cleanDb(
  modelName: 'Question',
  collectionName: string
) {
  try {
    const model = models[modelName]; // Access the model once and check for its existence

    if (!model || !model.db || !model.db.db) {
      throw new Error(
        `Model or database connection for ${modelName} is undefined.`
      );
    }

    const modelExists = await model.db.db
      .listCollections({ name: collectionName })
      .toArray();

    if (modelExists.length > 0) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
