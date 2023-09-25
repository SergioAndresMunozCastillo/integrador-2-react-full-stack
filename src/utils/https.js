export const get = async (url) => {
    try {
        const res = await fetch(url)
        console.log(res)  
        const data = res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const post = async (url, dato) => {
    try {
        const config = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(dato)
        }

        const res = await fetch(url, config)
        const productoGuardado = res.json();
        return productoGuardado;
    } catch (error) {
        console.log(error)
    }
}

export const update = async (url, data, id) => {
    try {
        const config = {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        }

        const fullUrl = url + id
        const res = await fetch(fullUrl, config);
        const datoActualizado = res.json();

        return datoActualizado
    } catch (error) {
        console.log(error)
    }
}

export const del = async (url, data, id) => {
    try {
        const config = {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        }

        const fullUrl = url + id
        const res = await fetch(fullUrl, config)
    } catch (error) {
        console.log(error)
    }
}