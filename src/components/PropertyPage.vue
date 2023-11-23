// PropertyPage.vue

<template>
  <div class="property-divs">
    <div class="property-list">
      <!-- IMPDEV: Due to time restaints, the property section is manual, theoretical next step is to get this into the database -->
      <div class="property-object" @click="openModal('Sale Residential', 'Gerani, Gran Tridonia', '2', '2', 'Asking Price: 606 Iron', 'Gran Tridonian Holdings', 'Discord: tribubb', 'discord://discordapp.com/users/177440814102740994', '828', '-208',
      'Featuring its own cul-de-sac garage, 2 bathrooms and 2 bedrooms including a spacious master bedroom with an ensuite and riverfront vista nestled away from the main road, this is a great starter house to get on the Gran Tridonian property ladder. \n\n Message Tribubb today to learn more about this home today.', require('@/assets/Testhouse1.png'))"
        data-title="Sale Residential"
        data-location="Gerani, Gran Tridonia"
        data-bedrooms="2"
        data-bathrooms="2"
        data-worldx="828"
        data-worldy="-208">
        <img class="property-thumbnail" src="@/assets/Testhouse1.png" />
        <div class="property-teaser">
          <h4>Sale Residential</h4>
          <p>Gerani, Gran Tridonia</p>
          <p>Asking Price: 606 Iron</p><br/><br/><br/><br/><br/>
          <p>Gran Tridonian Holdings</p>
        </div>
      </div>
      <div class="property-object" @click="openModal('Rental Residential', 'Knossos, Gran Tridonia', '5', '2', '20 Iron per day', 'Gran Tridonian Holdings', 'Discord: tribubb', 'discord://discordapp.com/users/177440814102740994', '892', '-329',
      'A prominent 5 bedroom house nestled near the Knossos-Gerani roundabout, this property boasts hill and river views to the west, savanna and estuary views to the north. Invite your friends to stay, sublet or keep this all to yourself. \n\n Message Tribubb to learn more about this neat property available for rent today.', require('@/assets/Testhouse2.png'))"
        data-title="Rental Residential"
        data-location="Knossos, Gran Tridonia"
        data-bedrooms="5"
        data-bathrooms="2"
        data-worldx="892"
        data-worldy="-329">
        <img class="property-thumbnail" src="@/assets/Testhouse2.png" />
        <div class="property-teaser">
          <h4>Rental Residential</h4>
          <p>Knossos, Gran Tridonia</p>
          <p>20 Iron per day</p><br/><br/><br/><br/><br/>
          <p>Gran Tridonian Holdings</p>
        </div>
      </div>
      <div class="property-object" @click="openModal('Sale Section', 'Dimini, Gran Tridonia', '0', '0', 'Asking Price: 700 Iron', 'Gran Tridonian Holdings', 'Discord: tribubb', 'discord://discordapp.com/users/177440814102740994', '1145', '-311', 
      'An open canvas featuring flat land, and a great opportunity to expand onto the flat part of the riverbank. Featuring great views of the Palace and direct river access: reclaim land from the water, build a boatshed, a fishing dock or expand your house onto the water directly. \n\n Message Tribubb today to learn more about this property today.', require('@/assets/Testhouse3.png'))"
        data-title="Sale Section"
        data-location="Dimini, Gran Tridonia"
        data-bedrooms="0"
        data-bathrooms="0"
        data-worldx="1145"
        data-worldy="-311">
        <img class="property-thumbnail" src="@/assets/Testhouse3.png" />
        <div class="property-teaser">
          <h4>Sale Section</h4>
          <p>Dimini, Gran Tridonia</p>
          <p>Asking Price: 700 Iron</p><br/><br/><br/><br/><br/>
          <p>Gran Tridonian  Holdings</p>
        </div>
      </div>
      <div class="property-object" @click="openModal('Sale Section', 'Dimini, Gran Tridonia', '0', '0', 'Asking Price: 1100 Iron', 'Gran Tridonian Holdings', 'Discord: tribubb', 'discord://discordapp.com/users/177440814102740994', '1144', '-361', 
      'Property developers look no further: A large, multi-level section of land ripe for construction. Views of the palace and a great vista over the estuary and Knossos, from Dimini Island. Build a mansion on this land, or multiple houses, there are no limits on subletting. \n\n Message Tribubb today to learn more about this exclusive property.', require('@/assets/Testhouse4.png'))"
        data-title="Sale Section"
        data-location="Dimini, Gran Tridonia"
        data-bedrooms="0"
        data-bathrooms="0"
        data-agent-id="discord://discordapp.com/users/177440814102740994"
        data-worldx="1144"
        data-worldy="-361">
        <img class="property-thumbnail" src="@/assets/Testhouse4.png" />
        <div class="property-teaser">
          <h4>Sale Section</h4>
          <p>Dimini, Gran Tridonia</p>
          <p>Asking Price: 1100 Iron</p><br/><br/><br/><br/><br/>
          <p>Gran Tridonian  Holdings</p>
        </div>
      </div>
      <div class="property-object" @click="openModal('Rental Residential', 'Knossos, Gran Tridonia', '1', '1', '8 Iron per day', 'Gran Tridonian Holdings', 'Discord: tribubb', 'discord://discordapp.com/users/177440814102740994', '984', '-317', 
      'A brand new apartment is available, here in the centre of Knossos. With a great estuary view and a spacious garage, you could not find a better first rental property. \n\n Message Tribubb on discord today to learn more about your next rental.', require('@/assets/Testhouse5.png'))"
        data-title="Rental Residential"
        data-location="Knossos, Gran Tridonia"
        data-bedrooms="1"
        data-bathrooms="1"
        data-worldx="984"
        data-worldy="-317">
        <img class="property-thumbnail" src="@/assets/Testhouse5.png" />
        <div class="property-teaser">
          <h4>Rental Residential</h4>
          <p>Knossos, Gran Tridonia</p>
          <p>8 Iron per day</p><br/><br/><br/><br/><br/>
          <p>Gran Tridonian  Holdings</p>
        </div>
      </div>
    </div>
        <PropertyObjectModal
        v-if="modalVisible"
        :modalData="modalData"
        @closeModal="closeModal"
      />
    <div class="property-map" @wheel="zoomImage">
      <div class="property-image-container">
        <img
          class="property-image"
          ref="image"
          :src="imageUrl"
          :style="imageStyle"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
        />
        <div
          class="pin"
          v-for="(pin, index) in pins"
          :key="index"
          :style="{ left: pin.x + 'px', top: pin.y + 'px' }"
          @click="clickPin(pin)"
        >
        <div class="pin-marker"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyObjectModal from "@/components/PropertyObjectModal.vue";

export default {
  components: {
      PropertyObjectModal,
    },
  data() {
    return {
      imageUrl: require('@/assets/GranTridoniaMap.png'),
      mouseX: 0,
      mouseY: 0,
      imageX: 0,
      imageY: 0,
      isDragging: false,
      scale: 1,
      modalVisible: false,
      modalData: null,
      pins: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.initializePins();
    }, 1250);
  },
  computed: {
    imageStyle() 
    {
      return {
        transform: `scale(${this.scale}) translate(${this.imageX}px, ${this.imageY}px)`,
      };
    },
    propertyData() 
    {
      const propertyObjects = document.querySelectorAll('.property-object');
      const data = [];

      propertyObjects.forEach((element) => {
        const title = element.getAttribute('data-title');
        const location = element.getAttribute('data-location');
        const bedrooms = element.getAttribute('data-bedrooms');
        const bathrooms = element.getAttribute('data-bathrooms');
        const worldx = element.getAttribute('data-worldx');
        const worldy = element.getAttribute('data-worldy');

        data.push({
          title,
          location,
          bedrooms,
          bathrooms,
          worldx,
          worldy,
        });
      });

      return data;
    }
  },
  created() 
  {
    const savedUsername = localStorage.getItem('username');
    const savedDiscordId = localStorage.getItem('discordid');
    const savedLoggedIn = localStorage.getItem('loggedIn');

    if (savedUsername && savedLoggedIn === 'true') {
      this.$store.dispatch('login', { username: savedUsername, discordid: savedDiscordId });
    }
  },
  methods: 
  {
    initializePins() {
      this.propertyData.forEach((property) => {
        this.addPin(
          property.worldx,
          property.worldy,
          property.title,
          property.location,
          property.bedrooms,
          property.bathrooms,
          property.price,
          property.company,
          property.agent,
          property.agentID,
          property.detail,
          property.imageSrc
        );
      });
    },
    onMouseDown(event) 
    {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.isDragging = true;
      this.$refs.image.style.cursor = 'grabbing';
      event.preventDefault();
    },
    onMouseMove(event) 
    {
      if (this.isDragging) 
      {
        const deltaX = event.clientX - this.mouseX;
        const deltaY = event.clientY - this.mouseY;

        const container = this.$refs.image.parentElement;
        const maxTranslateX = (this.scale - 1) * container.offsetWidth / (2 * this.scale);
        const maxTranslateY = (this.scale - 1) * container.offsetHeight / (2 * this.scale);

        const newImageX = Math.min(Math.max(this.imageX + deltaX / this.scale, -maxTranslateX), maxTranslateX);
        const newImageY = Math.min(Math.max(this.imageY + deltaY / this.scale, -maxTranslateY), maxTranslateY);
        const dragDeltaX = newImageX - this.imageX;
        const dragDeltaY = newImageY - this.imageY;

        // Update the pin positions correctly based on drag movement, keeping scale in mind
        for (let i = 0; i < this.pins.length; i++) 
        {
          const pin = this.pins[i];
          pin.x += dragDeltaX * this.scale;
          pin.y += dragDeltaY * this.scale;
        }

        this.imageX = newImageX;
        this.imageY = newImageY;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
    onMouseUp() 
    {
      this.isDragging = false;
      this.$refs.image.style.cursor = 'grab';
      event.preventDefault();
    },
    zoomImage(event) 
    {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -0.25 : 0.25;
      const newScale = this.scale + delta;

      // Capture the translateX and translateY values early before they can be recalculated
      const translateX = this.imageX;
      const translateY = this.imageY;

      const minScale = 1;
      const maxScale = 4.0;

      const clampedScale = Math.min(Math.max(newScale, minScale), maxScale);

      const container = this.$refs.image.parentElement;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      const maxTranslateX = (clampedScale - 1) * containerWidth / (2 * clampedScale);
      const maxTranslateY = (clampedScale - 1) * containerHeight / (2 * clampedScale);
      const scaleDifference = clampedScale / this.scale;

      this.scale = clampedScale;
      this.imageX = Math.min(Math.max(this.imageX * scaleDifference, -maxTranslateX), maxTranslateX);
      this.imageY = Math.min(Math.max(this.imageY * scaleDifference, -maxTranslateY), maxTranslateY);

      this.$refs.image.style.transform = `scale(${this.scale}) translate(${this.imageX}px, ${this.imageY}px)`;

      this.pins = [];

      // Needed a way to get this working, updates every tick as immediately may not assign y to pins
      this.$nextTick(() => {
        setTimeout(() => {
          this.propertyData.forEach((property) => {
            this.addPin(property.worldx, property.worldy, property.title, property.location, property.bedrooms, property.bathrooms, property.price, property.company, property.agent, property.agentID, property.detail);
          });
        }, 50);
      });

      this.$refs.image.style.transform = `scale(${this.scale}) translate(${translateX}px, ${translateY}px)`;
    },
    openModal(title, location, bedrooms, bathrooms, price, company, agent, agentID, worldx, worldy, detail, imageSrc) {
      this.modalData = { title, location, bedrooms, bathrooms, price, company, agent, agentID, worldx, worldy, detail, imageSrc};
      this.modalVisible = true;
    },
    closeModal() 
    {
      this.modalVisible = false;
      this.modalData = null;
    },
    addPin(worldx, worldy, title, location, bedrooms, bathrooms, price, company, agent, agentID, detail, imageSrc) {
      const imageElement = this.$refs.image;
      const imageWidth = imageElement.offsetWidth;
      const imageHeight = imageElement.offsetHeight;

      const minX = 448;
      const maxX = 1471;
      const minY = -1087;
      const maxY = -64;

      // Calculate the relative position based on world coordinates
      const relativeX = (worldx - minX) / (maxX - minX);
      const relativeY = (worldy - minY) / (maxY - minY);

      const translateX = this.imageX;
      const translateY = this.imageY;

      const pinX = ((relativeX * imageWidth - imageWidth / 2) * this.scale + imageWidth / 2) + (translateX * this.scale);
      const pinY = ((relativeY * imageHeight - imageHeight / 2) * this.scale + imageHeight / 2) + (translateY * this.scale);
      
      const pin = {
        x: pinX,
        y: pinY,
        title,
        location,
        bedrooms,
        bathrooms,
        price,
        company,
        agent,
        agentID,
        worldx,
        worldy,
        detail,
        imageSrc,
      };

      this.pins.push(pin);
    },
    clickPin(pin) {
      const worldx = pin.worldx;
      const worldy = pin.worldy;
    
      // Find the property-object with matching worldx and worldy values
      const propertyObject = document.querySelector(`[data-worldx="${worldx}"][data-worldy="${worldy}"]`);
    
      // Trigger a click event on propertyObject
      if (propertyObject) {
        propertyObject.click();
      }
    },
  },
};
</script>

<style scoped>
.property-divs {
  display: flex;
  flex-direction: row;
}
.property-list {
  flex: 1;
  min-width: 600px;
  max-height: 74.5vh;
  overflow-y: scroll;
}
.property-object {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 100% - 10px;
  height: 200px;
  border: 1px solid;
  cursor: pointer;
}
.property-thumbnail {
  width: 250px;
  max-height: 200px;
  border: 1px solid;
}
.property-teaser {
  text-align: left;
}
.property-teaser h4 {
  margin: 5px;
}
.property-teaser p {
  margin: 5px;
}
.property-map {
  flex: 2; 
  background-color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.property-image-container {
  overflow: hidden;
  position: relative;
  border: 1px solid;
  background-color: #888888;
}
.property-image {
  height: 74vh;
  object-fit: contain;
  cursor: grab;
}
.pin {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #ff33ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
}

.pin-marker {
  width: 8px;
  height: 8px;
  background-color: #ffdd99;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>