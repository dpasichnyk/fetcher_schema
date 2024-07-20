# Fetcher Config

## Release

- Increase version in `package.json`
- `npm prepublish`
- `npm publish`

## Troubleshooting

### ERR_OSSL_EVP_UNSUPPORTED

Prefix yarn commands with `NODE_OPTIONS=--openssl-legacy-provider`
