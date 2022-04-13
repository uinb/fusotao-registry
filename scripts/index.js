const fs = require("fs");
const path = require("path");
const {Keyring} = require('@polkadot/keyring');
const { hexToString } = require('@polkadot/util');
const { connectToBlockchain } = require('../utils/polkadotApi');
const { data } = require('../data/test');
const nodeUrl = "wss://binnode.brandy.fusotao.org";
const dominatorsOriginalHash = "0x6780906036a0737931bc14669b077ae9b5f0e053995f1f3e84ade4200ebbf309";

const dominatorsList = Object.entries(data).map(([key, item]) => item);

const RpcStateGetStorage = async (item) => {
  const api = await connectToBlockchain(nodeUrl)
  let str = item.slice(98);
  let keyring = new Keyring();
  let address = keyring.encodeAddress("0x"+str, 42);
  let data = await api.query.verifier.dominators(address);
  const json = JSON.parse(data.toString());
  return {
    ...json,
    name: hexToString(json.name),
    address,
  }
}

const run = async () => {
  const api = await connectToBlockchain(nodeUrl);
  const keysScall = await api.rpc.state.getKeys(dominatorsOriginalHash);
  if(!keysScall.length){
    console.debug("nodata!")
    return;
  }
  const requests = keysScall.map(item => RpcStateGetStorage(item.toString()))
  const fetchValue = await Promise.all(requests);
  const refactorDominatorsList = keysScall.map((item,index) => ({
    ...fetchValue[index],
  }))
  const validDominatorsList = refactorDominatorsList.map(item => {
    const metaData = dominatorsList.find(meta => item.address === meta.address);
    return {
      ...metaData,
      address: item.address,
    }
  })
  const testFileName = `generated/test/registry.json`;
  await fs.writeFileSync(testFileName, JSON.stringify(validDominatorsList, null, 4));
  await api.disconnect();
  console.warn('generate done!!!!!!');
  process.exit();
}

run();




