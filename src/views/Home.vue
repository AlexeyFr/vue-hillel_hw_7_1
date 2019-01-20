<template>

  <div>
    <Positions/>
    <HotSearches/>
  </div>

</template>

<script>

import Positions from '@/components/Positions.vue'
import HotSearches from '@/components/HotSearches.vue'

export default {
  components: {
    Positions,
    HotSearches
  }
}

</script>