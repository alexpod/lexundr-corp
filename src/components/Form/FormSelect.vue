<template lang="pug">
.form-select
  label(
    v-text="label"
  )
  select(
    @change="changeOption"
  )
    option(
      v-for="option in props.options"
      :key="option.id"
      :value="option.value"
    ) {{ option.name }}

</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['update:modelValue'])

const changeOption = (event) => {
  emits('update:modelValue', event.target.value);
}
</script>

<style lang="scss" scoped>
.form-select {
  label {
    margin-right: 10px;
  }
  select {
    padding: 10px 15px;
    font-size: 18px;
    margin: 0 5px;
    border: 1px solid #96969d;
    border-radius: 6px;
    background: #1a1a1a;
    color: #9b9b9b;
    cursor: pointer;
    option {
      &:focus,
      &:hover {
        background-color: $color-green;
      }
    }
  }
}
</style>