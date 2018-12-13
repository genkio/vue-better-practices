<template lang="html">
  <div v-if="activeShopItem">
    <DetailHeader :title="activeShopItem.name"></DetailHeader>
    <DetailImage :img-url="activeShopItem.image"></DetailImage>
    <DetailBody :item="activeShopItem"></DetailBody>
    <DetailFooter
      :id="activeShopItem.id"
      :price="activeShopItem.price"
      :shipping-fee="activeShopItem.shippingFee"
      :is-sold-out="activeShopItem.isSoldOut"
      v-if="!activeShopItem.isSoldOut">
    </DetailFooter>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DetailHeader from '../components/item/DetailHeader'
import DetailImage from '../components/item/DetailImage'
import DetailBody from '../components/item/DetailBody'
import DetailFooter from '../components/item/DetailFooter'

export default {
  name: 'ItemDetail',
  props: {
    id: {
      required: true
    }
  },
  components: {
    DetailHeader,
    DetailImage,
    DetailBody,
    DetailFooter
  },
  created () {
    this.getShopItem(this.id)
  },
  beforeDestroy () {
    this.clearActiveShopItem()
  },
  computed: {
    ...mapState('shopItem', ['activeShopItem'])
  },
  methods: {
    ...mapActions('shopItem', ['getShopItem', 'clearActiveShopItem'])
  }
}
</script>

<style lang="css">
</style>
