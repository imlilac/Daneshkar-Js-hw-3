// Exercsie 3

const coutLetters = () => {
   const sentence = prompt("Enter a sentence:");

   if (!sentence) {
      console.log("No sentence provided.");
      return;
   }

   const strLetters = sentence.split("");
   console.log(strLetters);

   const charCounts = strLetters.reduce((prev, cur) => {
      if (prev[cur]) {
         prev[cur]++;
      } else {
         prev[cur] = 1;
      }
      return prev;
   }, {});

   for (const [cur, count] of Object.entries(charCounts)) {
      console.log(`Letter '${cur}': ${count}`);
   }
};

coutLetters();
