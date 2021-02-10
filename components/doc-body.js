import markdownStyles from './markdown-styles.module.css'

export default function DocBody({ content }) {
  return (
    <div className="max-w-sm md:max-w-prose mx-4 sm:mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
