<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="message"
          name="input-post-message"
          label="Post a new message"
          color="secondary"
          filled
          @keydown.enter.prevent="onClickPost"
        ></v-text-field>
      </v-col>
      <v-col cols="2" offset="10">
        <v-row justify="end">
          <v-btn
            id="btn-post"
            elevation="2"
            color="secondary"
            @click="onClickPost"
            >Post</v-btn
          ></v-row
        >
      </v-col></v-row
    ></v-container
  >
</template>

<script>
export default {
  name: 'Editor',
  props: {
    myName: {
      default: 'Unknown',
      type: String,
    },
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    onClickPost() {
      const message = {
        user_name: this.myName,
        text: this.message,
        date: 1,
      }
      this.$emit('post-message', message)
      this.message = ''
    },
  },
}
</script>
