module.exports = {
    Status: {
        values: ['Booked', 'Pending']
    },
    TransactionInformation: {
        faker: 'finance.transactionDescription'
    },
    BookingDateTime: {
        function: function(){
            return new Date().toISOString();
        }
    },
    AccountId: {
        faker: 'finance.account'
    },
    TransactionReference: {
        chance: 'string({"length":10, "alpha":true, "numeric":true})'
    },
    BankTransactionCode: {
        SubCode: {
            chance: 'string({"length":2, "numeric":true})'
        },
        Code: {
            chance: 'string({"length":4, "numeric":true})'
        }
    },
    ProprietaryBankTransactionCode: {
        Issuer: {
            values: ['ABC Bank', 'JKL Bank', 'FOO Bank', 'Great Bank']
        },
        Code: {
            function: function() {
                return this.object.Code;
            } 
        }
    },
    Amount: {
        Amount: {
            faker: 'finance.amount'
        },
        Currency: {
            values: ['NZD', 'AUD', 'USD']
        }
    },
    ValueDateTime: {
        function: function(){
            return this.object.BookingDateTime;
        }
    },
    CreditDebitIndicator: {
        values: ['Credit', 'Debit']
    },
    Balance: {
        Type: {
            function: function(){
                if (this.object.CreditDebitIndicator = "Credit") {
                    return 'InterimBooked';
                } else {
                    return 'Booked';
                }
            }
        },
        Amount: {
            Amount: {
                function: function(){
                    return this.object.Amount.Amount * Math.floor(Math.random() * 100);
                }
            },
            Currency: {
                function: function(){
                    return this.object.Amount.Currency;
                }
            }
        },
    CreditDebitIndicator: {
        function: function(){
            return this.object.CreditDebitIndicator;
        }
        }
    },
    TransactionId: {
        faker: 'datatype.uuid'
    }
};