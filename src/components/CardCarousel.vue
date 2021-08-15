<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      indicators
      img-width="600"
      img-height="400"
    >
      <b-carousel-slide
        :img-src="require('../assets/images/card/card.png')"
      ></b-carousel-slide>
			<b-carousel-slide
        :img-src="require('../assets/images/card/card.png')"
      ></b-carousel-slide>
			<b-carousel-slide
        :img-src="require('../assets/images/card/card.png')"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>