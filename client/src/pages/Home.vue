<template>
  <div class="home">
      <h1>Home</h1>
      <div class="main-wrapper">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
  </div>
</template>

<script>
  import GalleryCard from "../components/GalleryCard.vue"
export default {
  components: {
    GalleryCard
  }
}
</script>

<style>
  .home {
    width: 90%;
    margin: auto;
  }
  .main-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
</style>