import { Layout } from './Layout'
import { GitHub } from './GitHub'
import { StreamContent } from './StreamContent'

async function* generateText() {
  const messages = ['Streaming started...', 'Chunk 1', 'Chunk 2', 'Done!']
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i]
    yield <div key={i}>{message}</div>
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
}

export function Home() {
  const stream = generateText()
  return (
    <Layout title="rwsdk-jsx-stream">
      <GitHub />
      <StreamContent stream={stream} />
    </Layout>
  )
}
