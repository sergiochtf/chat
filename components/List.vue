<template>
  <v-card>
    <v-list>
      <v-subheader>{{ titleList }}</v-subheader>
      <v-list-item-group
        v-if="!noData"
        v-model="selectedUser"
        :color="color"
        value="true"
      >
        <v-card-title></v-card-title>
        <v-list-item v-for="user in users" :key="user.name">
          <v-list-item-avatar>
            <v-icon class="grey lighten-1" dark> mdi-account </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="user.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn elevation-2 :color="buttonColor" @click="onClick(user)">
              {{ buttonText }}
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group></v-list
    >
    <v-card-text v-if="noData"><span> -- No Users -- </span></v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'List',
  props: {
    titleList: {
      default: 'Follow',
      type: String,
    },
    buttonText: {
      default: 'Follow',
      type: String,
    },
    users: {
      default: () => [],
      type: Array,
    },
    color: {
      default: 'primary',
      type: String,
    },
  },
  data() {
    return {
      selectedUser: '',
    }
  },
  computed: {
    buttonColor() {
      let color = 'secondary'
      if (this.buttonText === 'Unfollow') {
        color = 'accent'
      }
      return color
    },
    noData() {
      let result = false
      if (!this.users || (this.users && this.users.length === 0)) {
        result = true
      }
      return result
    },
  },
  watch: {
    selectedUser(selected) {
      let userName = ''
      if (selected !== undefined) {
        userName = this.users[selected].name
      }
      this.$emit('selected-user', userName)
    },
  },
  methods: {
    onClick(user) {
      this.$emit('follow-unfollow', user)
    },
  },
}
</script>
