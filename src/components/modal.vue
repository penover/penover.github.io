<template>
  <div class=" m-modal mdl-card mdl-shadow--4dp" id="m-modal" v-show="modal.show">
    <div class="mdl-card__supporting-text">
      {{modal.title}}
    </div>
    <div class="mdl-card__supporting-text">
      {{modal.text}}
    </div>
    <div class="mdl-card__actions">
     <a v-tap="hideModal" class="modal-btn mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">ok</a>
    </div>
  </div>
</template>


<script>
import autosize from 'autosize'
import store from '../store/index'
var Post = store.state.Cloud.Object.extend('Post');

export default {
  computed:{
    modal(){
      return store.state.modal;
    }
  },
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  methods:{
    hideModal(){
      store.actions.hideModal()
    }
  }
    
}
</script>
<style>
  .m-modal{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 100;
  }
  .m-modal .modal-btn{
    float: right;
  }
  .m-modal .mdl-card__actions{
    position: absolute;
    bottom: 0;
  }
</style>
