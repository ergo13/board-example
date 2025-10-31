import { ref } from 'vue';

const visible = ref<boolean>(false);
const modalData = ref<any>(null);
const componentToShow = ref<string>('');

const openModal = (modalDataArg: unknown, componentToShowArg: string) => {
  modalData.value = modalDataArg;
  componentToShow.value = componentToShowArg;
  visible.value = true;
};

const closeModal = () => {
  modalData.value = null;
  componentToShow.value = '';
  visible.value = false;
};

export function useModal() {
  return {
    visible,
    modalData,
    componentToShow,
    openModal,
    closeModal
  }
}
