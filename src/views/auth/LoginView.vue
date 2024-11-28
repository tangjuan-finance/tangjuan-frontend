<script setup lang="ts">
import { ref, reactive } from 'vue'

import api from '@/utils/axios';
interface FormInput {
  email: string;
  password: string;
}

// Make `formInput` a reactive object with explicit type
const formInput = reactive<FormInput>({
  email: "example@gmail.com",
  password: "密碼",
});
const error = ref<string | null>();

const fetchData = async () => {
  try {
    const response = await api.post<unknown>('login', formInput); // Replace with actual API endpoint
    // Need to change to saving token
    console.log(response.data);
  } catch (err) {
    error.value = 'Failed to send data';
    console.error(err);
  }
};

const submit = () => {
  fetchData();
};
</script>

<template>
  <main class="flex flex-row justify-center py-4 bg-yellow-50">
    <div class="flex flex-col justify-between gap-y-4 w-[448px] border-yellow-300 border-2 bg-stone-50 p-6 m-8 rounded">
      <h1 class="text-xl text-title">登入</h1>
      <div class="flex flex-col justify-between gap-y-2">
        <div>input A</div>
        <div>input B</div>
        <Button @click="submit" label="送出" class="text-title" />
      </div>
    </div>
    <!-- <div class="flex flex-col gap-y-6">
      <section class="max-w-6xl mt-4">
        <HomeViewBanner />
      </section>
      <section class="max-w-6xl mt-4">
        <BaseLineChart v-model:data="chartData" />
      </section>
      <section class="border-yellow-300 border-2 bg-yellow-50 p-6 m-8 rounded flex flex-col w-[1024px] gap-6">
        <HomePageForm v-model:formInput="formInput" />
        <div class="flex flex-row justify-center">
          <Button @click="submit" label="送出" class="text-title" />
        </div>
      </section>
    </div> -->
  </main>
</template>

<style scoped></style>
