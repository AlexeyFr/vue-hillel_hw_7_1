<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="positions.length > 0">
        <div class="positions">
          <h1 class="caption">Faforites</h1>
          <div class="position" v-for="(position, index) in positions" :key="index">
            <router-link class="title" :to="{ name: 'position', params: { id: position.id }}">{{position.title}}</router-link>
            <button class="remove" @click="removeFromFavorites(position.id, index)">Remove from favoritess</button>
          </div>
        </div>
      </div>
      <h1 v-else class="caption">You have no favorites</h1>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    data () {
      return {
        positions: [],
        loading: true,
      }
    },
    created () {
      const favoritePositions = this.$store.state.favoritePositions;
      if (!favoritePositions.length) {
        this.loading = false;
      }
      var $this = this;
      favoritePositions.forEach(function(PositionId) {
        axios.get(`http://localhost:3000/positions/${PositionId}.json`)
          .then(res => {
            $this.positions.push(Object.assign({}, res.data));
            $this.loading = false;
          })
          .catch(error => {
              console.log(error);
          });
      });
    },
    methods: {
      removeFromFavorites (positionId, index) {
        this.$store.dispatch('removeFromFavorites', positionId);
        this.positions.splice(index, 1);
      }
    }
  }

</script>

<style lang=stylus scoped>
 .position
    display flex
    align-items center
    justify-content space-between
    margin-bottom: 10px;
  .title
    font-weight: bold;
    font-size: 14px;
    color: #1d80be;
  .remove
    display block
    height 27px
    background #2b7fc3
    border 0
    outline none
    padding 0 20px
    border-radius 3px
    font-size: 12px;
    cursor pointer
    font-family 'Avenir', Helvetica, Arial, sans-serif
    font-weight normal
    font-style normal
    text-align center
    line-height 1.2
    color #fff
    text-transform uppercase
</style>