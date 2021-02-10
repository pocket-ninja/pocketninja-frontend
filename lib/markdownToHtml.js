import markdown from 'remark-parse'
import unified from 'unified'
import html from 'remark-html'

export default async function markdownToHtml(content) {
  const result = await unified()
    .use(markdown)
    .use(html)
    .process(content)

  return result.toString()
}
