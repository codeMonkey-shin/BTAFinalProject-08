const { decodeTxRaw } = require('@cosmjs/proto-signing');
const { SigningStargateClient, StargateClient } = require('@cosmjs/stargate');
const { toHex } = require("@cosmjs/encoding");
const { sha256 } = require("@cosmjs/crypto");
const { extractTxInfo } = require("../modules/parseTxInfo");
const env = process.env;

const endPoint = env.END_POINT // 노드 주소


module.exports = {
    getTxHashFromTxRaw: async (req, res) => { // txRaw로부터 해당 트랜잭션 해쉬 리턴 Tx Raw to Tx Hash
        try {
            let { txRaw } = req.body;
            console.log(txRaw)
            const txHash_signing = toHex(sha256(Buffer.from(txRaw, 'base64')));
            res.status(200).json(txHash_signing);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getTxInfoFromTxRaw: async (req, res) => { // txRaw로부터 해당 트랜잭션 정보 리턴
        try {
            let { txRaw } = req.body;
            const txInfo_signing = decodeTxRaw(txRaw);
            res.status(200).json(txInfo_signing);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getTxInfoFromTxHash: async (req, res) => { // txHash로부터 해당 트랜잭션 정보 리턴
        try {
            const signingClient = await SigningStargateClient.connect(endPoint)
            let txHash = req.query.hash;
            const txInfoAfterSigned = await signingClient.getTx(txHash);
            const extractedTx = await extractTxInfo(txInfoAfterSigned);
            res.status(200).json(extractedTx);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}