<template>
  <div class="Stats bg-cover bg-no-repeat bg-bottom relative py-8 lg:pt-32" :style="`background-image:url(${Logo}); min-height: 300px; margin-bottom: 300px; background-position: center bottom -6rem;`">
    <div class="w-full h-full bg-customBlue lg:opacity-75 absolute top-0 left-0 z-0" />
    <div class="Stats-Components flex flex-col lg:flex-row items-center justify-between w-full z-50 relative lg:absolute p-8">
<!--      <p class="text-blue-500">{{ cards }}</p>-->
      <stats-card v-for="obj, objIndex in cards" :key="objIndex" :content="obj"/>
    </div>
  </div>
</template>

<script>
import Logo from '../assets/logo.png'
import {reactive, toRefs} from "vue";
import StatsCard from "../components/elements/stats/StatsCard.vue";
export default {
  components: {StatsCard},
    setup () {
      let data  = reactive({
        Logo,
        cards : [{
          imgSrc :Logo,
          title : "Range",
          description : "301 miles<br>(5.4 - 20.4 kWh/ 100 miles)"
        },
          {
            imgSrc :Logo,
            title : "Spped",
            description : "5.4s<br>0 - 100km"
          },
          {
            imgSrc :Logo,
            title : "size",
            description : "L: 4,963 mm<br> W: 1,966 mm<br>H: 1,395 mm"
          },
          {
            imgSrc :Logo,
            title : "Weight",
            description : "2,050 kg"
          }]
      })

      return {
        ...toRefs(data)
      }
    }
}
</script>
