import ErrorPage from 'next/error'
import DocBody from '../components/doc-body'
import { getDocBySlug, getAllDocs } from '../lib/api'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Doc({ post }) {
  if (!post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>{post.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Pocket Ninja</span>
                  <img className="h-8 w-auto sm:h-10" src="/logo_black.png" />
                </a>
              </Link>
            </div>
          </div>
        </header>

        <article className="mt-12">
          <DocBody content={post.content} />
        </article>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug, [
    'title',
    'slug',
    'content'
  ])

  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      post: {
        ...doc,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs(['slug'])

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      }
    }),
    fallback: false,
  }
}
