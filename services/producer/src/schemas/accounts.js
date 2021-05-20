module.exports = {
    AccountId: {
        faker: 'finance.account'
    },
    Currency: {
        faker: 'finance.currencyName'
    },
    AccountType: {
        values: ['Personal', 'Joint', 'Additional']
    },
    AccountSubType: {
        values: ['Cheque', 'Savings', 'Credit']
    },
    Nickname: {
        faker: 'lorem.word'
    }

}