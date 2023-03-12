<template>

  <events-block
    id="events-block"
  />
  <menu-block
    id="menu-block"
  />
  <photos-block
    id="photos-block"
  />
  <map-block
    id="map-block"
  />
</template>

<script>

import EventsBlock from "@/components/home/blocks/events/EventsBlock.vue"
import MenuBlock from "@/components/home/blocks/menu/MenuBlock.vue"
import PhotosBlock from "@/components/home/blocks/photo_reports/PhotosBlock.vue"
import MapBlock from "@/components/home/blocks/map/MapBlock.vue"

export default {
  components:{
    MenuBlock,
    EventsBlock,
    PhotosBlock,
    MapBlock,
  }
}
</script>
