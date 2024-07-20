export default {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    data: {
      type: 'array',
      items: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          properties: {
            matcher: { type: 'string', minLength: 1 },
          },
          oneOf: [
            {
              type: 'object',
              properties: {
                source: { type: 'string', enum: ['request_headers', 'response_headers'] },
                field: { type: 'string', minLength: 1 },
              },
              required: ['source', 'matcher', 'field'],
            },
            {
              type: 'object',
              properties: {
                source: { type: 'string', enum: ['status', 'body', 'errno', 'request-url'] },
              },
              required: ['source', 'matcher'],
            },
          ],
        },
      },
    },
  },
  required: ['data', 'name'],
};
