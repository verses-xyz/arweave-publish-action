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
      - name: Arweave Publish
        uses: verses-xyz/arweave-publish-action@v1.2
        with:
          wallet-address: ${{ env.WALLET_ADDRESS }}  # Public address for admin wallet
          wallet-key: ${{ env.WALLET_KEY }}          # JSON Key for associated admin wallet
          document-path: <insert document path here> # Path of document to mirror
```