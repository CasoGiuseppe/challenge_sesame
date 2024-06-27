const { fetch: original } = window

export default window.fetch = async (...args) => {
    let [resource, config] = args;
    let response = await original(resource, config);

    let { ok, status } = response;
    if(!ok && status !== 200) {
        return Promise.reject(response)
    }
    return response
}