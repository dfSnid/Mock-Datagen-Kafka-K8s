const { Kafka } = require('kafkajs');
const ip = require('ip');
const accountSchema = require('./schemas/accounts');
const transactionSchema = require('./schemas/transactions');
const utils = require('./helpers/utils');

const host = process.env.HOST_IP || ip.address();
const kafka = new Kafka({
    brokers: [`${host}:9092`],
    clientId: 'txnProducer',
  });

const topic1 = 'Accounts-Topic';
const topic2 = 'Transactions-Topic'
const producer = kafka.producer();

const getAccounts = () => {
    try{
        const int = utils.getRandomIntInclusive(1,116);
        const accounts = utils.getJson(accountSchema, int);
        return accounts;
    } catch (error){
        console.log(error);
    }
};

const getTransactions = () => {
  try{
      const int = utils.getRandomIntInclusive(1,116);
      const transactions = utils.getJson(transactionSchema, int);
      return transactions;
  } catch (error){
      console.log(error);
  }
};

const topicMessages = [
  {
    topic: topic1,
    messages: [
      {
        key: 'Account',
        value: JSON.stringify(getAccounts())
      }
    ],
  },

  {
    topic: topic2,
    messages: [
      {
        key: 'Transaction',
        value: JSON.stringify(getTransactions())
      }      
    ],

  }
]

const sendMessage = () => {
    return producer
      .sendBatch({ topicMessages }) 
      .then(console.log)
      .catch(e => console.error(`[example/producer] ${e.message}`, e))
};

const run = async () => {
    await producer.connect()
    setInterval(sendMessage, 5000)
};

run().catch(e => console.error(`[example/producer] ${e.message}`, e))







