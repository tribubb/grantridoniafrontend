<!-- PropertyObjectModal.vue -->

<template>
  <div class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button @click="closeModal" class="modal-close-button">X</button>
      <img class="modal-image" :src="modalData.imageSrc" />
      <div class="modal-content-c" @click.stop>
        <h4>{{ modalData.title }}</h4>
        <p>{{ modalData.location }}</p>
        <p>{{ modalData.price }}</p>
        <p>{{ modalData.detail }}</p>
      </div>
      <div class="modal-content-s flex justify-between">
        <!-- IMPDEV: May retire this company option with further development -->
        <div class="modal-content-sw">
          <p>{{ modalData.company }}</p>
        </div>
        <div class="modal-content-se" @click="openDiscord()">
          <p>{{ modalData.agent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default 
{
  props: 
  {
    modalData: Object,
  },
  methods: {
    closeModal() 
    {
      this.$emit("closeModal");
    },
    openDiscord() 
    {
      window.open(this.modalData.agentID, '_blank');
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
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
  text-align: left;
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

.modal-content-c {
  overflow-y: scroll;
}

.modal-content-s {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}

.modal-content-sw {
  padding: 10px;
  flex: 1;
  justify-content: center;
  align-items: left;
  text-align: left;
  position: relative;
}

.modal-content-se {
  padding: 10px;
  flex: 1;
  justify-content: center;
  align-items: left;
  text-align: left;
  background-color: #ccffcc;
  position: relative;
  text-align: right;
  cursor: pointer;
}

.modal-close-button {
  position: absolute;
  top: 10px;
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
</style>