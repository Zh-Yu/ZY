<template>
  <div class="computers">
    <div class="cards">
      <ul>
        <li v-for="item in data" class="card">
          <img class="img" :src="item.image_url">
          <div class="right">
            <span class="title">{{item.title}}</span>
            <span class="desc">{{item.editor_rec_desc}}</span>
            <span class="detail">{{item.v_detail}}</span><span class="lable">代买</span>
            <div class="left-bottom">
               <img  class="pic"   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAeCAYAAABAFGxuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzUyNDFGQ0NCRjY4MTFFNjkxMENGRTYyQkRENDY4MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzUyNDFGQ0RCRjY4MTFFNjkxMENGRTYyQkRENDY4MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTI0MUZDQUJGNjgxMUU2OTEwQ0ZFNjJCREQ0NjgzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NTI0MUZDQkJGNjgxMUU2OTEwQ0ZFNjJCREQ0NjgzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptb1Mt0AAALNSURBVHjazJdLbA1RHMbnXr2t4jbUswmNN2XLQjwSGhIikUpKQlMJFvVKaDyKeC0kJDYWWLIREuIusEOIBYIgNBae0UrqGc96NFrfl3zT/DOZuTNX6s79kl9mzsyZc745c+Z/zj+RyWQco1KwHCwGk0Ha8VcfUOJE0y/QHnDvK3gEzoGT4Kd7o8hUmgLOgJFOz6oky0sMAJVgAdgJasFda2wauAJ6q/wD3AFtzv9VhQaE/Y4C18FscIvG+oOMMXUCbAXvnPxoMDgE6jWV6GUcja0FQ1XpOFjp5FccgBUgCeo0imtYWKQKHaDJiU9bwB+d19DYGBWawdsYjbXJAzWexspV+ObEry86pmgs4RSeSpMFZqhDx2JrrD3LAwwlw0MaLTfTIkgjTFjyU7eHpI9br2aB16AFXAqI4jv025PtAS92GbwCrWBm2NBF+ZSNZiSqwTyfJWev2iK7QS9Pnflgjs4Hgs09YeyFOWecee6zSL805RYTj1w9BZ2m/CSgr4TfIh6kXTqOBqdMrLGq0Sdke/t87j/UroUR/jHYE9BXmZ+xoNFjfNsUYr5Zy0k2nRaRZM2kCylsFFoc6w4bNPZRhb4FYKjMjpj7R03SrxyXBoEqnT+jsfMmHh2I0Rj7Tun8Ao0dMZ9zNTgG+uXRUFp9rlL5PctFWkbqtaWl4wawDNxWcO0MaZj3z2rJ8YorwDYwQdtm1v1s7nP9nWHm1m+wFHxw49hFMFcBtEIVq3N46wZlWI1aC10tBPsjttGqWHjNG8d4YSzYCK6CNzl+klpFdSYyxSbRCFKXvhb7Wg8muqb8oj23HYeVQg3T2hUGU797ep5z8yC4rxFPmbaXeJ5j30PUF+f591wX8TDdVG64DnzStSptkZoi7vf+aXcRRZzUR5lEKAXs0vVKzy4k78Zsjsi8dLr5vI7J7mMz5uoGmAo2KC4x9X+QSwN/BRgAojeJU7aEAuAAAAAASUVORK5CYII=">
               <span class="comment_count">{{item.comment_count}}</span>
               <span class="mall">{{item.mall}}</span>
               <span class="time">{{item.timestamp|timestampfilter}}</span>
            </div>
          </div> 
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
   export default{
    props:{
      data:{
        type:Array
      } 
    },
    data(){
      return{

         }
      },
    created(){
    },
   filters:{
    timestampfilter(timestamp){
     var localtime = new Date(timestamp);
     return localtime.getHours()+':'+localtime.getMinutes();
     }
    }
   }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.computers
  background:rgb(147,153,159)
  position: absolute
  .cards
    position: relative
    .card
      margin-top: 4px
      padding: 10px 8px
      background: #fff
      font-size: 0
      .img 
        display:inline-block
        border-radius: 5px
        height:90px
        width:90px
        vertical-align: top
        margin-right: 8px
      .right
        display: inline-block
        vertical-align: top
        .title
          font-size: 16px
          display: block
          padding-bottom:10px
        .desc
          font-size: 16px
          color: rgb(147,153,159)
          display: block
          padding-bottom:10px
        .detail
          font-size: 10px
          color: red
          padding-bottom:10px
        .lable
          font-size: 14px
          height: 14px
          width: 14px
          background: red
          margin-left: 15px
          color: #fff
        .left-bottom
          padding: 10px 0
          color:rgb(147,153,159)
          .pic
            width: 15px
            height: 15px
            display: inline-block
            vertical-align: top
          .comment_count
            font-size:10px
            text-align:center
            vertical-align: top
            padding: 0 500px 0 7px
            display: inline-block
          .mall
            display: inline-block
            vertical-align: top
            font-size: 12px
            padding-right: 5px
          .time
            display: inline-block
            vertical-align: top
            font-size: 10px
            padding-left: 3px
            border-left: 2px solid rgb(147,153,159)

 





</style>
