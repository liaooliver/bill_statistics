const plusZero = (value) => {
    if (typeof (value) === 'string') value = parseInt(value);
    return value >= 10 ? value : `0${value}`;
};

module.exports = {
    plusZero
};