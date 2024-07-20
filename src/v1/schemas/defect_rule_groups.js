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
            source: { type: 'string', minLength: 1 },
            matcher: { type: 'string', minLength: 1 },
          },
          required: ['source', 'matcher'],
        },
      },
    },
  },
  required: ['data', 'name'],
};
