export const displayNTD = (value) => {
    let number = value

    // check empty or no
    if (number === undefined) return;

    // check type
    if (typeof value === 'string') {
        number = Number(number.replace(/[,]+/g, ""))*-1;
    }

    // define NumberFormat option
    const formatOption = {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
    }

    return new Intl.NumberFormat('zh-TW', formatOption).format(number);
}