async function request(method, url, body) {
    const token = localStorage.getItem('authToken');
    const headers = { Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(url, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
    });

    const isJson = response.headers.get('content-type')?.includes('json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
        if (response.status === 401 && token) {
            localStorage.removeItem('authToken');
            window.location.assign('/account');
        }
        throw Object.assign(new Error(`Request failed with status ${response.status}`), { status: response.status, data });
    }

    return data;
}

export function errorMessage(err, fallback) {
    if (err?.status === 429) return 'Too many attempts. Please wait a minute and try again.';
    const firstFieldError = Object.values(err?.data?.errors ?? {})[0]?.[0];
    return err?.data?.detail || firstFieldError || err?.data?.title || fallback;
}

const http = {
    get: (url) => request('GET', url),
    post: (url, data = {}) => request('POST', url, data),
};

export default http;
