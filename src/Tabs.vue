<template>
  <ul :class="['nav', 'nav-'+type, { 'nav-stacked' : stacked }]">
    <li
      v-for="tab in tabs"
      role="presentation"
      :class="[{ 'active': tab.id == selected }, { 'disabled': tab.disabled }, { 'invalid': tab.invalidFields }]"
    >
      <a href @click.prevent="select(tab.id)">
        {{ tab.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'active',
    event: 'selected'
  },
  data () {
    return {
      selected: null
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true
    },
    active: {
      type: [Number, String],
      default: null
    },
    type: {
      type: String,
      default: 'tabs',
      validator: type => {
        return ['tabs', 'pills'].includes(type);
      }
    },
    stacked: {
      type: Boolean,
      default: false
    },
    preselectFirstTab: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    active (id) {
      this.select(id);
    }
  },
  methods: {
    findTab (id) {
      return this.tabs.find(tab => tab.id === id);
    },
    select (id) {
      const tab = this.findTab(id);

      if (!tab || tab.disabled || tab.id === this.selected) {
        return;
      }

      this.selected = tab.id;
      this.$emit('selected', this.selected);
    }
  },
  created () {
    if (this.active) {
      this.select(this.active);
    } else if (this.preselectFirstTab && this.tabs.length) {
      this.select(this.tabs[0].id);
    }
  }
};
</script>
