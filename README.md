How to Submit a Pull Request for Adding Logo and Contract Address

If you are interested in listing your tokens on Fusotao, you can help by submitting a pull request that adds your logo and contract address to the repository. Here is a step-by-step guide on how to do it:

1. Fork the Repository
The first step is to create a fork of the Fusotao Registry repository. This will create a copy of the repository that you can work on independently. To do this, click on the "Fork" button on the top right corner of the repository page.

2. Clone the Repository
Once you have created a fork, you will need to clone it to your local machine. To do this, copy the URL of your forked repository and run the following command in your terminal:

git clone <forked_repository_url>

3. Create a New Branch
Before making any changes, create a new branch in your local repository. This will help keep your changes separate from the main branch and make it easier to submit your changes as a pull request. To create a new branch, run the following command:

git checkout -b <new_branch_name>

4. Add Your Logo and Contract Address
Now that you have created a new branch, you can start making changes to the code. In this case, you will need to create a folder names with your contract address under the appropriate chain folder, then put a `logo.png` and `token.json` into it.

Below is an example for BEP20 USDT:

```
{
  "name":"Binance-Peg",
  "type":"BEP20",
  "symbol": "BSC-USD",
  "decimals": 18,
  "code": 11,
  "price_id": "whatever",
  "contract": "0x55d398326f99059fF775485246999027B3197955"
}
```

Make sure you filled the correct `code`, `symbol`, `type`, `decimals` and `contract` fields. The `code` can be found on the rpc: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fgateway.mainnet.octopus.network%2Ffusotao%2F0efwa9v0crdx4dg3uj8jdmc5y7dj4ir2#/chainstate



5. Commit and Push Your Changes
Once you have made your changes, it's time to commit them to your local repository and push them to your forked repository on GitHub. To do this, run the following commands:

git add .
git commit -m "Added logo and contract address for <project>"
git push origin <new_branch_name>

6. Submit a Pull Request
Finally, it's time to submit your changes as a pull request to the main Fusotao Registry repository. To do this, go to your forked repository on GitHub and click on the "New pull request" button. Follow the prompts to create a new pull request and wait for the project maintainers to review and merge your changes.

And that's it! By following these simple steps, you can contribute to the Fusotao Registry project and help make it even better.
