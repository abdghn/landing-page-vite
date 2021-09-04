<template>
  <div >
    <Nav />
    <main-header />
    <Presentation v-for="obj, objIndex in presentations" :key="objIndex" :content="obj" class="mb-16"/>
    <Stats />
    <Tabs />
    <Footer />
  </div>
</template>

<script>
import {MainHeader, Nav, Presentation, Stats,Tabs,Footer} from '../components'
import {reactive, toRefs} from "vue"
import Logo from '../assets/logo.png';
export default {
  components :{
    Tabs,
    Stats,
    MainHeader, Nav, Presentation,
    Footer
  },
  setup () {
    let data = reactive({
      presentations : [{
        left : false,
        columns : [{
          backgroundColor : 'customBlue',
          title: 'Future is now',
          subtitle : 'Taycan concept',
          description : 'The soul has many aspects. It is variable and constantly changing. ' +
              'When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. ' +
              'Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground, even away from everyday life',

        }, {
          imgSrc: Logo
        }
        ]
      },
        {
          left : true,
          columns : [{
            backgroundColor : 'white',
            title: 'Future is now',
            subtitle : 'Taycan concept',
            description : 'The soul has many aspects. It is variable and constantly changing. ' +
                'When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. ' +
                'Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground, even away from everyday life',

          }, {
            imgSrc: Logo,
            contain : true
          }
          ]
        }]
    })

    return {
      ...toRefs(data)
    }
  }
}

</script>

