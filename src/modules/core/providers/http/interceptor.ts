const { fetch: original } = window

export default window.fetch = async (...args) => {
    const [resource, config] = args;
    const response = await original(resource, config);

    const { ok, status } = response;
    if(!ok && status !== 200) {
        return Promise.reject(response)
    }
    return response
}