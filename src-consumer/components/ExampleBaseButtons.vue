<script setup lang="ts">
import { PxlButton } from "../../dist/lib/pixellot-web-ui-kit.es.js";
</script>

<template>
  <div>
    <div>Types</div>
    <div class="demo-block">
      <pxl-button name="test"> Primary Button </pxl-button>
      <pxl-button name="test" outline> Primary Button Outline </pxl-button>
      <pxl-button name="test" link> Primary Link </pxl-button>
      <pxl-button name="test" link outline> Primary Link Outline </pxl-button>
      <br>
      <pxl-button name="test" type="secondary"> Secondary Button </pxl-button>
      <pxl-button name="test" type="secondary" outline> Secondary Button Outline </pxl-button>
      <pxl-button name="test" type="secondary" link> Secondary Link </pxl-button>
      <pxl-button name="test" type="secondary" link outline> Secondary Link Outline </pxl-button>
      <br>
      <pxl-button name="test" type="icon"> Icon </pxl-button>
      <pxl-button name="test" type="icon" outline> Icon  Outline </pxl-button>
    </div>
    <div>Disabled</div>
    <div class="demo-block">
      <pxl-button disabled name="test"> Primary Button </pxl-button>
      <pxl-button disabled name="test" outline> Primary Button Outline </pxl-button>
      <pxl-button disabled name="test" link> Primary Link </pxl-button>
      <pxl-button disabled name="test" link outline> Primary Link Outline </pxl-button>
      <br>
      <pxl-button disabled name="test" type="secondary"> Secondary Button </pxl-button>
      <pxl-button disabled name="test" type="secondary" outline> Secondary Button Outline </pxl-button>
      <pxl-button disabled name="test" type="secondary" link> Secondary Link </pxl-button>
      <pxl-button disabled name="test" type="secondary" link outline> Secondary Link Outline </pxl-button>
      <br>
      <pxl-button disabled name="test" type="icon"> Icon </pxl-button>
      <pxl-button disabled name="test" type="icon" outline> Icon  Outline </pxl-button>
    </div>
  </div>
</template>

<style lang="scss">
.demo-block .pxlButton {
  margin: 10px;
}
</style>