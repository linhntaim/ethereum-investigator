<script setup>
import {defineProps} from 'vue'
import {useHead} from '@unhead/vue'
import {Explorer} from '@/app/support/blockchain'
import {usePageTitle} from '@/app/support/page-title'

const pageTitle = usePageTitle()
const props = defineProps({
    network: Object,
    explorer: Explorer,
})

useHead({
    title: () => pageTitle.setTitle('Account'),
})
</script>

<template lang="pug">
.blockchain-account-view
</template>

<style scoped lang="scss">

</style>
