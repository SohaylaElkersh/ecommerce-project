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
      const queryBreadcrumb = this.$route.query.breadcrumb;
      const queryBreadcrumbTo = this.$route.query.breadcrumbTo;

      if (this.$route.name === 'NotFound') {
        return [
          { to: this.$route.path, isCurrent: true, label: 'Not Found' }
        ];
      }

      if (segments[0] === 'product' && segments.length) {
        const middleLabel = queryBreadcrumb ? this.formatLabel(queryBreadcrumb) : 'Explore';
        const middleTo = typeof queryBreadcrumbTo === 'string' && queryBreadcrumbTo ? queryBreadcrumbTo : '/explore';
        return [
          { to: middleTo, isCurrent: false, label: middleLabel },
          { to: '/' + segments.join('/'), isCurrent: true, label: this.currentLabel || this.formatLabel(segments[segments.length - 1]) }
        ];
      }

      if (!segments.length) { return []; }
      return segments.map((segment, index) => {
        const to = '/' + segments.slice(0, index + 1).join('/');
        const isCurrent = index === segments.length - 1;
        return { to, isCurrent, label: isCurrent && this.currentLabel ? this.currentLabel : this.formatLabel(segment) };
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

<style lang="scss">
@import "@/assets/styles/components/navigation/BreadcrumbHeader.scss";
</style>