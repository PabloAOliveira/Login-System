<template>
  <v-card-title class="text-h5 text-center"> Esqueceu a Senha? </v-card-title>
  <v-card-text>
    <v-card-subtitle class="text-center">
      Informe seu email para recuperar senha
    </v-card-subtitle>
    <v-form>
      <v-text-field variant="outlined" v-model="user.email" label="Email" />
      <v-btn block type="submit" variant="tonal" color="blue"> Enviar </v-btn>
      <v-divider />
      <div class="mt-8 text-center">
        Ja tem conta?
        <a style="cursor: pointer" @click="$emit('setItem', 0)">Entrar</a>
      </div>
    </v-form>
  </v-card-text>
</template>

<script setup>
import { ref } from "vue";

const user = ref({});
</script>
