<template>
  <div class="area-table">
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
      <div
        class="area-title"
        v-for="(stage, index) in stages"
        :slot="stage"
        :key="index"
      >
        <h2>
          {{ stage }} 
          <span>{{ itens[index].quantity }}</span>
        </h2>
      </div>
      <div v-for="block in blocks" :slot="block.id" :key="block.id">
        <div class="details">
          <span class="fs-6 fw-semibold">Name</span>
          <span class="fs-6">{{ block.name }}</span>
        </div>
        <div class="details">
          <span class="fs-6 fw-semibold">Secret Identity</span>
          <span class="fs-6">{{ block.identitySecret }}</span>
        </div>
        <div class="details">
          <span class="fs-6 fw-semibold">City</span>
          <span class="fs-6">{{ block.city }}</span>
        </div>
        <div class="details">
          <span class="fs-6 fw-semibold">Enemy Main</span>
          <span class="fs-6">{{ block.mainEnemy }}</span>
        </div>
      </div>
    </kanban-board>
  </div>
</template>

<script src='./tableKaban.js'></script>
<style lang="stylus" src='./tableKaban.styl'></style>