<script>
import { BCol } from 'bootstrap-vue'

export default {
  name: 'VueCol',
  functional: true,
  render(h, { data, children }) {
    return h(BCol, data, children)
  }
}
</script>
