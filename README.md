# rwsdk-jsx-stream

React Server Components (RSC) can generate streams of JSX components. This extends the more common pattern of atomically returning a single server-rendered component, by returning multiple components as separate chunks of a [readable stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

This implementation performs streaming once during the initial page load, resulting in chunks arriving as part of the main document HTML. It also makes the stream available as a `getStream()` server function, which can be fetched on demand from the client.

This is a [RedwoodSDK](https://docs.rwsdk.com/) project bootstrapped with [`jldec/rwsdk-minimal-starter`](https://github.com/jldec/rwsdk-minimal-starter).

For the Next.js version, see [nextjs-jsx-stream](https://github.com/jldec/next-jsx-stream).

### Deployed
https://rwsdk-jsx-stream.jldec.workers.dev/

### Dev
- clone
- pnpm install
- pnpm dev

### Context
https://x.com/benapatton/status/1971619183831244990

> Alright, I know someone has an example of an @nextjs
> app that fetches an api endpoint in an server component and the streams that to the client.
>
> - I have a python fast api
> - I want to fetch it in a server component
> - I don't want to use the useChat hook
