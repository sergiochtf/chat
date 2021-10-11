<template>
  <v-card>
    <v-card-title>Timeline</v-card-title>
    <v-virtual-scroll bench="0" :items="messages" height="476" item-height="64">
      <template #default="{ item }">
        <v-card :key="item">
          <v-card-title>
            <span class="subtitle-1"> {{ item.user_name }}</span>
            <v-spacer></v-spacer>
            <span class="subtitle-2">{{ formatTimestampDate(item.date) }}</span>
          </v-card-title>

          <v-card-subtitle>
            {{ item.text }}
          </v-card-subtitle>
        </v-card>

        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>
    <v-card-text v-if="noData"><span> -- No Messages -- </span></v-card-text>
  </v-card>
</template>

<script>
import prettyMilliseconds from 'pretty-ms'

export default {
  name: 'Timeline',
  props: {
    messages: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    noData() {
      let result = false
      if (!this.messages || (this.messages && this.messages.length === 0)) {
        result = true
      }
      return result
    },
  },
  methods: {
    formatTimestampDate(date) {
      return prettyMilliseconds(date, { compact: true })
    },
  },
}
</script>

<style></style>
