/* tslint:disable:variable-name */
import dynamoose, { Schema, ModelConstructor } from 'dynamoose';

// ttl (time to live) set in seconds - 7 days
export const CACHE_TTL = 7 * 24 * 60 * 60;

const expiresConfig: any = {
    expires: {
        ttl: CACHE_TTL,
        // This is the name of our attribute to be stored in DynamoDB
        attribute: 'ttl'
    }
};

const CacheSchema: Schema = new dynamoose.Schema(
    {
        path: {
            type: String,
            hashKey: true,
            required: true
        },
        data: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const CacheModel: ModelConstructor<Object, Object> = dynamoose.model('staging-serverless-staging-dynamodb', CacheSchema, expiresConfig);
export default CacheModel;
