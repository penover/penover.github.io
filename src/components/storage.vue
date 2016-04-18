<template>
	<main class="mdl-layout__content">
		<div class="demo-back">
        <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="'/'" title="go back" role="button">
          <i class="material-icons" role="presentation">arrow_back</i>
        </a>
      </div>
        <div class="mblog__posts mdl-grid">
          <div v-link="{ name: 'entry', params: { id: post.id }}" class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" v-for="post in posts">
            <div class="mdl-card__media mdl-color-text--grey-50" :style="{'background-image': 'url('+post.frontcover+')'}">
              <h3><a >{{post.title}}</a></h3>
            </div>
            <div class="mdl-color-text--grey-600 mdl-card__supporting-text">{{post.text | shorttext}}
            </div>
            <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
              <div class="minilogo"><img :src="post.avatar" alt=""></div>
              <div>
                <strong>{{post.author}}</strong>
                <span>{{post.time | timeago}}</span>
              </div>
            </div>
          </div>
        </div>
    </main>
</template>

<script>
import mdl from 'material-design-lite/material'
import store from '../store/index'
var Cloud = store.state.Cloud;
export default {
  data(){
    self = this;
    return{
      site:{
        name:'mblog',
        skip:0
      },
      posts:[]
    }
  },
  asyncData: function(resolve, reject) {
    var self = this;
    this.loadPost(0,function(tmp){
      store.actions.hideLoading();
      resolve({
              posts:tmp
            })
      self.site.skip = 10;
      self.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    })
    
  },
  ready:function(){
      store.actions.showLoading();
      window.scrollTop = 0;
  },
  computed:{
    loginState(){
      return store.state.logined
    }
  },
  methods:{
    getData(){
      this.loadPost(self.site.skip,function(tmp){
        store.actions.hideLoading();
        self.posts = tmp
        self.site.skip = 10;
        self.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
      })
      
    },
    showModal(title,text){
      store.actions.showModal(title,text);
      
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    loadPost(skip,add){
      var Post = Cloud.Object.extend('Post');
      var query = new Cloud.Query(Post);
      var tmp = [];
      query.addDescending('updatedAt');
      query.skip(skip);
      query.limit(10);
      query.include('author')
      query.find({
        success: function(results) {
          var object = null;
          for (var i = 0; i < results.length; i++) {
            object = results[i];
            if(object.get('favorite') > 0){
            tmp.push({
              "id": object.id,
              "title": object.get('title'),
              "frontcover": object.get('frontcover'),
              "text": object.get('text'),
              "author": object.get('author').getUsername(),
              "avatar":object.get('author').get('avatar'),
              "time": object.updatedAt,
              "favorite": object.get('favorite'),
              "comment": object.get('comment')
          });
            }
   
          }
          (add)(tmp);
        },
        error: function(error) {
          console.log('Error: ' + error.code + ' ' + error.message);
        }
      });
    },
    
    goEntry(id){
      window.scrollTop = 0;
      this.$route.router.go('entry/'+id)
    }
  }
}
</script>