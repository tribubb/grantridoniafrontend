//ProfileLogoutModal.vue
<template>
  <div class="modal" @click="closeProfileModal">
    <div class="modal-content" @click.stop>
      <button @click="closeProfileModal" class="modal-close-button">X</button>
      <div class="modal-login">
        <h4>Vendor Profile:</h4> 
        <h4>{{ $store.getters.getUsername }}</h4> 
        <div class="logout-end">
          <button @click="logoutAccount">Logout</button>
          <button @click="deleteAccountTrades">Delete Account</button> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const envURL = process.env.SITE_URL;

export default 
{
  data() 
  {
    return {
      username: '',
      password: '',
      currentRoutePath: null,
    };
  },
  methods: 
  {
    closeProfileModal() 
    {
      this.$emit("closeProfileModal");
    },
    logoutAccount() 
    {
      this.$store.dispatch('logout');
      this.$router.push('/main');
      this.$emit("closeProfileModal");
    },
    deleteAccountTrades() 
    {
      const username = this.$store.getters.getUsername;

      // Check if any market items exist for the user
      axios
        .get(`${envURL}/market?username=${username}`)
        .then((marketResponse) => {
          // No market items found, proceed to delete the user
          if (marketResponse.data.length === 0) 
          {
            this.deleteUser(username);
          } 
          else 
          {
            axios
              .delete(`${envURL}/market/delete-by-username/${username}`)
              .then(() => {
                this.deleteUser(username);
              })
              .catch((marketError) => {
                console.error(marketError);
                alert('Failed to delete associated market items.');
              }
            );
          }
        })
       .catch((marketError) => {
         console.error(marketError);
         alert('Failed to check for associated market items.');
        }
      );
    },

    deleteUser(username) 
    {
      axios
        .delete(`${envURL}/user/${username}`)
        .then((userResponse) => {
        if (userResponse.status === 204) 
        {
          this.$store.dispatch('logout');
          localStorage.removeItem('username');
          localStorage.removeItem('loggedIn');
          this.$router.push('/main');
          this.$emit('closeProfileModal');
        } 
        else 
        {
          alert('Failed to delete the user.');
        }
      })
      .catch((userError) => {
        console.error(userError);
        alert('Failed to delete the user.');
      });
    },
  },
  beforeMount() 
  {
    this.currentRoutePath = this.$route.path;
  },
};
</script>

<style scoped>
h4 {
  font-size: 40px;
  margin-top: 5px;
  margin-bottom: 15px;
}
p {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: pre-line;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  padding: 20px;
  max-width: 768px;
  width: 40vw;
  min-width: 500px;
  height: 90vh;
  border-radius: 5px;
  position: relative;
}

.modal-close-button {
  position: absolute;
  top: 10px;
  width: 30px;
  height: 30px;
  right: 10px;
  cursor: pointer;
}

.modal-image {
  max-width: 768px;
  width: 40vw;
  min-width: 500px;
  max-height: 414px;
  height: 20vw;
  min-height: 270px;
}

input {
  margin: 5px;
  height: 40px;
  width: 400px;
  font-size: 16px;
}

button {
  margin: 10px;
  height: 40px;
  width: 400px;
  font-size: 16px;
}

.logout-end {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>