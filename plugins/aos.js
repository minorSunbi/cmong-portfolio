// plugins/aos.js
import "aos/dist/aos.css";
import AOS from 'aos'

const globalAOS = AOS.init({
   // note: your options here
  startEvent: 'load',
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  offset: 50, // offset (in px) from the original trigger point
  duration: 400, // values from 0 to 3000, with step 50ms
  once: false,
  mirror: true,
  anchorPlacement: 'top-bottom',
})

// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
    AOS.refresh()
})

export default ({ app }) => {
    app.AOS = globalAOS
}