<script setup>
import {getNetworkList, EvmExplorer} from '@/app/support/blockchain'
import {computed, onMounted, reactive, ref, watch} from 'vue'
import {useApp} from '@/bootstrap/use-app'
import {useRoute, useRouter} from 'vue-router'
import {Dropdown} from 'bootstrap'
import {usePageTitle} from '@/app/support/page-title'

const app = useApp()
const route = useRoute()
const router = useRouter()
const pageTitle = usePageTitle()
const networks = getNetworkList()
const selectedNetwork = reactive({
    id: null,
    name: null,
    evm: false,
})
const explorer = ref()

function updateNetwork(id) {
    if (!(id in networks)) {
        router.push(app.$config.app.routes.notFound)
        return
    }
    selectedNetwork.id = id
    explorer.value = app.$blockchainExplorer.driver(selectedNetwork.id)
    if (explorer.value == null) {
        router.push(app.$config.app.routes.notFound)
    }
    selectedNetwork.name = networks[id]
    selectedNetwork.evm = explorer.value instanceof EvmExplorer
    pageTitle.setTitle(selectedNetwork.name)
}

function selectNetwork(id) {
    if (id !== selectedNetwork.id) {
        router.push({
            params: {
                network: id,
            },
        })
    }
}

const navItems = computed(() => selectedNetwork.id ? [
    {
        title: 'Account',
        to: {name: 'blockchain___account', params: {network: selectedNetwork.id}},
    },
    selectedNetwork.evm ? {
        title: 'Token',
        to: {name: 'blockchain___token', params: {network: selectedNetwork.id}},
    } : null,
].filter(navItem => navItem != null) : [])

watch(
    () => route.params.network,
    newNetwork => updateNetwork(newNetwork),
)

onMounted(() => {
    new Dropdown(document.querySelector('#ddtNetwork'))
})

updateNetwork(route.params.network)
</script>

<template lang="pug">
.blockchain-base-view
    .container
        .d-flex.mb-3
            .dropdown.me-3
                button#ddtNetwork.btn.btn-primary.dropdown-toggle(type="button" data-bs-toggle="dropdown" aria-expanded="false")
                    | Network: {{ selectedNetwork.name }}
                ul.dropdown-menu
                    li(v-for="(name, id) in networks" :key="id")
                        a.dropdown-item(href="#" @click.prevent="selectNetwork(id)") {{ name }}
            .nav
                .nav-item(v-for="(navItem, index) in navItems" :key="index")
                    router-link.nav-link(:to="navItem.to") {{ navItem.title }}
    router-view(v-if="explorer" :network="selectedNetwork" :explorer="explorer")
</template>

<style scoped lang="scss">

</style>
