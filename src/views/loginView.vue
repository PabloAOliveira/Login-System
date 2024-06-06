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
          <login-form />
        </v-window-item>
        <v-window-item value="2">
          <NewAccountForm />
        </v-window-item>
        <v-window-item value="3">
          <ForgotPasswordForm />
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
import loginForm from "../components/loginForm.vue";
import { ref } from "vue";

const visible = ref(false);
const item = ref("1");
</script>
