<template lang="pug">
.page
  .container
    .page__title
      h1 {{ data.pageTitle }}
    .page__content
      .div(
        v-html="data.about"
      )
      h3 {{ data.features.heading }}
      .cards
        .cards__item(
          v-for="item of data.features.items"
          :key="item.id"
          v-if="data.features.items"
        )
          img.cards__item-icon(
            v-if="item.icon"
            :src="`/public/images/${item.icon}.svg`"
          )
          h4 {{ item.title }}
          p {{ item.text }}
</template>

<script setup>
import { reactive} from "vue";

const data = reactive({
  pageTitle: `About Us`,
  features: {
    heading: `At our API company, we pride ourselves on delivering top-notch services that set us apart from the competition. Here are three of our key advantages:`,
    items: [
      {
        id: 1,
        icon: 'dashboard-customize',
        title: 'Comprehensive API solutions:',
        text: `Our API offerings are designed to cater to a wide range of business needs, from 
          data integration and management to payment processing and customer engagement. Our APIs 
          are highly customizable, allowing businesses to tailor them to their specific requirements.`,
      },
      {
        id: 2,
        icon: 'integration-instructions',
        title: 'Seamless integration:',
        text: `Our APIs are designed to seamlessly integrate with various platforms and systems, 
          ensuring smooth data transfer and real-time updates. This eliminates the need for manual 
          data entry, reducing errors and saving time and resources.`,
      },
      {
        id: 3,
        icon: 'support-agent',
        title: 'Exceptional customer support:',
        text: `We prioritize customer satisfaction above all else, and our dedicated support team 
          is available around the clock to assist with any issues or queries. Our support services 
          include technical assistance, training, and ongoing maintenance to ensure that our APIs 
          continue to meet your evolving needs.`,
      },
    ],
  },
  about: `<p>Our company specializes in providing a comprehensive API solution for businesses 
    looking to streamline their operations and enhance their digital capabilities.</p><p>Our APIs 
    are designed to seamlessly integrate with various platforms and systems, enabling seamless 
    data transfer and real-time updates. </p><p>Our API solutions are highly customizable, 
    allowing businesses to tailor them to their specific needs and requirements. </p><p>Whether 
    you're looking to improve your customer experience, streamline your workflow, or boost your 
    overall efficiency, our APIs have got you covered. </p><p>Trust us to be your go-to partner 
    for all your API needs.</p>`
})
</script>

<style lang="scss" scoped>

</style>