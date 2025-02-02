export async function onRequest(context: EventContext<unknown, string, unknown>) {
    // Contents of context object
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context

    const url = new URL(request.url)
    url.hostname = "wimill.xyz"
    return fetch(url.toString(), { method: request.method, body: request.body, headers: request.headers })
}
