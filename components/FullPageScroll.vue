<template>
  <div class="">
    <!-- .fullpage section tags -->
    <!-- <section class="fullpage"></section> -->
    <slot></slot>

    <!-- page buttons -->
    <div class="sections-menu">
      <span
        v-for="(offset, index) in offsets"
        :key="index"
        class="menu-point"
        :class="{active: activeSection == index}"
        @click="scrollToSection(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },
  mounted() {
    this.calculateSectionOffsets();
    document.getElementsByTagName('main')[0].addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    document.getElementsByTagName('main')[0].addEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // Other browsers

    document.getElementsByTagName('main')[0].addEventListener('touchstart', this.touchStart, {
        passive: false
    }); // mobile devices
    document.getElementsByTagName('main')[0].addEventListener('touchmove', this.touchMove, {
        passive: false
    }); // mobile devices
  },
  beforeDestroy() {
    document.getElementsByTagName('main')[0].removeEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // Other browsers
    document.getElementsByTagName('main')[0].removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox

    document.getElementsByTagName('main')[0].removeEventListener('touchstart', this.touchStart); // mobile devices
    document.getElementsByTagName('main')[0].removeEventListener('touchmove', this.touchMove); // mobile devices
  },
  methods: {
    calculateSectionOffsets() {
      const sections = document.getElementsByTagName('section');
      const length = sections.length;

      for (let i = 0; i < length; i++) {
        const sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document.getElementsByTagName('section')[id].scrollIntoView({
          behavior: 'smooth'
      });

      setTimeout(() => {
          this.inMove = false;
      }, 400);
    },
    handleMouseWheel(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
          this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
          this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    moveDown() {
      if (this.activeSection === 0) {
        return;
      }
      this.inMove = true;
      this.activeSection--;
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      if (this.activeSection === this.offsets.length - 1) {
        return;
      }
      this.inMove = true;
      this.activeSection++;
      this.scrollToSection(this.activeSection, true);
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
          this.moveDown();
      } else {
          this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    }
  },
 
}
</script>

<style lang="scss" scoped>
// .fullpage {
//   height: 100vh;
//   width: 100%;
// }

.sections-menu {
  position: fixed;
  z-index: 10;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  .menu-point {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #FFF;
    display: block;
    margin: 1rem 0;
    opacity: .6;
    transition: .4s ease all;
  }

  .menu-point.active {
    opacity: 1;
    transform: scale(1.5);
  }
}
</style>>
