<template>
  <div v-if="show" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
</template>

<script>
import store from '../store/index'
export default {
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  computed:{
    show(){
      return store.state.loading;
    }
  }

}
</script>
<style>
  .mdl-progress{
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
