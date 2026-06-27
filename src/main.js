import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@/assets/style.css";

import CounterExercise from "./components/CounterExercise.vue";
import UserExercise from "./components/UserExercise.vue";
import TodoExercise from "./components/TodoExercise.vue";
import CartExercise from "./components/CartExercise.vue";
import ThemeExercise from "./components/ThemeExercise.vue";

const app = createApp(App);

app.use(createPinia());

app.component("CounterExercise", CounterExercise);
app.component("UserExercise", UserExercise);
app.component("TodoExercise", TodoExercise);
app.component("CartExercise", CartExercise);
app.component("ThemeExercise", ThemeExercise);

app.mount("#app");
