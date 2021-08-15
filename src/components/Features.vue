<template>
  <div class="mt-4">
    <b-card>
      <b-row>
        <b-col v-for="item in featureItems" :key="item.id">
          <b-img :src="require(`@/assets/images/features/${item.img}`)" fluid :alt="item.alt" />
          <p class="text-style mt-2">{{ item.name }}</p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      featureItems: [
        {
          name: 'Freeze card',
          img: 'freeze.svg',
          alt: 'Freeze card'
        },
        {
          name: 'Set spend limit',
          img: 'spend.svg',
          alt: 'Set spend limit'
        },
        {
          name: 'Add to GPay',
          img: 'gpay.svg',
          alt: 'Add to GPay'
        },
        {
          name: 'Replace card',
          img: 'replace.svg',
          alt: 'Replace card'
        },
        {
          name: 'Cancel card',
          img: 'deactivate.svg',
          alt: 'Cancel card'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.card {
  border: none;
}
.card-body {
  background-color: #EDF3FF;
  border-radius: 1rem;
}
.text-style {
  font-size: 13px;
  color: $blue;
}
</style>
