<template>
  <div>

    <form @submit.prevent="searchPosition()">
      <div class="form_flex">
        <div>
          <div class="input_title">Job Description</div>
          <input type="text" class="input" name="description" v-model="formFields.description" placeholder="Filter by title, benefits, companies, expertise">
        </div>
        <div>
          <div class="input_title">Location</div>
          <input type="text" class="input" name="location" v-model="formFields.location" placeholder="Filter by city, state, zip code or country">
        </div>
        <div>
          <label class="label_checkbox">
            <input type="checkbox" name="full_time" v-model="formFields.full_time">
            <span>Full Time Only</span>
          </label>
        </div>
        <button type="submit" class="submit">Search</button>
      </div>
    </form>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="positions.length > 0">
        <div class="positions">
          <h1 class="caption">Showing 1 - {{positions.length}}</h1>
          <div class="position" v-for="(position, index) in positions" :key="index">
            <div class="flex_column">
              <router-link class="title" :to="{ name: 'position', params: { id: position.id }}">{{position.title}}</router-link>
              <div>
                <span class="company">{{position.company}} - </span><span class="type">{{position.type}}</span>
              </div>
            </div>
            <div>
              <div class="location">{{position.location}}</div>
              <div class="created_at">{{postedOn(position)}}</div>
            </div>
          </div>
          <router-link class="more_jobs" v-if="more_jobs" :to="{name: 'positions', query: {description: formFields.description, location: formFields.location, full_time: formFields.full_time, page: page}}">More Awesome Jobs</router-link>
        </div>
      </div>
      <h1 v-else class="caption">Nothing found</h1>
    </div>

  </div>
</template>

<script>

  import axios from 'axios';
  import moment from 'moment';

  const url = 'http://localhost:3000/positions.json';

  export default {
    data () {
      return {
        formFields: {
          description: "",
          location: "",
          full_time: false,
        },
        positions: [],
        loading: true,
        more_jobs: false,
        page: 1,
      }
    },
    created () {
      this.fetchData();
    },
    methods: {
      fetchData () {

        const location_page = this.$route.query.page;
        if (location_page > 1) {
          this.page = location_page;
        }

        this.loading = true;
        const {description, location, full_time, page} = this.$route.query;

        this.formFields.description = description;
        this.formFields.location = location;
        this.formFields.full_time = full_time;

        axios.get(url, {params: {description, location, full_time, page}})
          .then(res => {
            this.positions = res.data;
            this.loading = false;
            if (this.positions.length == 50) {
              this.more_jobs = true;
              this.page++;
            }
          })
          .catch(console.log)
      },
      postedOn (position) {
        return moment(new Date(position.created_at)).fromNow();
      },
      searchPosition(){
        if(this.formFields.description !== "" || this.formFields.location !== ""){
          this.$router.push({ name: 'positions', query: {description: this.formFields.description, location: this.formFields.location, full_time: this.formFields.full_time}});
        }
      }
    }
  }

</script>

<style lang=stylus scoped>
  .form_flex
    display flex
    justify-content space-between
    align-items flex-end
    padding 20px 0
  .input_title
    margin-bottom 2px
  .input
    width 300px
    box-sizing border-box
    border 1px solid #cacaca
    font-family 'Avenir', Helvetica, Arial, sans-serif
    font-weight normal
    font-style normal
    line-height 1.2
    color #8c97a3
    font-size 12px
    padding 6px 12px
  input::-webkit-input-placeholder
    color #cacaca
    font-size 12px
    opacity 1
  input::-moz-placeholder
    color #cacaca
    font-size 12px
    opacity 1
  input:-moz-placeholder
    color #cacaca
    font-size 12px
    opacity 1
  input:-ms-input-placeholder
    color #cacaca
    font-size 12px
    opacity 1
  .submit
    display block
    height 30px
    background linear-gradient(to top, #869ca9, #a2b8c5)
    border 0
    outline none
    padding 0 20px
    border-radius 3px
    cursor pointer
    font-family 'Avenir', Helvetica, Arial, sans-serif
    font-weight normal
    font-style normal
    text-align center
    line-height 1.2
    color #fff
    text-transform uppercase
  .label_checkbox
    display flex
    align-items center
    input
      margin 0 5px 0 0
    span
      font-weight bold
  label
  .checkbox
  .submit
    cursor pointer
    user-select none
  .positions
    width 560px
    padding 0 24px 15px 24px
    box-shadow 0 0 1px 2px #ebebeb
    margin-bottom 10px
  .position
    display flex
    justify-content space-between
    align-items center
    padding 10px 0
    border-top 1px solid #ddd
    .title
      font-weight bold
      font-size 14px
      color #1d80be
    .company
      color #777
    .type
      font-weight bold
      color #1d9a00
    .location
      color #666
    .created_at
      color #999
  .flex_column
    display flex
    flex-direction column
  .position .location,
    .position .created_at
    text-align right
  .more_jobs
    display block
    padding 0 5px
    height 27px
    line-height 27px
    text-align center
    font-weight bold
    color #fff
    text-shadow -1px -1px 0 #2371a3
    background linear-gradient(top, #46a9e7, #1e81bf)
    border-radius 4px
    cursor pointer
</style>