<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 btn-style">
      <b-card-header header-tag="header" class="p-1 btn-style" role="tab">
        <b-button block v-b-toggle.accordion-1 class="btn-style text-style text-left">
          <b-img class="mr-2" :src="require('@/assets/images/accordion/details.svg')" />Card Details
          <span><b-icon-arrow-down-circle-fill class="justify-space-between" /></span></b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 btn-style">
      <b-card-header header-tag="header" class="p-1 btn-style" role="tab">
        <b-button block v-b-toggle.accordion-2 class="btn-style text-style text-left">
          <b-img class="mr-2" :src="require('@/assets/images/accordion/transactions.svg')" />Recent Transactions
          <span><b-icon-arrow-down-circle-fill class="justify-space-between" /></span>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-row>
            <b-col :lg="6">
              <div class="file">
                <b-img class="img-file" :src="require('@/assets/images/accordion/file.svg')" />
              </div>
              <span>Hamleys</span>
            </b-col>
            <b-col :lg="6">
              <div class="green bold-text">+ S$ 150<b-icon-chevron-right /></div>
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-body>
          <b-row>
            <b-col :lg="6">
              <b-img :src="require('@/assets/images/accordion/file.svg')" />
              <span>Hamleys</span>
            </b-col>
            <b-col :lg="6">
              <div>+ S$ 150</div>
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-body>
          <b-row>
            <b-col :lg="6">
              <b-img :src="require('@/assets/images/accordion/file.svg')" />
              <span>Hamleys</span>
            </b-col>
            <b-col :lg="6">
              <div>+ S$ 150</div>
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-body>
          <b-row>
            <b-col :lg="6">
              <b-img :src="require('@/assets/images/accordion/file.svg')" />
              <span>Hamleys</span>
            </b-col>
            <b-col :lg="6">
              <div>+ S$ 150</div>
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-body class="p-0">
          <b-card-text class="text-center small-font green last-card p-3">
            View all card transactions
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { BIconArrowDownCircleFill, BIconChevronRight } from 'bootstrap-vue'
  export default {
    components: {
      BIconArrowDownCircleFill,
      BIconChevronRight
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.btn-style {
  background-color: #F5F9FF;
  border: none;
}
.text-style {
  font-size: 13px;
  color: $blue;
}
.card-body {
  background-color: white;
  border: 1px solid #F0F0F0;
}
.green {
  color: $green;
}
.small-font {
  font-size: 13px;
}
.last-card {
  background-color: #EDFFF5;
}
.file {
  background-color: #009DFF1A;
  opacity: 100%;
  border-radius: 1rem;
}
.bold-text {
  font-family: bold;
}
</style>

