export default {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    defectRuleGroup: { type: 'object' },
    realms: {
      type: 'array',
      items: {
        type: 'object',
      },
      minItems: 1,
    },
    data: {
      type: 'object',
      properties: {
        defectCooldownInSecs: { type: 'integer', default: 600, minimum: 1 },
        proxies: {
          type: 'array',
          items: { type: 'object' },
        },
      },
    },
    meta: {
      type: 'object',
      properties: {
      },
    },
  },
  required: ['name', 'defectRuleGroup', 'realms'],
};
