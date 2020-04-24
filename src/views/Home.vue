<template>
  <div class="home">
    <router-view/>
    <m-tree></m-tree>
  </div>
</template>

<script>
// @ is an alias to /src
import MTree from '@/components/tree'

export default {
  name: 'Home',
  components: {
    MTree
  }
}
</script>
