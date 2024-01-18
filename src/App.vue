<script setup lang="ts">
import avatarImg from '@/assets/images/avatar-jessica.jpeg'
interface IData {
  network: string
  link: string
}
const data: Array<IData> = [
  {
    network: 'GitHub',
    link: 'https://github.com/'
  },
  {
    network: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/'
  },
  {
    network: 'LinkedIn',
    link: 'https://www.linkedin.com/'
  },
  {
    network: 'Twitter',
    link: 'https://twitter.com/'
  },
  {
    network: 'Instagram',
    link: 'https://www.instagram.com/'
  },
]
</script>
<template>
  <body class=" flex justify-center items-center h-screen bg-neo-off-black">
    <main
      class=" flex flex-col items-center gap-6 w-full sDt:w-[37.5%] max-w-[350px] sDt:max-w-[400px] bg-neo-dark-grey mx-6 p-6 sDt:p-10 text-neo-white text-sm leading-[150%] font-bold font-inter rounded-xl">
      <img :src="avatarImg" alt="avatar" class=" rounded-full w-[5.5rem] select-none">
      <div class=" flex flex-col gap-1">
        <h1 class=" text-2xl leading-[150%] font-semibold">Jessica Randall</h1>
        <h2 class=" text-neo-green">London, United Kingdom</h2>
      </div>
      <p class=" font-normal">"Front-end developer and avid reader."</p>
      <div class=" flex flex-col gap-4 w-full">
        <a v-for="item in data" :href="item.link" target="_blank"
          class=" flex items-center justify-center w-full h-[2.8125rem] bg-neo-grey hover:bg-neo-green hover:text-neo-grey rounded-lg select-none">
          {{ item.network }}
        </a>
      </div>
    </main>
  </body>
</template>