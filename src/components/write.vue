<template>
    <div @click="hideLogin" class="writing mdl-layout mdl-js-layout mdl-layout--fixed-header
            mdl-layout--fixed-tabs">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <div class="demo-back">
                    <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="'/'" title="go back" role="button">
                        <i class="material-icons" role="presentation">arrow_back</i>
                    </a>
                </div>
                <!-- Title -->
                <span class="mdl-layout-title" v-link="{name:'home'}">mBlog</span>
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation -->
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" @click="newPost">DONE</a>
                </nav>
            </div>
        </header>
        <main class="mdl-layout__content">
            <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
                <div class="page-content">
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet"></div>
                        <div class="mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet">
                            <div class="mdl-card__title" :style="{'background-image': 'url('+(post.frontImg == null ? 'dist/shopping.jpg' : post.frontImg)+')'}">
                                <h2 class="mdl-card__title-text" >{{post.title=='' ? 'unnamed' : post.title}}</h2>
                                 <div class="mdl-card__menu">
                                <button id="demo-menu-lower-right"
                                          class="mdl-button mdl-js-button mdl-button--icon">
                                    <i class="material-icons">more_vert</i>
                                  </button>

                                  <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                      for="demo-menu-lower-right">
                                    <li class="mdl-menu__item"><input @change="upImg" type="file" id="frontImg">Upload Image</li>
                                  </ul>
                                  </div>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="text" v-model="post.title">                                
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <textarea class="mdl-textfield__input" id="content" v-model="post.content" type="text" rows="15"></textarea>
                            </div>
                        </div>
                        <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone"></div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>


<script>
import autosize from 'autosize'
import store from '../store/index'
var Post = store.state.Cloud.Object.extend('Post');
var Cloud = store.state.Cloud
var self = null;
export default {
    data() {
        self = this;
        var edit = false;
        if(this.$route.params.id != undefined){
            edit = true
        }
            return {
                edit:edit,
                post: {
                    title: '',
                    content: "",
                    frontImg:null
                }
            }
        },
        ready: function() {
            store.actions.showLoading();
            
            if(this.edit){
                this.loadPost(function(tmp){
                    self.post = {
                        title: tmp.title,
                        content: tmp.text,
                        frontImg: tmp.frontcover
                    }

              self.$nextTick(function(){
                componentHandler.upgradeAllRegistered();
              })
            })
            }else{
                this.$nextTick(function() {
                    componentHandler.upgradeAllRegistered();
                })
            
            }
            autosize(document.querySelector('#content'));
            
        },
        computed: {
            loginState() {
                return store.state.logined
            }
        },
        methods: {
            showModal(title, text) {
                store.actions.showModal(title, text);

                this.$nextTick(function() {
                    componentHandler.upgradeAllRegistered();
                })
            },
            loadPost:function(add){
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
                      "comment":[]
                  };
                    
                  (add)(tmp);

                  },
                  error: function(object, error) {
                    self.showModal('WARN','Loading ERROR')
                  }
              });
            },
            newPost() {

                var currentUser = store.state.Cloud.User.current();
                if (self.post.title == '') {
                    self.showModal('WARN','No Title')
                    return false;
                }
                if (self.post.content == '') {
                    self.showModal('WARN', 'No Content')
                    return false;
                }
                if(self.post.frontImg == null){
                    self.post.frontImg = 'dist/shopping.jpg';
                }

                if(!this.edit){
                    var post = new Post();
                
                post.save({
                    "title": self.post.title,
                    "frontcover": self.post.frontImg,
                    "text": self.post.content,
                    "author": currentUser,
                    "favorite": 0
                }, {
                    success: function(post) {
                        self.showModal('Notification', 'You have done the text!')
                    },
                    error: function(post, error) {
                        self.showModal('WARN', 'Something have wrong,PLEASE try again.')
                    }
                });
                }else{
                    var query = new Cloud.Query(Post);
                    query.get(this.$route.params.id, {
                        success: function(post) {
                          
                          post.save({
                                "title": self.post.title,
                                "frontcover": self.post.frontImg,
                                "text": self.post.content,
                                "author": currentUser
                            }, {
                                success: function(post) {
                                    self.showModal('Notification', 'You have done the text!')
                                },
                                error: function(post, error) {
                                    self.showModal('WARN', 'Something have wrong,PLEASE try again.')
                                }
                            });
                        },
                        error: function(object, error) {
                          self.showModal('WARN', error.message)
                        }
                    });
                }
            },
            upImg(){
                store.actions.showLoading();
                var fileUploadControl = document.getElementById('frontImg');
                if (fileUploadControl.files.length < 1) {
                     self.showModal('WARN', 'WRONG the type of Image.')
                     return false;
                }
                var file = fileUploadControl.files[0];
                var name = 'avatar.jpg';

                var avFile = new Cloud.File(name, file);
                avFile.save().then(function() {
                    self.post.frontImg = avFile.url()
                    store.actions.hideLoading();
                }, function(error) {
                  self.showModal('WARN', error.message)
                });
            
            }
        }
        
}
</script>
<style>
.writing {
    background: #fff
}

.writing .mdl-layout__content {
    margin-top: 112px;
}

@media screen and (max-width: 1024px) {
    
}

.writing .mdl-navigation__link {
    cursor: pointer;
}

.writing .mdl-textfield {
    margin: 1rem 0;
    width: 100%;
}

.writing .preview-content {
    border-radius: 2px;
    padding: 220px 56px 56px 56px;
    margin-bottom: 80px;
    min-height: 600px;
    position: relative;
}

.writing .preview-content .mdl-card__title{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 200px;
}
.writing .mdl-layout__header-row {
    height: 56px;
    padding: 0 16px 0 0px;
}

.writing .mdl-layout-title {
    padding-left: 20px;
}
.writing .mdl-card {
  width: 512px;
}
.writing .mdl-card__title {
    position: relative;
    color: #fff;
    height: 176px;
    background: url(../assets/img/shopping.jpg) center/cover;
}
#frontImg{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>

