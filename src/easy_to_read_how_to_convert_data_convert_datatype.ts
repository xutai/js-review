/*  */
function easy_to_read_how_to_convert_data_convert_datatype(from, to, method, params, value) {
    // string to number
    if (from === 'string' && to === 'number') {
        return Number(value)
    }
    // number to string
    if (from === 'number' && to === 'string') {
        return value.toString()
    }
    //string to array
    if (from === 'string' && to === 'array' && method === 'split') {
        return value.split(params)
    }
    // array to string
    if (from === 'array' && to === 'string' && method === 'join') {
        return value.join(params)
    }
    // array to string
    if (from === 'array' && to === 'string' && method === 'toString') {
        return value.toString()
    }
}
