<template>
  <div>
    Example Editor:
    <Editor></Editor>
  </div>
</template>

<script>
import Editor from './editor';

export default {
  name: 'Example',
  components: {
    Editor
  },
  mounted () {
    console.log('Editor Loaded');
  }
};
</script>

<style scoped lang="scss"></style>
