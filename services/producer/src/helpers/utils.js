const mocker = require('mocker-data-generator').default;

module.exports.getJson = (schemaObject, number) => {
    const data = mocker()
    .schema('blob', schemaObject, number)
    .buildSync();
    return data.blob;
};

module.exports.getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

