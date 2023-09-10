<template>
  <div class="toolbar">
    <div
      v-for="(option, index) in options"
      :key="index"
      @click="navigateToPage(option.route)"
      :class="{
        'toolbar-option': true,
        'active': currentOption === option,
      }"
      :style="{ backgroundColor: option.color }"
    >
      {{ option.label }}
    </div>
    <button class="toolbar-option" :style="{ backgroundColor: 'purple' }" @click="openLoginModal">{{ $store.getters.isLoggedIn ? 'Profile (' + $store.getters.getUsername + ')' : 'Vendor Login/Register' }}</button>
    <LoginRegisterModal v-if="showLoginModal" @closeLoginModal="closeLoginModal" />
    <ProfileLogoutModal v-if="showProfileModal" @closeProfileModal="closeProfileModal" />
  </div>
</template>

<script>
  import LoginRegisterModal from "@/components/LoginRegisterModal.vue";
  import ProfileLogoutModal from "@/components/ProfileLogoutModal.vue";
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      LoginRegisterModal,
      ProfileLogoutModal,
    },
    data() {
      return {
        options: [
          { label: 'Main', color: 'blue', route: '/'},
          { label: 'Property', color: 'green', route: '/property'},
          { label: 'Market', color: 'red', route: '/market'},
        ],
        currentOption: null,
        showLoginModal: false, 
        showProfileModal: false,
      };
    },
  computed: 
  {
    ...mapGetters(['slideshowHeight']), // Map the slideshowHeight from Vuex store
  },
  methods: 
  {
    navigateToPage(route) 
    {
      this.$router.push(route);
    },
    openLoginModal() 
    {
      if (this.$store.getters.isLoggedIn) 
      {
        this.showProfileModal = true;
        // this.$store.dispatch('logout');
        // this.$router.push('/main');
      } 
      else 
      {
        this.showLoginModal = true;
      }
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    closeProfileModal() {
      this.showProfileModal = false;
    },
    ...mapActions(['updateSlideshowHeight']),
    changeHeight() {
      if (this.$route.path !== '/' && this.$route.path !== '/main') 
      {
        this.updateSlideshowHeight('200px');
      } 
      else 
      {
        this.updateSlideshowHeight('400px');
      }
    },
  },
  watch: 
  {
    '$route': 'changeHeight',
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 0px;
  font-size: 16px;
}
label {
  
}
.toolbar {
  display: flex;
  width: 100%;
}

.toolbar-option {
  flex: 1;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #ffffff;
  font-weight: bold;
}

.toolbar-option.active {
  background-color: #ffffff;
}
</style>