const  { ApiPromise, WsProvider } = require('@polkadot/api');
exports.connectToBlockchain = async (localNode) => {
  const wsProvider = new WsProvider(localNode);
  return await ApiPromise.create({
    provider: wsProvider,
    rpc: {
      verifier: {
        currentSeasonOfDominator : {
          description: '',
          params: [
            {
              name: 'dominator',
              type: 'AccountId'
            },
            {
              name: 'at',
              type: 'Hash',
              isOptional: true
            }
          ],
          type: 'u32'
        },
        pendingSharesOfDominator : {
          params: [
            {
              name: 'dominator',
              type: 'AccountId'
            },
            {
              name: 'who',
              type: 'AccountId'
            },
            {
              name: 'at',
              type: 'Hash',
              isOptional: true
            }
          ],
          type: 'u128'
        }
      }
    }
  });
}

exports.formateVal = (numStr) =>{
  const SI = [{
    power: -24,
    text: 'yocto',
    value: 'y'
  }, {
    power: -21,
    text: 'zepto',
    value: 'z'
  }, {
    power: -18,
    text: 'atto',
    value: 'a'
  }, {
    power: -15,
    text: 'femto',
    value: 'f'
  }, {
    power: -12,
    text: 'pico',
    value: 'p'
  }, {
    power: -9,
    text: 'nano',
    value: 'n'
  }, {
    power: -6,
    text: 'micro',
    value: 'µ'
  }, {
    power: -3,
    text: 'milli',
    value: 'm'
  }, {
    power: 0,
    text: 'Unit',
    value: '-'
  }, // position 8
  {
    power: 3,
    text: 'Kilo',
    value: 'k'
  }, {
    power: 6,
    text: 'Mill',
    value: 'M'
  }, // Mega, M
  {
    power: 9,
    text: 'Bill',
    value: 'B'
  }, // Giga, G
  {
    power: 12,
    text: 'Tril',
    value: 'T'
  }, // Tera, T
  {
    power: 15,
    text: 'Peta',
    value: 'P'
  }, {
    power: 18,
    text: 'Exa',
    value: 'E'
  }, {
    power: 21,
    text: 'Zeta',
    value: 'Z'
  }, {
    power: 24,
    text: 'Yotta',
    value: 'Y'
  }];
  let numArr = numStr.split(" ");
  let num = numArr[0].split(",").join("");
  if(numArr.length == 1){
    return num;
  }else{
    for(let i = SI.length;i--;){
      if(SI[i].value === numArr[1]){
        return String(Number(num) * Math.pow(10,SI[i].power));
      }
    }
  }
}