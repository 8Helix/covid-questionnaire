import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import ka from '@vee-validate/i18n/dist/locale/ka.json ';

localize({ ka });

configure({
  generateMessage: localize('ka', {
    messages: {
      required: 'გთხოვთ შეავსოთ მოცემული ველი',
      email: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
      min: '{field}ს ველი უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან',
      max: '{field}ს ველი უნდა შედგებოდეს მაქსიმუმ 0:{max} სიმბოლოსგან',
      numeric: 'ველი უნდა შეიცავდეს მხოლოდ ციფრებს',
      anbani: '{field}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
      redberry:
        'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
    },
    names: {
      firstname: 'სახელი',
      lastname: 'გვარი',
      email: 'მეილი',
    },
  }),
});
