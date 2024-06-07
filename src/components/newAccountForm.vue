<template>
  <v-card-title class="text-h5 text-center"> Nova Conta </v-card-title>
  <v-card-text>
    <v-form>
      <v-text-field variant="outlined" v-model="user.name" label="Nome" />
      <v-text-field variant="outlined" v-model="user.email" label="Email" />
      <v-text-field
        variant="outlined"
        label="Senha"
        type="password"
        v-model="user.password"
      />
      <v-checkbox v-model="user.terms" label="Você concodrda com os termos?" />
      <v-btn block type="submit" variant="tonal" color="blue">
        Cadastrar
      </v-btn>
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
