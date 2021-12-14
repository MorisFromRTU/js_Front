<template>
  <div class="cards">
        <InfoCard/>
    <FormCard/>

  </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
import InfoCard from '@/components/InfoCard.vue'

export default ({
  name: 'InfoPage',
  components: {
    FormCard, 
    InfoCard
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
