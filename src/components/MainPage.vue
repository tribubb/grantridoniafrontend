<!-- MainPage.vue -->

<template>
  <div class="census">
    <h1 class="text-h1t mt-5">Census</h1>
    <h4 class="text-h4t mt-2">The census information for Gran Tridonia contains that of the city suburbs (Updated 30/11/23).</h4>
    <h2 class="text-h2t mt-2">City of Gran Tridonia</h2>
    <h4 class="text-h4t mt-2">The city supports a total capacity of 122 residents, contained within the following suburbs:</h4>
    <p class="text-p mt-2">Knossos: Estimated limit of 54</p>
    <p class="text-p">Gerani: Estimated limit of 68</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default 
{
  data() {
    return {
      reach: [],
      currentOption: null,
    };
  },
  created() {
    const savedUsername = localStorage.getItem('username');
    const savedDiscordId = localStorage.getItem('discordid');
    const savedLoggedIn = localStorage.getItem('loggedIn');

    if (savedUsername && savedLoggedIn === 'true') 
    {
      this.$store.dispatch('login', { username: savedUsername, discordid: savedDiscordId });
    }
  },
  methods: {
    ...mapActions(['updateSlideshowHeight']),
    changeHeight() {
      if (this.$route.path !== '/' && this.$route.path !== '/main') {
        this.updateSlideshowHeight('200px');
      } else {
        this.updateSlideshowHeight('400px');
      }
    },
  },
  watch: {
    '$route': 'changeHeight',
  },
};
</script>