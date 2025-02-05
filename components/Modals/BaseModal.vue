<template>
  <div class="modal" @click="cancelModal()">
    <div class="modal-cancel" @click="cancelModal()" v-if="isCancel">
      <IconsCancel :color="`#FF0A0A`" :size="`24px`" />
    </div>
    <div @click.stop class="modal-in" :class="{ 'longer': isLong }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
//=============================- Props-=================================
const { isCancel, isLong } = defineProps({
  isCancel: {
    type: Boolean,
    required: true
  },
  isLong: {
    type: Boolean,
    required: true,
    default: false
  }
});
//=============================- Composables Var-=================================
const isLoginOpen = useLoginStatus()

//=============================- Close modal -=================================
function cancelModal() {
  isLoginOpen.value = false
}
</script>