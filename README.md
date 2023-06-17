# Fusotao Register Token Extra Metadata

## Preparation
### 1. Image of the Token Logo
```javascript
  File Extension: png . Uppercase PNG is considered invalid
  File Name：logo.png
  Size: 256px * 256px
  Background: transparent is recommanded.
```
#### Tip: 
There are two online services recommended to edit your image:

- [TinyPng](https://tinypng.com/)


### 2. Token Information File
```javascript
  File Extension: json . Uppercase JSON is considered invalid
  File Name：info.json
```
The following information must be included in the info.json file. Please make sure that the details are correct and follow the format requirements. The contract address should follow the checksum address format. (Please refer to the sample below).   
Note: Your request will not be allowed if there is wrong info or formate in your files.


<!-- ## First Step: Register Token 

- Register Token to fusotao on [Webapp](https://portal.fusotao.org/#/listing)

## Second Step: Submit token metadate
:point_right: Attention: The value must correspond to the chain type of the registered token.

- Find Correct path of chained  correspond your registerd token, create a file with your token contract, if your token is Ethereum token, token contract must be the checksum address.

- Add token logo.png and token.json to your created file    
    #### Token logo must be .png  

    #### token.json content be like:      
    ```javascript
       {
          "name":string, // require, token name
          "type":string, //require, token type same as your registerd token type
          "symbol": string, //require, symbol
          "decimals": number, //require, decimal
          "code": number, //require, code is registered token code on fusotao 
          "contract": string, // require, 
          "price_id": string | '' // optional, this is coingecko token id ,for fetch token price
        }
    ```
## Third Step: Submit pr and wait to be reviewed -->


