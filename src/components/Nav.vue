<template>
<div class="Nav container mx-auto my-8 grid grid-flow-col grid-cols-2 gap-4">
  <img :src="Logo" alt="Logo Default" class="w-16 mx-auto md:mx-0">
  <div class="hidden md:block">
    <div class="grid grid-flow-col grid-cols-7 gap-4 items-center h-full">
      <p v-for="option, optionIndex in menu" :key="optionIndex" @click="openLink(option.link)" class="cursor-pointer text-xs font-bold">{{option.title}}</p>
    </div>
  </div>
<!--  Update to Menu Icon-->
  <div class="block md:hidden fixed right-8 top-8 cursor-pointer" @click="openMenu">
    <img :src="Logo" alt="Display Menu" class="w-16">
  </div>
</div>
</template>

<script setup>
import Logo from '../assets/logo.png'

const menu = [{
  title : 'Brand',
  link : ''
},
  {
    title : '718',
    link : ''
  },
  {
    title : '911',
    link : ''
  },
  {
    title : 'Traycan',
    link : ''
  },
  {
    title : 'Macan',
    link : ''
  },
  {
    title : 'Panamera',
    link : ''
  },
  {
    title : 'Cayenne',
    link : ''
  },
]


const openLink = (link) => {
  window.open(link)
}

const openMenu = () => {
  console.log('open menu')
}
</script>

