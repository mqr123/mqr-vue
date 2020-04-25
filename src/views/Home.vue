<template>
  <div class="home">
    <m-tree></m-tree>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import MTree from '@/components/tree'
export default {
  name: 'Home',
  components: {
    MTree
  }
}
</script>
