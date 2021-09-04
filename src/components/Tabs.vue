<template>
  <div class="Tabs">
    <header class="flex flex-row items-center justify-center">
      <div v-for="obj, objIndex in tabs" :key="objIndex" class="Tabs-Header-Item px-6 py-4 mx-3 cursor-pointer" :class="objIndex === activeTab ? 'text-customBlue border-b-4 border-customBlue' : 'border-b'" @click="updateActiveTab(objIndex)">
        {{ obj.title }}
      </div>
    </header>
    <div class="container mx-auto bg-cover lg:bg-contain bg-center bg-no-repeat flex items-center justify-center" :style="`background-image:url(${getActiveTabContent.imgSrc}); min-height: 600px;`">
      <div class="mb-16 text-white">
        <h2 class="text-4xl uppercase text-center font-bold mb-4">{{ getActiveTabContent.title }}</h2>
        <div class="bg-white h-2 w-16 mx-auto mb-16" />
        <p class="text-center mx-8 lg:mx-24">{{ getActiveTabContent.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs, computed} from "vue";
import Logo from '../assets/logo.png'

export default {
  setup () {
    const data = reactive({
      activeTab: 0,
      getActiveTabContent : computed(() => {
        return data.tabs[data.activeTab]
      }),
      tabs : [{
        imgSrc : Logo,
        title: 'Design',
        description: 'From the outside, it is a mere formality to quickly identify a Porsche as such.' +
            ' And in the interior, you can also sense distinctive Porsche genes in the new Taycan. ' +
            'The basic features of the interior architecture are sporty, ' +
            'minimalist and clear; the wing extending from the centre console catches your eye and appears to be floating.' +
            ' The innovative cockpit displays are clearly driver-oriented,' +
            ' allowing you to keep an eye on the most important information, even during dynamic driving.',
      },
        {
          imgSrc : Logo,
          title: 'Performance',
          description: 'From the outside, it is a mere formality to quickly identify a Porsche as such.' +
              ' And in the interior, you can also sense distinctive Porsche genes in the new Taycan. ' +
              'The basic features of the interior architecture are sporty, ' +
              'minimalist and clear; the wing extending from the centre console catches your eye and appears to be floating.' +
              ' The innovative cockpit displays are clearly driver-oriented,' +
              ' allowing you to keep an eye on the most important information, even during dynamic driving.',
        },
        {
          imgSrc : Logo,
          title: 'Charging',
          description: 'From the outside, it is a mere formality to quickly identify a Porsche as such.' +
              ' And in the interior, you can also sense distinctive Porsche genes in the new Taycan. ' +
              'The basic features of the interior architecture are sporty, ' +
              'minimalist and clear; the wing extending from the centre console catches your eye and appears to be floating.' +
              ' The innovative cockpit displays are clearly driver-oriented,' +
              ' allowing you to keep an eye on the most important information, even during dynamic driving.',
        },
        {
          imgSrc : Logo,
          title: 'Design',
          description: 'From the outside, it is a mere formality to quickly identify a Porsche as such.' +
              ' And in the interior, you can also sense distinctive Porsche genes in the new Taycan. ' +
              'The basic features of the interior architecture are sporty, ' +
              'minimalist and clear; the wing extending from the centre console catches your eye and appears to be floating.' +
              ' The innovative cockpit displays are clearly driver-oriented,' +
              ' allowing you to keep an eye on the most important information, even during dynamic driving.',
        }]
    })

    const updateActiveTab = (objIndex) => {
      data.activeTab = objIndex
    }
    return {
      updateActiveTab,
      ...toRefs(data)
    }
  }
}
</script>
