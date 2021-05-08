export default function ({ query, enablePreview }) {
  console.log('preview', query, enablePreview)
  if (query.preview) {
    enablePreview()
  }
}
