<script setup lang="ts">
import HomeViewBanner from '@/views/HomeViewBanner.vue';
import BaseInputGroup from '@/components/base/BaseInputGroup.vue';
import BaseLineChart from '@/components/base/BaseLineChart.vue';

</script>

<template>
  <main class="flex flex-row justify-center my-4">
    <div class="flex flex-col gap-y-6">
      <section class="max-w-6xl mt-4">
        <HomeViewBanner />
      </section>
      <section class="max-w-6xl mt-4">
        <BaseLineChart />
      </section>
      <section class="bg-yellow-50 p-8 rounded-md flex flex-col w-[1024px] gap-6">
        <div>
          <div class="flex flex-row">
            <i class="pi pi-wallet pt-1.5 pr-2"></i>
            <div class="font-title text-xl mb-4">日常理財</div>
          </div>
          <div class="grid grid-cols-7 gap-4">
            <BaseInputGroup label="起始薪資" type="integer" icon="" name="salary_amount" :min="0" :max="10e8" default=50000
              mode="currency" currency="NTD" locale="tw-TW" class="col-span-2" />
            <BaseInputGroup label="起始生活費" type="integer" icon="" name="expense_amount" :min="0" :max="10e6"
              default=10000 mode="currency" currency="NTD" locale="tw-TW" class="col-span-2" />
            <BaseInputGroup label="餘額轉投資比率" type="float" icon="" name="investment_ratio" :min="0" :max="100" default=70
              class="col-span-1" suffix="%" />
            <BaseInputGroup label="起始總投資金額" type="integer" icon="" name="investment_amount" :min="0" :max="10e12"
              default=1000000 mode="currency" currency="NTD" locale="tw-TW" class="col-span-2" />
          </div>
        </div>
        <div>
          <div class="flex flex-row">
            <i class="pi pi-calendar pt-1.5 pr-2"></i>
            <div class="font-title text-xl mb-4">人生規劃</div>
          </div>
          <div class="grid grid-cols-7 gap-4">
            <BaseInputGroup label="起始年齡" type="integer" icon="" name="start_year" :min="0" :max="150" default=15
              suffix=" 歲" class="col-span-1" />
            <BaseInputGroup label="購屋時年齡" type="integer" icon="" name="house_start_year" :min="0" :max="150" default=36
              suffix=" 歲" class="col-span-2" />
            <BaseInputGroup label="預計生小孩時年齡" type="integer" icon="" name="child_born_at_age" :min="0" :max="150"
              default=34 suffix=" 歲" class="col-span-2" />
            <BaseInputGroup label="退休年齡" type="integer" icon="" name="retire_age" :min="0" :max="150" default=65
              class="col-span-2" suffix=" 歲" />
          </div>
        </div>
        <div>
          <div class="flex flex-row">
            <i class="pi pi-building pt-1.5 pr-2"></i>
            <div class="font-title text-xl mb-4">房屋規劃</div>
          </div>
          <div class="grid grid-cols-7 gap-4">
            <BaseInputGroup label="房屋總價" type="integer" icon="" name="house_amount" :min="0" :max="10e12"
              default=10000000 mode="currency" currency="NTD" locale="tw-TW" class="col-span-3" />
            <BaseInputGroup label="頭期款金額" type="integer" icon="" name="down_payment" :min="0" :max="10e12"
              default=2000000 mode="currency" currency="NTD" locale="tw-TW" class="col-span-2" />
            <BaseInputGroup label="年利率" type="float" icon="" name="interest" :min="0" :max="100" default=1.05 prefix="%"
              class=col-span-1 />
            <BaseInputGroup label="貸款年限" type="integer" icon="" name="loan_term" :min="0" :max="50" default=30
              class="col-span-1" suffix=" 年" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
