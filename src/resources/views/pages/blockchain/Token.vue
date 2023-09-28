<script setup>
import {defineProps, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import {useHead} from '@unhead/vue'
import {EvmExplorer, Explorer} from '@/app/support/blockchain'
import {usePageTitle} from '@/app/support/page-title'

const router = useRouter()
const pageTitle = usePageTitle()
const props = defineProps({
    network: Object,
    explorer: Explorer,
})
const tokenContractAddress = ref('')

function onExplorerUpdated() {
    if (!(props.explorer instanceof EvmExplorer)) {
        router.replace({
            name: 'blockchain___account',
            params: {
                network: props.network.id,
            },
        })
    }
}

function onSubmit() {

}

watch(
    () => props.explorer,
    () => onExplorerUpdated(),
)

onExplorerUpdated()

useHead({
    title: () => pageTitle.setTitle('Token'),
})
</script>

<template lang="pug">
.blockchain-token-view
    .container
        form(@submit.prevent="onSubmit")
            .mb-3
                input.form-control(placeholder="Token Contract Address" v-model="tokenContractAddress")
            .mb-3
                button.btn.btn-primary(type="submit") Submit
        p {{ tokenContractAddress }}
</template>

<style scoped lang="scss">

</style>
