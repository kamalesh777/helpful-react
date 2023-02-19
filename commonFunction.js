// Merge Array of Object without duplicate data
export const useMergeObject = (original, newdata, selector = 'key') => {
  newdata.forEach((dat) => {
    const foundIndex = original.findIndex(
      (ori) => ori[selector] == dat[selector]
    );
    if (foundIndex >= 0) original.splice(foundIndex, 1, dat);
    else original.push(dat);
  });
  return original;
};

/* 
duplicate object will be delete  
if its true then the old object will show and if false then duplicate but the current data will show

use case: distinct(data, ['id'], false)
checking for id and data for all data and false used to show changes data or new data
*/
export const distinct = (arr, indexedKeys, isPrioritizeFormer = true) => {
  const lookup = new Map();
  const makeIndex = el => indexedKeys.reduce(
    (index, key) => `${index};;${el && el[key]}`, ''
  );
  arr.forEach(el => {
    const index = makeIndex(el);
    if (lookup.has(index) && isPrioritizeFormer) {
      return;
    }
    lookup.set(index, el);
  });

  return Array.from(lookup.values());
};


export const deleteDuplicateObj = (array) => Object.values(
  array.reduce((a, c) => {
    a[c?.id] = c;
    return a;
  }, {}));


//make file to base64
export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
