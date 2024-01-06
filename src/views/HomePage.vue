<template lang="pug">
.page
  .container
    .page__title 
      h1.page__title_selected {{ data.pageTitle }}
    .page__content
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
      section.section__line
        h3 {{ data.mission.heading }}
        p {{ data.mission.text }}
</template>

<script setup>
import { reactive} from "vue";

const data = reactive({
  pageTitle: `Empowering businesses with innovative API solutions for seamless integration, 
    enhanced productivity, and exceptional customer experiences.`,
  features: {
    heading: `At our API company, we offer a wide range of products to meet the diverse needs of our clients. Here are six of our most popular offerings:`,
    items: [
      {
        id: 1,
        icon: 'hub',
        title: 'Data Integration API:',
        text: `This API enables seamless data transfer between various systems and platforms, 
          eliminating the need for manual data entry and reducing errors.`,
      },
      {
        id: 2,
        icon: 'receipt',
        title: 'Payment Processing API:',
        text: `Our payment processing API allows businesses to securely process payments online, via 
          mobile devices, or in-store.`,
      },
      {
        id: 3,
        icon: 'chat',
        title: 'Customer Engagement API:',
        text: `This API enables businesses to engage with their customers through personalized 
          messaging and targeted offers, improving customer satisfaction and loyalty.`,
      },
      {
        id: 4,
        icon: 'settings-applications',
        title: 'Workflow Automation API:',
        text: `Our workflow automation API streamlines business processes by automating repetitive 
          tasks and reducing manual intervention, saving time and resources.`,
      },
      {
        id: 5,
        icon: 'monitoring',
        title: 'Analytics & Reporting API:',
        text: `This API provides real-time insights into business performance, enabling data-driven 
          decision making and continuous improvement.`,
      },
      {
        id: 6,
        icon: 'verified-user',
        title: 'Security & Compliance API:',
        text: `Our security & compliance API ensures that sensitive data is protected and that 
          regulatory requirements are met, providing peace of mind for businesses operating in 
          highly regulated industries.`,
      },
    ],
  },
  mission: {
    heading: 'Our Mission',
    text: `Revolutionize the way businesses operate by providing cutting-edge technology solutions 
      that enable seamless integration, streamline workflows, and enhance customer experiences. We 
      are committed to delivering exceptional value to our clients through our innovative 
      products, outstanding customer support, and unwavering dedication to excellence.`
  }
})
</script>

<style lang="scss" scoped>
.section__line {
  border-top: 1px solid #5454547a;
  border-bottom: 1px solid #5454547a;
  padding: 20px 10px;
  margin-bottom: 20px;
}
</style>