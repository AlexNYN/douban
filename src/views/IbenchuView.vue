<template>
    <div class="ibenchu-view">
        <ul class='movieList'>
            <li class='item' v-for='(movie,$index) in movieList'>
                <div class="cover-wrapper">
                    <img :src="coverList[$index]" width='60' height='120' alt="">
                </div>
                <div class="movie-detail">
                    <h1 class='name'>{{movie.name}}</h1>
                    <div class='hotness'>热度：{{movie.cur}}</div>
                    <div class='days'>上映天数：{{movie.days}}</div>
                    <div class='total'>当前票房：{{movie.sum}} 万</div>        
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// 导入vuex的mapState
import { mapState,mapGetters } from 'vuex'

    export default {
        name: 'ibenchu-view',
        data () {
            return {
                prefix:'./static/img/',
                coverList:[
                    '01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg',
                    '07.jpg','08.jpg','09.jpg','10.jpg','11.jpg','12.jpg','13.jpg',
                ]
            };
        },
        computed: {
            ...mapState({
                movieList: state => state.ibenchu.movieList
            })
        },
        methods: {
            getMovies () {
                this.$store.dispatch('GET_MOVIES');
            }
        },
        created () {
            this.coverList = this.coverList.map(item=>{                
                item = this.prefix + item
                return item
            })
            this.getMovies();
        }
    }
</script>

<style lang="stylus">
    .movieList{
      margin-top:4.8rem
      .item{
        display:flex
        padding:10px
        position:relative
        &:after{
          display:block
          position:absolute
          left:0
          bottom:0
          width:100%
          border-bottom:1px solid rgb(227,227,227)
          content:''
        }
          .cover-wrapper{
            width:33%
            margin-right:10px
            img{
              width:100px
              height:15rem       
            }
          }
          .movie-detail{
            width:66.66%
            h1{
              margin:0 0 0.8rem 0    
            }
            div{
              margin:1rem 0
              color: #aaa
              font-size:1.5rem     
            }
          }
      }
    }
</style>