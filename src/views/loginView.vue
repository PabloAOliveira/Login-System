<template>
  <v-container>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-window v-model="item">
        <v-window-item value="1">
          <loginForm
            @setItem="
              (i) => {
                item = i;
              }
            "
          />
        </v-window-item>
        <v-window-item value="2">
          <newAccountForm
            @setItem="
              (i) => {
                item = i;
              }
            "
          />
        </v-window-item>
        <v-window-item value="3">
          <forgotPasswordForm
            @setItem="
              (i) => {
                item = i;
              }
            "
          />
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
import loginForm from "../components/loginForm.vue";
import newAccountForm from "../components/newAccountForm.vue";
import forgotPasswordForm from "../components/forgotPasswordForm.vue";
import { ref } from "vue";

const item = ref("1");
</script>
