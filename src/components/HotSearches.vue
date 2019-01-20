<template>
  <div>
    <div class="hot_searches_com">
      <h2 class="caption">Hot Searches</h2>
      <div class="hot_searches">
        <span v-for="(description,index) in descriptions" :key="description" >
          <span v-if="index"> · </span>
          <router-link :to="{name: 'positions', query: {description: description}}">{{description}}</router-link>
        </span>
      </div>
      <div class="hot_searches">
        <span v-for="(location,index) in locations" :key="location" >
          <span v-if="index"> · </span>
          <router-link :to="{name: 'positions', query: {location: location}}">{{location}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotSearches',
  data () {
    return {
      descriptions: [
        'PHP','Rails','Python','JavaScript','Scala','Android','iOS','Linux','Erlang'
      ],
      locations: [
        'San Francisco','New York City','Austin, TX','London','Europe'
      ]
    }
  }
}
</script>

<style lang=stylus scoped>
  .hot_searches_com
    margin-bottom 30px
  .hot_searches
    font-weight bold
    font-size 16px
    margin-bottom 6px
    a
      color #1d80be
      text-decoration underline
</style>