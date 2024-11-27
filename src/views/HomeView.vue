<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import HomeViewBanner from '@/views/HomeViewBanner.vue';
import BaseLineChart from '@/components/base/BaseLineChart.vue';
import HomePageForm from '@/components/form/HomePageForm.vue';

import api from '@/utils/axios';

const formInput = reactive({
  salary_amount: 50000,
  expense_amount: 10000,
  investment_ratio: 70,
  investment_amount: 1000000,
  start_year: 26,
  house_start_year: 36,
  child_born_at_age: 34,
  retire_age: 65,
  house_amount: 10000000,
  down_payment: 2000000,
  interest: 1.05,
  loan_term: 30,
});

const chartData = ref();
const error = ref<string | null>();

const fetchData = async () => {
  try {
    const response = await api.post<unknown>('process', formInput); // Replace with actual API endpoint
    chartData.value = response.data;
  } catch (err) {
    error.value = 'Failed to send data';
    console.error(err);
  }
};

// Trigger data fetch on mount
onMounted(() => {
  fetchData();
});

// Function for button-triggered fetch
const submit = () => {
  fetchData();
};
</script>

<template>
  <main class="flex flex-row justify-center py-4 bg-stone-50">
    <div class="flex flex-col gap-y-6">
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
    </div>
  </main>
</template>
