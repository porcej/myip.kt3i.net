export default {
  async fetch(request): Promise<Response> {
    const ip = request.headers.get("CF-Connecting-IP");
    if (!ip) {
      return new Response(null, { status: 400 });
    }
    return new Response(ip, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  },
} satisfies ExportedHandler<Env>;
