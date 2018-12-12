<template lang="html">
  <div>
    <DetailHeader :title="activeItem.description"></DetailHeader>
    <DetailImage :img-url="activeItem.image"></DetailImage>
    <DetailBody :item="activeItem"></DetailBody>
    <DetailFooter
      :id="activeItem.id"
      :price="activeItem.price"
      :shipping-fee="activeItem.shippingFee"
      :is-sold-out="activeItem.isSoldOut"
      v-if="!activeItem.isSoldOut">
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
  props: ['id'],
  components: {
    DetailHeader,
    DetailImage,
    DetailBody,
    DetailFooter
  },
  created () {
    this.getActiveShopItem(this.id)
  },
  computed: {
    ...mapState('item', ['activeItem'])
  },
  methods: {
    ...mapActions('item', ['getActiveShopItem'])
  }
}
</script>

<style lang="css">
</style>
