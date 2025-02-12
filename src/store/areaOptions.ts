import area from '@/static/area.json';
import { ref } from 'vue';
import { defineStore } from 'pinia';

interface Area {
  value: string;
  label: string;
  children?: Area[];
}

export const useAreaOptions = defineStore('areaOptions', {
  state: () => ({
    areaOptions: [] as Area[],
  }),
  actions: {
    setAreaOptions(areaOptions: Area[]) {
      this.areaOptions = areaOptions;
    },
  },
  getters: {
    getAreaOptions: (state) => state.areaOptions,
  },
});

export default useAreaOptions;

