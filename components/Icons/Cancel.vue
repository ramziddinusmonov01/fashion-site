<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" viewBox="0 0 24 24">
    <path :fill="color"
      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z">
    </path>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const name = 'MaterialSymbolsCloseRounded';

const props = defineProps({
  color: {
    type: String,
    default: '#000',
  },
  size: {
    type: String,
    default: '24px',
  },
});
</script>