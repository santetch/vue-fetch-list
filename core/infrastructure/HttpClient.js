class HttpClient {

    async get(path) {
        const res = await fetch(path);
        const dataJSON = await res.json();

        return dataJSON;
    }
}

export default HttpClient;