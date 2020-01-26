<script>
import { BContainer } from 'bootstrap-vue'

export default {
  name: 'VueContainer',
  functional: true,
  render(h, { data, children }) {
    return h(BContainer, data, children)
  }
}
</script>
