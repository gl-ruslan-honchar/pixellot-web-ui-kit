<script setup lang="ts">
import BaseButton from "../base/BaseButton/BaseButton.vue";
</script>

<template>
  <div>
    <div>Types</div>
    <div class="demo-block">
      <base-button name="test"> Primary Button </base-button>
      <base-button name="test" outline> Primary Button Outline </base-button>
      <base-button name="test" link> Primary Link </base-button>
      <base-button name="test" link outline> Primary Link Outline </base-button>
      <br>
      <base-button name="test" type="secondary"> Secondary Button </base-button>
      <base-button name="test" type="secondary" outline> Secondary Button Outline </base-button>
      <base-button name="test" type="secondary" link> Secondary Link </base-button>
      <base-button name="test" type="secondary" link outline> Secondary Link Outline </base-button>
      <br>
      <base-button name="test" type="icon"> Icon </base-button>
      <base-button name="test" type="icon" outline> Icon  Outline </base-button>
    </div>
    <div>Disabled</div>
    <div class="demo-block">
      <base-button disabled name="test"> Primary Button </base-button>
      <base-button disabled name="test" outline> Primary Button Outline </base-button>
      <base-button disabled name="test" link> Primary Link </base-button>
      <base-button disabled name="test" link outline> Primary Link Outline </base-button>
      <br>
      <base-button disabled name="test" type="secondary"> Secondary Button </base-button>
      <base-button disabled name="test" type="secondary" outline> Secondary Button Outline </base-button>
      <base-button disabled name="test" type="secondary" link> Secondary Link </base-button>
      <base-button disabled name="test" type="secondary" link outline> Secondary Link Outline </base-button>
      <br>
      <base-button disabled name="test" type="icon"> Icon </base-button>
      <base-button disabled name="test" type="icon" outline> Icon  Outline </base-button>
    </div>
  </div>
</template>

<style lang="scss">
.demo-block .baseButton {
  margin: 10px;
}
</style>