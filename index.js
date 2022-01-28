const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')
const { ArweaveClient } = require('ar-wrapper')

async function main() {
  try {
    const addr = core.getInput('wallet-address')
    const key = core.getInput('wallet-key')
    const path = core.getInput('document-path')
    if (!(addr && key && path)) {
      core.setFailed("document-path, wallet-address, and wallet-key all need to be passed!")
      return
    }

    // init client
    const client = new ArweaveClient(addr, key)
    const docName = `${github.context.payload.repository.name}:${path}`

    // get new content
    const data = fs.readFileSync(path, 'utf8')

    // todo: maybe hash to fixed size?
    const docs = await client.getDocumentsByName(docName)
    const latestDoc = docs.sort((a, b) => b.version - a.version)[0]

    // update/add doc and return txId
    const newDoc = latestDoc ? await latestDoc.update(data) : await client.addDocument(docName, data, {})
    core.setOutput("txId", newDoc.txID)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()

