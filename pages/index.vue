<template>
  <v-row align="start">
    <v-col cols="12" md="4">
      <list
        :title-list="'Following'"
        :button-text="'Unfollow'"
        :users="filteredFollowing"
        @follow-unfollow="onUnfollow"
        @selected-user="selectUser"
      ></list>
      <list
        class="mt-12"
        :users="jsonData.follow"
        @follow-unfollow="onFollow"
      ></list>
    </v-col>
    <v-col cols="12" md="8">
      <timeline :messages="messages"></timeline>
      <editor
        class="mt-6 px-0"
        :my-name="myName"
        @post-message="postMessage"
      ></editor>
    </v-col>
  </v-row>
</template>

<script>
import Editor from '~/components/Editor.vue'
import List from '~/components/List.vue'
import Timeline from '~/components/Timeline.vue'
import jsonData from '~/data.json'

export default {
  components: {
    editor: Editor,
    list: List,
    timeline: Timeline,
  },

  data() {
    return {
      messages: jsonData.messages,
      jsonData,
      myName: 'Sergio',
    }
  },

  computed: {
    filteredFollowing() {
      return this.jsonData.following.filter((el) => {
        return el.name !== this.myName
      })
    },
  },

  created() {
    this.filterMessages()
  },

  methods: {
    filterMessages() {
      this.messages = this.jsonData.messages

      this.messages = this.messages.filter((el) => {
        return this.jsonData.following.some((f) => {
          return f.name === el.user_name
        })
      })
    },
    onUnfollow(user) {
      this.spliceUser(this.jsonData.following, user)
      this.jsonData.follow.push(user)
      this.filterMessages()
    },
    onFollow(user) {
      this.spliceUser(this.jsonData.follow, user)
      this.jsonData.following.push(user)
      this.filterMessages()
    },
    postMessage(message) {
      this.jsonData.messages.unshift(message)
      this.filterMessages()
    },
    selectUser(userName) {
      if (userName === '') {
        this.filterMessages()
      } else {
        this.messages = this.jsonData.messages.filter((el) => {
          return el.user_name === userName
        })
      }
    },
    spliceUser(users, user) {
      const removeIndex = users.findIndex((item) => item.name === user.name)
      users.splice(removeIndex, 1)
    },
  },
}
</script>
