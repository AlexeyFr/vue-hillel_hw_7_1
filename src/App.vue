<template>
  <div id="app">

    <header class="header">
      <div class="container">
        <router-link :to="{name: 'home'}" class="logo"><span>GitHub</span> Jobs</router-link>
        <div>
          <router-link :to="{name: 'faforites'}" class="link">Faforites</router-link>
          <router-link :to="{name: 'faq'}" class="link">How it works</router-link>
        </div>
      </div>
    </header>

    <div class="container">
      <router-view class="container" :key="$route.fullPath"/>
    </div>

  </div>
</template>

<style lang=stylus>
  /*Reset*/
  html,body,div,span,applet,object,iframe,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,p,h1,h2,h3,h4,h5,h6,dl,dt,dd,ol,ul,li,fieldset,form,legend,table,tbody,tfoot,thead,tr,th
    margin 0
    padding 0
    border 0
    outline 0
    font-size 100%
    vertical-align baseline
    background transparent
  body
    line-height 1
  ol,ul
    list-style none
  blockquote,q
    quotes none
  :focus
    outline 0
  ins
    text-decoration none
  del
    text-decoration line-through
  table
    border-collapse collapse
    border-spacing 0
  /*Reset*/
  body
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    font-family 'Avenir', Helvetica, Arial, sans-serif
    font-weight normal
    font-style normal
    line-height 1.2
    font-size 12px
    background #fafafa
    color #444
  .container
    width 100%
    max-width 980px
    margin 0 auto
  a
    text-decoration none
  .header
    height 50px
    padding 0 24px
    color #c9e2f1
    background #2B7FC3
    border-top 4px solid #1D5C8F
    border-bottom 2px solid #D7D5D4
    .container
      height 100%
      display flex
      justify-content space-between
      align-items center
  .logo
    color #fff
    font-size 24px
    span
      font-weight bold
      font-size 26px
  .link
    font-weight bold
    color #fff
    margin-left 10px
  .caption
    padding 20px 0
    font-size 22px
    color #294455
    font-weight bold
</style>