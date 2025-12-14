import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { getDynamoDBConfig } from "../config/dynamoConfig.js";

const ddbClient = new DynamoDBClient(getDynamoDBConfig());

const docClient = DynamoDBDocumentClient.from(ddbClient, {
    marshallOptions: {
        removeUndefinedValues: true,
        convertEmptyValues: false,
    },
});