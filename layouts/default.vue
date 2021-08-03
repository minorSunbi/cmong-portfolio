<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      temporary
      fixed
      :style="`margin-top: ${$vuetify.application.top}px`"
      disable-resize-watcher
    > -->
      <!-- <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    <!-- </v-navigation-drawer> -->
    <!-- <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xs" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
        <v-row v-if="!$vuetify.breakpoint.xs" justify="end" class="px-4">
        <v-btn
          v-for="(item, index) in items" :key="index"
          depressed
          nuxt
          :to="item.to"
        >
          {{ item.title }}
        </v-btn>
        </v-row>
    </v-app-bar> -->

    <v-main>
      <Nuxt />
    </v-main>

    <!-- <v-footer
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'part1',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'part2',
          to: '/two'
        }
      ],
      title: '크몽 포트폴리오'
    }
  },
}
</script>
