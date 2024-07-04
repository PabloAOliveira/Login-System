<template>
  <v-card-title class="text-h5 text-center"> Autenticação </v-card-title>

  <div class="text-subtitle-1 text-medium-emphasis">Usúario</div>

  <v-form>
    <v-text-field
      density="compact"
      placeholder="Email"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
      v-model="user.email"
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Senha
      <a
        class="text-caption text-decoration-none text-blue"
        style="cursor: pointer"
        @click="$emit('setItem', 2)"
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
      v-model="user.password"
    ></v-text-field>

    <v-btn
      @click="login"
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      block
    >
      Entrar
    </v-btn>
  </v-form>

  <v-divider />

  <v-card-text class="text-center">
    Ou faça login com sua conta Google
  </v-card-text>

  <v-btn block class="mb-8" size="large" variant="tonal" color="primary">
    <v-icon left>mdi-google</v-icon>
  </v-btn>

  <v-divider />

  <v-card-text class="text-center">
    <a
      class="text-blue text-decoration-none"
      style="cursor: pointer"
      @click="$emit('setItem', 1)"
    >
      Cadastrar-se <v-icon icon="mdi-chevron-right"></v-icon>
    </a>
  </v-card-text>

  <v-dialog v-model="novaConta" persistent max-width="300">
    <v-card>
      <v-card-title>Conta não encontrada.</v-card-title>
      <v-card-text>
        A conta não foi localizada. Deseja criar um nova conta com os dados
        informados?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="criarNovaConta">Sim</v-btn>
        <v-btn color="red darken-1" text @click="novaConta = false">Não</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from "vue";
const visible = ref(false);
import * as fb from "@/plugins/firebase";

export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        this.$router.push({ name: "Home" });
      } catch (error) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/wrong-password":
            this.errorLogin = true;
            break;
          case "auth/invalid-email":
            this.errorLogin = true;
            break;
          case "auth/user-not-found":
            this.novaConta = true;
            break;
          default:
            this.errorLogin = true;
            break;
        }
      }
    },
    async criarNovaConta() {
      this.novaConta = false;
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.login();
    },
  },
};
</script>
