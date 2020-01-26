<script>
import { BRow } from 'bootstrap-vue'

export default {
  name: 'VueRow',
  functional: true,
  render(h, { data, children }) {
    return h(BRow, data, children)
  }
}
</script>
