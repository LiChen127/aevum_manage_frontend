/**
 * 封装白天和夜间模式切换
 */

import useStyleModelStore, { StyleModel } from '@/store/styleModel';

const styleModelStore = useStyleModelStore();

const isDark = styleModelStore.getStyleModel === StyleModel.DARK;
export default function toggleTheme() {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
};
