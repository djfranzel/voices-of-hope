<template>
  <div>
    <v-app-bar app clipped-left color="blue-grey darken-1" dark clipped-right>
      <v-app-bar-nav-icon @click.stop="toggleDrawer = !toggleDrawer" title="Toggle Side Bar"></v-app-bar-nav-icon>
      <v-icon class="mx-4" large>
        mdi-account-multiple
      </v-icon>
      <v-toolbar-title><b>HR Portal</b></v-toolbar-title>
      <div class="flex-grow-1"></div>

      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-badge
              :content="1"
              :value="1"
              color="red" overlap offset-x="27px" offset-y="16px">
            <v-btn v-bind="attrs"
                   v-on="on"
                   large
                   icon
                   class="mr-3">
              <v-icon>mdi-bell-ring</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list three-line class="notification-menu">
          <v-list-item style="min-height: unset">
            <v-list-item-content>
              <v-list-item-title class="title">Notifications</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon
                         v-bind="attrs"
                         v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list class="pa-0">
                  <v-list-item class="pl-0 pr-0">
                    <v-btn text
                           tile
                           class="pl-7 pr-7"
                           @click="">
                      <v-icon left>mdi-check</v-icon>
                      Mark all as read
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
          <template>
            <v-list-item v-ripple class="cursor-hover">
              <v-list-item-avatar>
                <v-img src="/test"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ notification.subject }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span>{{ notification.message }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text
                    text="Nov 11, 2020"></v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
          </template>
          <v-list-item class="text-center">
            <v-list-item-content>
              <v-list-item-subtitle>
                {{ !notifications.length ? 'No notifications' : 'No more notifications' }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs"
                 v-on="on" icon large class="mr-1">
            <v-icon>mdi-logout-variant</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>

    </v-app-bar>

    <v-navigation-drawer v-model="rightSideFilter" app clipped right></v-navigation-drawer>

    <v-navigation-drawer app clipped v-model="toggleDrawer">
      <v-list>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Employee List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import {EventBus} from '../event-bus';
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data: () => {
    return {
      toggleDrawer: null,
      rightSideFilter: null,
    };
  },
  created: function () {},
  methods: {}
};
</script>

<style></style>
