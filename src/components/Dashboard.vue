<template>
  <div>
    <Header />
    <div class="container p-5">
      <h6>Trusted way of banking for 3,000+ SMEs and startups in Singapore</h6>
      <div class="mt-5">
        <b-row align-v="center">
          <b-col>
            <div>
              <p class="small-font">Available balance</p>
              <b-badge class="green small-font px-3 py-1 mr-3">S$</b-badge>
              <span class="balance">3,000</span>
            </div>
          </b-col>
          <b-col>
            <b-btn class="blue"><b-icon-plus-circle-fill class="mr-2" />New Card</b-btn>
          </b-col>
        </b-row>
      </div>
      <div class="mt-4">
        <b-row>
          <b-col :lg="2">
            <a class="small-font underline">My debit cards</a>
          </b-col>
          <b-col :lg="2">
            <a class="small-font disabled">All company cards</a>
          </b-col>
        </b-row>
      </div>
      <div class="mt-3">
        <b-card>
          <b-row>
            <b-col :lg="6">
              <b-row>
                <b-col>
                  <div class="text-right small-font mb-2 eye-icon"><b-icon-eye-fill class="mr-2" />Show card number</div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <CardCarousel />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <Features />
                </b-col>
              </b-row>
            </b-col>
            <b-col :lg="6">
              <Accordions />
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Features from '@/components/Features'
import CardCarousel from '@/components/CardCarousel'
import Accordions from '@/components/Accordions'
import { BIconPlusCircleFill, BIconEyeFill } from 'bootstrap-vue'

export default {
  components: {
    Header,
    Features,
    CardCarousel,
    Accordions,
    BIconPlusCircleFill,
    BIconEyeFill
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.small-font {
  font-size: 14px;
}
.blue {
  background-color: $blue;
}
.green {
  background-color: $green;
}
.eye-icon {
  color: $green;
}
.balance {
  font-size: 26px;
  font-weight: bold;
}
.underline::after {
  content: "";
  width: 54%;
  height: 3px;
  background: #23d2d2;
  position: absolute;
  left: 15px;
  top: 25px;
}
a {
  color: black;
}
.disabled {
  color: black;
  opacity: 30%;
}
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);
  border: none;
}
</style>