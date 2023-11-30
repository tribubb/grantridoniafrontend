<!-- LoginRegisterModal.vue -->

<template>
  <div class="modal" @click="closeLoginModal">
    <div class="modal-content" @click.stop>
      <button @click="closeLoginModal" class="modal-close-button">X</button>
      <form v-if="loginMode" class="modal-login" @submit.prevent="login">
        <h1 class="text-h1t">Vendor Login</h1>
        <p class="text-p">Username</p>
        <input class="text-p border border-trida" v-model="username" type="text" autocomplete="username"/>
        <p class="text-p">Password</p>
        <input class="text-p border border-trida" v-model="password" type="password" autocomplete="current-password"/><br /><br />
        <div class="login-end">
          <button class="text-p border border-trida" type="submit">Login</button>
          <button class="text-p border border-trida" @click="registerModeSwitch">No Account? Register here</button>
        </div>
      </form>
      <form v-if="registerMode" @submit.prevent="register">
        <h1 class="text-h1t">Register as Vendor</h1>
        <p class="text-p">Username</p>
        <input class="text-p border border-trida" v-model="username" type="text" autocomplete="off"/>
        <p class="text-p">Password</p>
        <input class="text-p border border-trida" v-model="password" type="password" autocomplete="off"/><br />
        <p class="text-p">Confirm Password</p>
        <input class="text-p border border-trida" v-model="confirmPassword" type="password" autocomplete="off"/><br />
        <a :href="'https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'" target="_blank"
          ><p class="text-p text-blue-500">Discord ID</p></a>
        <input class="text-p border border-trida" v-model="discordid" type="text" autocomplete="off"/><br /><br />
        <div class="register-end">
          <button class="text-p border border-trida" type="submit">Register</button>
          <button class="text-p border border-trida" @click="loginModeSwitch">Have an account? Login here</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      discordid: '',
      currentRoutePath: null,
      loginMode: true,
      registerMode: false,
    };
  },
  methods: 
  {
    async login() 
    {
      if (!this.username) 
      {
        alert('Username cannot be blank');
        return;
      }

      try 
      {
        const response = await axios.post(process.env.VUE_APP_SITE_URL + '/user/login', {
          username: this.username,
          password: this.password,
        });
        // If the information matches both the username or password of any ID, changed from HTTP status code
        if (response.data.user) 
        {
          const enteredUsername = this.username;
          const enteredDiscordId = this.discordid;
          this.$store.dispatch('login', { username: enteredUsername, discordid: enteredDiscordId });
          localStorage.setItem('username', enteredUsername);
          localStorage.setItem('discordid', enteredDiscordId);
          localStorage.setItem('loggedIn', 'true');
          this.$router.push('/main');
          this.$emit("closeLoginModal");
        } 
        else 
        {
          alert('Invalid username or password');
        } 
      } 
      catch (error) 
      {
        alert('An error occurred while logging in');
      }
    },
    loginModeSwitch() 
    {
      this.loginMode = true;
      this.registerMode = false;
    },
    async register() 
    {
      if (!this.username) {
        alert('Username cannot be blank');
        return;
      }
      if (this.password !== this.confirmPassword) 
      {
        alert("Passwords do not match");
        return;
      }
      const discordIdPattern = /^\d{16,20}$/;
      if (!discordIdPattern.test(this.discordid)) {
        alert("Invalid Discord ID format. Please check the format and try again.");
        return;
      }
      try 
      {
        await axios.post(process.env.VUE_APP_SITE_URL + '/user/register', {
          username: this.username,
          password: this.password,
          discordid: this.discordid,
        });

        const enteredUsername = this.username;
        const enteredDiscordId = this.discordid;
        this.$store.dispatch('login', { username: enteredUsername, discordid: enteredDiscordId });
        localStorage.setItem('username', enteredUsername);
        localStorage.setItem('discordid', enteredDiscordId);
        localStorage.setItem('loggedIn', 'true');
        this.$router.push('/main');
        this.$emit("closeLoginModal");
      }
      catch (error) 
      {
        if (error.response && error.response.data.message) 
        {
          alert(error.response.data.message);
        } 
        else 
        {
          console.error(error);
        }
      }
    },
    registerModeSwitch() 
    {
      this.loginMode = false;
      this.registerMode = true;
      console.log(process.env.VUE_APP_SITE_URL);
    },
    closeLoginModal() 
    {
      this.$emit("closeLoginModal");
    },
  },
  beforeMount() 
  {
    this.currentRoutePath = this.$route.path;
  },
};
</script>

<style scoped>
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

input {
  margin: 5px;
  height: 30px;
  width: 300px;
}

button {
  margin: 10px;
  height: 40px;
  width: 400px;
}

.login-end {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-end {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>