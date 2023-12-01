<!-- MarketPage.vue --> 

<template>
  <div class="market-container">
    <div class="market-item-buy-list">
      <!-- Market-item is the bread and butter of this component -->
      <div class="market-item" v-for="(item, index) in marketItems" :key="index">
        <a :href="'discord://discordapp.com/users/' + item.discordid" class="market-item-link">
          <div class="market-item-content">
            <h4 class="text-h4t">Contact vendor: {{ item.vendor }}</h4>
            <p class="text-p">Offering: {{ item.buy }}</p>
            <p class="text-p">In exchange for: {{ item.sell }}</p>
            <p class="text-p">Stock: {{ item.stock }}</p>
            <div class="market-vendor-buttons">
              <button class="addStock" v-if="isCurrentUser(item.vendor)" @click="addToStock(index)">Add to Stock</button>
              <button class="removeStock" v-if="isCurrentUser(item.vendor)" @click="removeFromStock(index)">Remove from Stock</button>
              <button class="deleteItem" v-if="isCurrentUser(item.vendor)" @click="deleteItem(index)">Delete</button>
            </div>
          </div>
        </a>
      </div>
      <!-- Market-item at end to add a new market item -->
      <div class="market-item" v-if="isLoggedIn">
        <input class="inputItem" v-model="newItem.buy" type="text" placeholder="Item to sell: e.g. 64 Firework Rockets" />
        <input class="inputItem" v-model="newItem.sell" type="text" placeholder="Item to buy: e.g. 32 Iron" />
        <input class="inputItem" v-model.number="newItem.stock" type="number" placeholder="Number of stock available: e.g 4" />
        <button class="addItem" @click="addNewMarketItem">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      marketItems: [],
      currentUser: null,
      discordid: null,
      isLoggedIn: false,
      newItem: 
      {
        buy: '',
        sell: '',
        stock: 1,
      },
    };
  },
  created() 
  {
    const savedUsername = localStorage.getItem('username');
    const savedDiscordId = localStorage.getItem('discordid');
    const savedLoggedIn = localStorage.getItem('loggedIn');

    if (savedUsername && savedLoggedIn === 'true') 
    {
      this.$store.dispatch('login', { username: savedUsername, discordid: savedDiscordId });
      this.currentUser = savedUsername;
      this.discordid = savedDiscordId;
      this.isLoggedIn = true;
    }

    this.fetchMarketItems();
  },
  methods: 
  {
    isCurrentUser(vendor) 
    {
      return this.currentUser === vendor;
    },
    // Methods which utilise the fullstack
    addToStock(index) 
    {
      event.preventDefault();
      const itemId = this.marketItems[index].id;

      axios
        .put(process.env.VUE_APP_SITE_URL + `/market/${itemId}/add-stock`)
        .then((response) => {
        // IMPDEV: Response.Status 204 not working, 200 will have to do for now
        if (response.status === 200) 
        {
          this.marketItems[index].stock = response.data.stock;
        } 
        else 
        {
          alert('Failed to add stock.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to add stock.');
      });
    },

    removeFromStock(index) 
    {
      event.preventDefault();

      const itemId = this.marketItems[index].id;

      axios
        .put(process.env.VUE_APP_SITE_URL + `/market/${itemId}/remove-stock`)
        .then((response) => {
        // IMPDEV: Response.Status 204 not working, 200 will have to do for now
        if (response.status === 200) 
        {
          // Update frontend value from backend
          this.marketItems[index].stock = response.data.stock;
        } 
        else 
        {
        alert('Failed to remove stock.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove stock.');
      });
    },
    deleteItem(index) 
    {
      event.preventDefault();
      const itemId = this.marketItems[index].id;

      axios
        .delete(process.env.VUE_APP_SITE_URL + `/market/${itemId}`)
        .then((response) => {
        if (response.status === 200) 
        {
          this.marketItems.splice(index, 1);
        } 
        else 
        {
        alert('Failed to delete the market item. Status: ' + response.status);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to delete the market item.');
      });
    },
    addNewMarketItem() {
      if (this.newItem.buy && this.newItem.sell && this.newItem.stock >= 1) {
      const newMarketItem = {
        vendor: this.currentUser,
        buy: this.newItem.buy,
        sell: this.newItem.sell,
        stock: this.newItem.stock,
        discordid: this.discordid,
      };

      axios
        .post(process.env.VUE_APP_SITE_URL + `/market`, newMarketItem)
        .then((response) => {
          if (response.status === 201) 
          {
            this.marketItems.push(response.data);
            this.newItem.buy = '';
            this.newItem.sell = '';
            this.newItem.stock = 1;
          } 
          else 
          {
            alert('Failed to create a new market item.');
          }
         })
        .catch((error) => {
          console.error(error);
        });
      } 
      else 
      {
        alert('Stock must be at least 1');
      }
    },
    fetchMarketItems() {
      axios
        .get(process.env.VUE_APP_SITE_URL + `/market`)
        .then((response) => {
          if (response.status === 200) 
          {
            this.marketItems = response.data;
          } 
          else 
          {
            alert('Failed to fetch market items.');
          }
        })
        .catch((error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 5px;
}
p {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: pre-line;
}
a {
  text-decoration: none;
  color: #000000;
}
.market-container {
  height: 74.5vh; 
  background-color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
}
.market-item-buy-list {
  background-color: #ffffff;
  overflow-y: scroll;
  width: 1000px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 235px;
  grid-gap: 0px;
}
.market-item {
  background-color: #ffffff;
  max-width: 500px;
  height: 224px;
  margin: 5px;
  border: 1px solid;
  cursor: pointer;
  justify-content: center;
}
.market-vendor-buttons {
  display: flex;
  width: 100%;
}
.market-vendor-buttons button {
  font-size: 16px;
}
.inputItem {
  width: 98.5%;
  height: 50px;
  margin-top: 4px;
  font-size: 16px;
}
.addItem {
  width: 100%;
  height: 60px;
  border: none;
  background-color: #ddffdd;
  font-size: 24px;
  font-weight: bold;
}
.addStock {
  width: 40%;
  height: 71px;
  border: none;
  cursor: pointer;
  background-color: #ffeedd;
}
.removeStock {
  width: 40%;
  border: none;
  cursor: pointer;
  background-color: #ddddff;
}
.deleteItem {
  width: 21%;
  border: none;
  cursor: pointer;
  background-color: #ffaaaa;
}
</style>