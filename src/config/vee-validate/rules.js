import { defineRule } from 'vee-validate';
import { required, email, min, max, numeric } from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('numeric', numeric);

defineRule('anbani', (value) => {
  const regex = /^[ა-ჰ]+$/;

  if (!value.match(regex)) {
    return false;
  }

  return true;
});

defineRule('redberry', (value) => {
  const regex = 'redberry.ge';

  if (!value.endsWith(regex)) {
    return false;
  }
  return true;
});
