import { Layout } from './Layout'
import { GitHub } from './GitHub'
import { getStream } from './getStream'
import { StreamContent } from './StreamContent'
import { StreamButton } from './StreamButton'

export async function Home() {
  return (
    <Layout title="rwsdk-jsx-stream">
      <GitHub />
      <StreamContent stream={await getStream()} />
      <StreamButton />
    </Layout>
  )
}
