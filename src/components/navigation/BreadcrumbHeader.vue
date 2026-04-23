<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <router-link to="/" class="breadcrumb__link">Home</router-link>
    <span v-for="(item, index) in breadcrumbItems" :key="item.to || index">
      <span class="breadcrumb__separator">/</span>
      <router-link v-if="!item.isCurrent" :to="item.to" class="breadcrumb__link">
        {{ item.label }}
      </router-link>
      <span v-else class="breadcrumb__current">
        {{ item.label }}
      </span>
    </span>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  currentLabel: {
    type: String,
    default: ''
  }
})

// Uses Vue Router `useRoute()` to access current path and query params
const route = useRoute()

// Converts URL segments into readable labels:
//   Decodes URL encoding
//   Replaces hyphens/underscores with spaces
//   Capitalizes words
function formatLabel(segment) {
  return decodeURIComponent(segment)
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

// Handles multiple cases:
//
// 1. Not Found page:
//   - Returns single "Not Found" breadcrumb
//
// 2. Product routes (`/product/...`):
//   - Supports custom breadcrumb label from query params
//   - Uses fallback "Explore" link
//   - Displays product name as current item
//
// 3. General routes:
//   - Splits URL into segments
//   - Builds incremental navigation paths
const breadcrumbItems = computed(() => {  
  const segments = route.path.split('/').filter(Boolean);
  const queryBreadcrumb = route.query.breadcrumb;
  const queryBreadcrumbTo = route.query.breadcrumbTo
  if (route.name === 'NotFound') {
    return [
      { to: route.path, isCurrent: true, label: 'Not Found' }
    ];
  }
  if (segments[0] === 'product' && segments.length) {
    const middleLabel = queryBreadcrumb ? formatLabel(queryBreadcrumb) : 'Explore';
    const middleTo = typeof queryBreadcrumbTo === 'string' && queryBreadcrumbTo ? queryBreadcrumbTo : '/explore';
    return [
      { to: middleTo, isCurrent: false, label: middleLabel },
      { to: '/' + segments.join('/'), isCurrent: true, label: props.currentLabel || formatLabel(segments[segments.length - 1]) }
    ];
  }
  if (!segments.length) { return []; }
  return segments.map((segment, index) => {
    const to = '/' + segments.slice(0, index + 1).join('/');
    const isCurrent = index === segments.length - 1;
    return { to, isCurrent, label: isCurrent && props.currentLabel ? props.currentLabel : formatLabel(segment) };
  });
})
</script>

<style lang="scss">
@import "@/assets/styles/components/navigation/BreadcrumbHeader.scss";
</style>



// Component Purpose:
// Generates a dynamic breadcrumb navigation trail based on the current route.
// Helps users understand their location within the application and navigate back.