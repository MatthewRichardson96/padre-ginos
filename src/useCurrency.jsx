const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export const useCurrency = (price) => {
    return priceConverter(price);
}

export const priceConverter = (price) => {
    return intl.format(price);
}