<template>
  <v-card-title class="text-h5 text-center"> Autenticação </v-card-title>

  <div class="text-subtitle-1 text-medium-emphasis">Usúario</div>

  <v-text-field
    density="compact"
    placeholder="Email"
    prepend-inner-icon="mdi-email-outline"
    variant="outlined"
  ></v-text-field>

  <div
    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
  >
    Senha
    <a
      class="text-caption text-decoration-none text-blue"
      href="#"
      rel="noopener noreferrer"
      target="_blank"
    >
      Esqueceu sua senha?</a
    >
  </div>

  <v-text-field
    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
    :type="visible ? 'text' : 'password'"
    density="compact"
    placeholder="Informe sua senha"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="visible = !visible"
  ></v-text-field>

  <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
    Entrar
  </v-btn>

  <v-divider />

  <v-card-text class="text-center">
    Ou faça login com sua conta Google
  </v-card-text>

  <v-btn block class="mb-8" size="large" variant="tonal" color="primary">
    <v-icon left>mdi-google</v-icon>
    oogle
  </v-btn>

  <v-divider />

  <v-card-text class="text-center">
    <a
      class="text-blue text-decoration-none"
      href="#"
      rel="noopener noreferrer"
      target="_blank"
    >
      Cadastrar-se <v-icon icon="mdi-chevron-right"></v-icon>
    </a>
  </v-card-text>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
