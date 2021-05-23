export default function ({ query, enablePreview }) {
  if (query.preview) {
    console.log('preview plugin', query, enablePreview)
    enablePreview()
  }
}
