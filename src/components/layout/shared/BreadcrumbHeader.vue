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

<script>
export default {
  name: 'BreadcrumbHeader',
  props: {
    currentLabel: {
      type: String,
      default: ''
    }
  },
  computed: {
    breadcrumbItems() {
      const segments = this.$route.path.split('/').filter(Boolean);
      if (!segments.length) { return []; }

      return segments.map((segment, index) => {
        const defaultTo = '/' + segments.slice(0, index + 1).join('/');
        const isCurrent = index === segments.length - 1;
        const isProductRoutePrefix = segments[0] === 'product' && index === 0;

        return {
          to: isProductRoutePrefix ? '/explore' : defaultTo,
          isCurrent,
          label: isCurrent && this.currentLabel ? this.currentLabel : isProductRoutePrefix
            ? 'Explore' : this.formatLabel(segment)
        };
      });
    }
  },
  methods: {
    formatLabel(segment) {
      return decodeURIComponent(segment)
        .replace(/[-_]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, letter => letter.toUpperCase());
    }
  }
}
</script>

<style scoped>
.breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    color: #7d8184;
    font-size: 17px;
}

.breadcrumb__link {
    color: #7d8184;
    text-decoration: none;
    transition: all 0.5s ease;
}

.breadcrumb__link:hover {
    color: #db4444;
}

.breadcrumb__separator {
    color: #7d8184;
}

.breadcrumb__current {
    color: #000;
}
</style>