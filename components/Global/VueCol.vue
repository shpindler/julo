<script>
import { BCol } from 'bootstrap-vue'

export default {
  name: 'VueCol',
  functional: true,
  render(h, { data, children }) {
    data.attrs = {
      ...data.attrs,
      tag: data.attrs.tag || 'section'
    }
    return h(BCol, data, children)
  }
}
</script>
