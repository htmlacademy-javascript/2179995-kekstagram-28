// Функция для проверки длины строки.

const isLessOrEqual = (string, length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};
isLessOrEqual('проверяемая строка', 20); // true
isLessOrEqual('проверяемая строка', 18); // true
isLessOrEqual('проверяемая строка', 10); // false

// Палиндром

const isPalidrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  console.log(reverseString);
  return tempString === reverseString;
};

isPalidrom('довод'); // довод
isPalidrom('Лёша на полке клопа нашёл'); // лёшанаполкеклопанашёл

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры
 от 0 до 9 и возвращает их в виде целого положительного числа.*/

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год'); // 2023
extractNumber('1 кефир, 0.5 батона'); // 105

// С последней задачей не справилась, только с помощью ретро

/* Функция, которая принимает три параметра:
 исходную строку, минимальную длину и строку с добавочными символами —
 и возвращает исходную строку, дополненную указанными символами до заданной длины. */

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  console.log('actualPad', actualPad);
  if (actualPad <= 0) {
    return string;
  }

  const tempPad = pad.slice(0, actualPad % pad.length);
  console.log('tempPad', tempPad);

  const tempRepeat = pad.repeat(actualPad / pad.length);
  console.log('actualPad / pad.length', actualPad / pad.length);
  console.log('tempRepeat', tempRepeat);

  return tempPad + tempRepeat + string;
};
myPadStart('1', 4, '0');
// actualPad 3
// tempPad
// actualPad / pad.length 3
// tempRepeat 000
// '0001'

myPadStart('qwerty', 4, '0');
// actualPad -2
// 'qwerty'

myPadStart('q', 4, 'we');
// actualPad 3
// tempPad w
// actualPad / pad.length 1.5
// tempRepeat we
// 'wweq'
