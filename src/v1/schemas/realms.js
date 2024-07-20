export default {
  properties: {
    name: { type: 'string', minLength: 1 },
    key: { type: 'string', minLength: 1 },
    banRuleGroup: { type: 'object' },
    data: {
      type: 'object',
      properties: {
        matcher: { type: 'string', minLength: 1 },
        requester: {
          type: 'string',
          enum: ['libCurl', 'cycleTls', 'priceapiBrowser'],
          minItems: 1,
          maxItems: 1,
        },
        banCooldownInSecs: { type: 'integer' },
        rangeBanIPv4PrefixLength: {
          type: 'integer',
          default: 32,
          minimum: 0,
          maximum: 32,
        },
        rangeBanIPv6PrefixLength: {
          type: 'integer',
          default: 128,
          minimum: 0,
          maximum: 128,
        },
        rangeBanPercentThreshold: {
          type: 'integer',
          default: 100,
          minimum: 0,
          maximum: 100,
        },
        rateLimiter: {
          type: 'object',
          properties: {
            id: { type: 'string', minLength: 1 },
            amount: { type: 'integer' },
            timeframeInSecs: { type: 'integer' },
          },
          required: ['id', 'amount', 'timeframeInSecs'],
        },
      },
      required: ['matcher', 'banCooldownInSecs', 'requester'],
    },
  },
  required: ['name', 'key', 'banRuleGroup'],
};
