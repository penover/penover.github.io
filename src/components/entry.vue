<template>
  <div class="mblog entry mblog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded">
    <main class="mdl-layout__content" :class="{'page-hide': !state.loaded}">
      <div class="demo-back">
        <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="'/'" title="go back" role="button">
          <i class="material-icons" role="presentation">arrow_back</i>
        </a>
      </div>
      <div class="mblog__posts mdl-grid">
        <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
          <div class="mdl-card__media mdl-color-text--grey-50" :style="{'background-image': 'url('+post.frontcover+')'}">
            <h3>{{post.title}}</h3>
            <div class="mdl-card__menu">
              <button id="demo-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
                <i class="material-icons">more_vert</i>
              </button>
              <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="demo-menu-lower-right">
                <li disabled v-if="!loginState.value" class="mdl-menu__item">Edit</li>
                <li v-if="loginState.value" v-link="'../edit/'+this.$route.params.id" class="mdl-menu__item">Edit</li>
              </ul>
            </div>
          </div>
          <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">
            <div class="minilogo"><img :src="post.avatar"></div>
            <div>
              <strong>{{post.author}}</strong>
              <span>{{post.time | timeago}}</span>
            </div>
            <div class="section-spacer"></div>
            <div class="meta__favorites" v-tap="tapFavorite">
              {{post.favorite}} <i class="material-icons" role="presentation" :class="{'faed':state.favorite}">favorite</i>
              <span class="visuallyhidden">favorites</span>
            </div>
          </div>
          <div class="entry-content">
            {{post.text}}
          </div>
          <div class="mdl-color-text--primary-contrast mdl-card__supporting-text comments">
            <div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <textarea rows=1 class="mdl-textfield__input" v-model="state.commentTmp"></textarea>
                <label for="comment" class="mdl-textfield__label">Join the discussion</label>
              </div>
              <button v-tap="addComment" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                <i class="material-icons" role="presentation">check</i><span class="visuallyhidden">add comment</span>
              </button>
            </div>
            <div class="comment mdl-color-text--grey-700" v-for="comment in post.comment">
              <header class="comment__header">
                <img :src="comment.avatar" class="comment__avatar">
                <div class="comment__author">
                  <strong>{{comment.name}}</strong>
                  <span>{{comment.time | timeago}}</span>
                </div>
              </header>
              <div class="comment__text">
                {{comment.text}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="mdl-layout__obfuscator"></div>
  </div>
</template>

<script>
import mdl from 'material-design-lite/material.js'
import store from '../store/index'
var Cloud = store.state.Cloud;
var Post = Cloud.Object.extend('Post');
var Comment = Cloud.Object.extend('Comment');
let self = null;
export default {
  data() {
      self = this;
      this.getData()
      return {
        state: {
          favorite: false,
          commentTmp: '',
          loaded: false
          
        },
        post: {
          frontcover: 'dist/welcome_card.jpg',
          comment: []
        }
      }
    },
    computed: {
      loginState() {
        return store.state.logined
      }
    },
    ready: function() {
      this.$nextTick(function() {
        componentHandler.upgradeAllRegistered();
      })
    },
    methods: {
      getData() {
          this.loadPost(function(tmp) {
            self.post = tmp
            self.$nextTick(function() {
              componentHandler.upgradeAllRegistered();
              store.actions.hideLoading()
              self.state.loaded = true
            })

          })
        },
        showModal(title, text) {
          store.actions.showModal(title, text);

          this.$nextTick(function() {
            componentHandler.upgradeAllRegistered();
          })
        },
        loadPost(add) {
          var query = new Cloud.Query(Post);
          var tmp = null;
          query.include('author');
          query.get(this.$route.params.id, {
            success: function(post) {
              var object = post;

              tmp = {
                "id": object.id,
                "title": object.get('title'),
                "frontcover": object.get('frontcover'),
                "text": object.get('text'),
                "author": object.get('author').getUsername(),
                'avatar': object.get('author').get('avatar'),
                "time": object.updatedAt,
                "favorite": object.get('favorite'),
                "comment": []
              };

              (add)(tmp);
              self.loadComment()

            },
            error: function(object, error) {
              self.showModal('WARN', 'LOADING ERROR')
            }
          });
        },
        loadComment() {
          var tmp = [];
          var query = new Cloud.Query(Comment);
          var post = new Post();
          post.id = this.$route.params.id;

          query.include('author')
          query.equalTo('post', post);
          query.find({
            success: function(comments) {
              for (var c of comments) {
                tmp.push({
                  "avatar": c.get('author').get('avatar'),
                  "name": c.get('author').getUsername(),
                  "time": c.updatedAt,
                  "text": c.get('text'),
                })
              }
              self.post.comment = tmp;
            }
          });
        },
        tapFavorite: function() {
          var query = new Cloud.Query(Post);
          query.get(this.$route.params.id, {
            success: function(post) {

              if (self.state.favorite) {
                self.state.favorite = false;
                self.post.favorite--;
                post.increment('favorite', -1);
              } else {
                self.state.favorite = true;
                self.post.favorite++;
                post.increment('favorite', 1);
              }

              post.save();

            },
            error: function(object, error) {
              self.showModal('WARN', 'favorite FAILE')
            }
          });

        },
        addComment: function() {
          var query = new Cloud.Query(Post);
          var post = new Post();
          var comment = new Comment();

          var currentUser = store.state.Cloud.User.current();
          if (!currentUser) {
            self.showModal('WARN', 'PLEASE login first')
            return false;
          }

          post.id = this.$route.params.id;
          comment.set('post', post);
          comment.save({
            "author": currentUser,
            "time": new Date(),
            "text": self.state.commentTmp
          }, {
            success: function(comment) {
              self.loadComment()
            },
            error: function(comment, error) {
              self.showModal('WARN', 'LOADING ERROR，' + error.message)
            }
          });
        }
    },
    ready: function() {
      store.actions.showLoading();
      window.scrollTop = 0;
    }
}
</script>
<style>
.faed {
  color: rgb(255, 64, 129);
}

.entry-content {
  border-radius: 2px;
  padding: 20px 56px;
  margin-bottom: 80px;
  min-height: 300px;
}

.entry .comment > .comment__actions > button {
  background: none;
}

.entry .comments > .comment {
  margin-bottom: 2rem;
}
.page-hide{
  opacity: 0;
}
</style>

