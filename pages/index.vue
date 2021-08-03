<template>
  <div>
    <full-page-scroll v-show="isLoaded">
      <!-- 1 -->
      <full-page class="relative">
        <v-img
          height="100%"
          src="space1.jpg"
          class="d-flex justify-center align-center"
        >
          <!-- <transition appear enter-active-class="animated jello"> -->
          <div data-aos="fade-up" class="content">
            <div class="big-text font-weight-bold"> 
              환영합니다
            </div>
            <div class="welcome text-h1">
              ✋
            </div>
            <div class="text-h6 no-wrap">
              최신 기술인 vue를 이용하여 모던 정적 웹사이트만 제작해 드리고 있습니다.
              반응성 좋고 애니메이션이 있는 사이트를 만들어 드립니다
            </div>
          </div>
          <!-- </transition> -->
        </v-img>
      </full-page>

      <!-- 2 -->
      <full-page>
        <v-img
          height="100%"
          src="space2.jpg"
          class="d-flex justify-center align-center"
        >
          <div class="content">
            <div data-aos="fade-up" class="big-text font-weight-bold"> 
              저렴한 가격
            </div>
            <div data-aos="fade-up" data-aos-delay="100" class="text-h6 no-wrap">
              <span class="text-h4">☝️ </span>페이지 한 개당 <span class="lime text-h5 pa-2">3만원</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="text-h6 no-wrap grid-col">
              <span class="text-h4">✌️ </span>서버 비용  <span class="lime text-h5 pa-2">0원</span><br>
              <div class="py-2">(트래픽이 많이 발생하면 서버 업그레이드 비용이 필요합니다)</div>
            </div>
          </div>
        </v-img>
      </full-page>

      <!-- 3 -->
      <full-page>
        <v-img
          height="100%"
          src="space3.jpg"
          class="d-flex align-center"
        >
          <div class="content" data-aos="fade-up">
            <div class="big-text font-weight-bold"> 
              크몽으로 문의 주세요
            </div>
            <div class="text-h6 no-wrap">
              저녁 6시 아전에 연락 부탁드릴게요🤓
            </div>
            <v-row justify="center">
            <v-btn
              outlined
              color="blue"
              class="hover-effect"
              x-large
              to="/two"
            >
              ^@^
            </v-btn>
            </v-row>
          </div>
        </v-img>
      </full-page>

      
    </full-page-scroll>
  </div>
</template>

<script>
import FullPageScroll from '../components/FullPageScroll.vue'
import FullPage from '../components/FullPage.vue'

export default {
  components: {
    FullPageScroll,
    FullPage,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true
  },
}
</script>

<style lang="sass" scoped>
.welcome
  animation: welcome-in 1s linear 5
  animation-delay: 0.3s

@keyframes welcome-in
  0%
    transform: rotate(0deg)
  25%
    transform: rotate(-45deg)
  50%
    transform: rotate(0deg)
  75%
    transform: rotate(45deg)

.big-text
  font-size: 3rem

.content
  display: grid
  grid-row-gap: 4rem
  height: 100%
  text-align: center
  padding: 2rem
  // margin: auto

.relative
  position: relative

button
  width: max-content
  transition: all .5s
  &:hover
    background-color: $primary
    color: white !important
    &::after
      content: ' >'

div
  min-width: auto
</style>
