// @ts-nocheck
// eslint-disable
// This file is generated by create-validator-ts
import Ajv from 'ajv';
import * as apiTypes from './custom-type-annotation';

const SCHEMA = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "#/definitions/UpdateUser",
    "definitions": {
        "UpdateUser": {
            "type": "object",
            "properties": {
                "flg": {
                    "type": "string",
                    "boolOption": true
                },
                "name": {
                    "type": "number",
                    "strOption": "test"
                },
                "age": {
                    "type": "number",
                    "numberOption": 123
                }
            },
            "required": [
                "flg",
                "name",
                "age"
            ],
            "additionalProperties": false
        }
    }
};
const ajv = new Ajv({ removeAdditional: true }).addSchema(SCHEMA, "SCHEMA");
// custom tags
ajv.addKeyword('boolOption', {
  modifying: false,
  compile: () => {
    return (data, currentDataPath, parentDataObject, propertyName) => {
      return data;
    };
  },
  errors: false
});
ajv.addKeyword('strOption', {
  modifying: false,
  compile: () => {
    return (data, currentDataPath, parentDataObject, propertyName) => {
      return data;
    };
  },
  errors: false
});
ajv.addKeyword('numberOption', {
  modifying: false,
  compile: () => {
    return (data, currentDataPath, parentDataObject, propertyName) => {
      return data;
    };
  },
  errors: false
});

export function validateUpdateUser(payload: unknown): apiTypes.UpdateUser {
  if (!isUpdateUser(payload)) {
    const error = new Error('invalid payload: UpdateUser');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isUpdateUser(payload: unknown): payload is apiTypes.UpdateUser {
  /** Schema is defined in {@link SCHEMA.definitions.UpdateUser } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/UpdateUser" });
  return ajvValidate(payload);
}