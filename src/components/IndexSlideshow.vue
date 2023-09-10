<template>
  <div class="slideshow-container relative overflow-hidden" :style="{ height: slideshowHeight }">
    <transition :name="transitionName"> 
      <img :key="currentImage" :src="currentImageSrc" class="slideshow-image" alt="" />
    </transition>

    <button class="previous" @click="previousImage">
      ←
    </button>

    <button class="next" @click="nextImage">
      →
    </button>
  </div>
</template>

<script>
export default 
{
  data() 
  {
    return {
      images: [require('@/assets/Slideshow1.png'), require('@/assets/Slideshow2.png'), require('@/assets/Slideshow3.png'), require('@/assets/Slideshow4.png')],
      direction: 'forward',
      currentImage: 0,
      timer: null,
      };
  },
  computed: 
  {
    currentImageSrc() 
    {
      return this.images[this.currentImage];
    },
    transitionName() 
    {
      return this.direction === 'forward' ? 'slide-forward' : 'slide-backward';
    },
    slideshowHeight() 
    {
      return this.$store.state.slideshowHeight;
    },
  },
  mounted() 
  {
    this.startTimer();
  },
  methods: 
  {
    nextImage() 
   {
      this.direction = 'forward';
      this.currentImage = (this.currentImage + 1) % this.images.length;
      this.resetTimer();
    },
    previousImage() 
    {
      this.direction = 'backward';
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
      this.resetTimer();
    },
    startTimer() 
    {
      this.timer = setInterval(this.nextImage, 15000);
    },
    resetTimer() 
    {
      clearInterval(this.timer);
      this.startTimer();
    },
  },
  beforeUnmount() 
  {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}
.slideshow-container {
  width: 100%;
  position: relative;
  height: 600px;
}

.slideshow-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
button.previous {
  @apply absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-white bg-opacity-50 absolute left-0 -translate-x-0;
  z-index: 2;
}
button.next {
  @apply absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-white bg-opacity-50 absolute right-0 translate-x-0;
  z-index: 2;
}
.slide-forward-enter-active, .slide-forward-leave-active {
  transition: transform 1s;
}
.slide-forward-enter-from {
  transform: translateX(100%);
}
.slide-forward-leave-to {
  transform: translateX(-100%);
}
.slide-forward-enter-to, .slide-forward-leave-from {
  transform: translateX(0);
}
.slide-backward-enter-active, .slide-backward-leave-active {
  transition: transform 1s;
}
.slide-backward-enter-from {
  transform: translateX(-100%);
}
.slide-backward-leave-to {
  transform: translateX(100%);
}
.slide-backward-enter-to, .slide-backward-leave-from {
  transform: translateX(0);
}
</style>