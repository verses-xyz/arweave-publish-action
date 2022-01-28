# arweave-publish-action

Simple GitHub action to mirror documents onto Arweave.

## Usage
Add 'Arweave Publish' as a build step in your workflow file (e.g. `.github/workflows/deploy.yaml`)

```yaml
jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - name: Build Link Index
        uses: verses-xyz/arweave-publish-action@v1.0
        with:
          wallet-address: ...   # Public address for admin wallet
          wallet-key: ...       # JSON Key for associated admin wallet
          document-path: ...    # Path of document to mirror
```