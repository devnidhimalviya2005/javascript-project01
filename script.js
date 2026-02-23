
        //Question number 01 " print Number 1 to 100"
        //  for(let i=0; i<= 100; i++){
        //    console.log(i);
        //  }

          //Question number 02 "print Even Number(1-50)"
         //  for(let i =1; i<=50; i++){
         //   if (i % 2===0){
          //      console.log(i);
         //   }
        //   }

           //Question number 03 "FizzBuzz(1-50)"
         //   for(let i=1; i<=50; i++){
           //     if(i %3 === 0 && i%5===0){
             //       console.log("FizzBuzz");

            //    }
            //    else if(i % 3===0){
             //       console.log("Fizzz");
            //    }
            //    else if (i %5===0){
              //      console.log("Buzz");

              //  }
              //  else{
             //       console.log(i);
            //    }
         //   }
            
         //Question number 04" prime number check"
       //   let num = 4
        //  let isprime = true;

       //   for(let i=2; i < num; i++){
         //   if(num % i ===0 ){
          //      isprime = false;
         //       break;
        //    }
        //  }
       //   if (isprime && num >1) {
       //     console.log("prime");
            
        //  }
       //   else{
       //     console.log("not prime")
       //   }

        //Question number 05"Factorial
        //  let num = 5;
        //  let fact = 1;

      //  for(let i = 1; i <= num; i++){
      //   fact *= i;
     //   }

      //   console.log(fact);

      //Question number 06 "Reverse a number"
      //   let num = 1234;
      //  let reverse = 0;

    //    while(num > 0){
      //  let digit = num % 10;
      //     reverse = reverse * 10 + digit;
      //   num = Math.floor(num / 10);
       //   }

        //  console.log(reverse);

        //Question number 07 "sum of Digits"
         //  let num = 123;
        //   let sum = 0;

       //   while(num > 0){
         //   sum += num % 10;
         //    num = Math.floor(num / 10);
         //    }

         // console.log(sum);
         
         //Question number 08 "count Digits"
         //   let num = 98765;
        //  let count = 0;

        //  while(num > 0){
        //    count++;
       //    num = Math.floor(num / 10);
      //  }

        //    console.log(count);

        //Question number 09 "palindrome number"
     //     let num = 121;
   //  let original = num;
  // let reverse = 0;

   //  while(num > 0){
  //   reverse = reverse * 10 + (num % 10);
  //    num = Math.floor(num / 10);
 //   }
   
 //   if(original === reverse){
 //   console.log("Palindrome");
  // }else{
  //   console.log("Not Palindrome");
 //  }

      //Question number 10 "multiplication Table"
    //  let num = 5;

   //   for(let i = 1; i <= 10; i++){
    //   console.log(num + " x " + i + " = " + (num*i));
    //   }

     //Question Number 11 "largest in  Array"
      //  let arr = [10, 45, 23, 89, 67];
      //   let largest = arr[0];

     //  for(let i = 1; i < arr.length; i++){
     //   if(arr[i] > largest){
     //    largest = arr[i];
    //  }
     //  }

      
     //Question Number 12 "count vowels"
      
    // let str = "Hello World";
   //   let count = 0;

  //   for(let i = 0; i < str.length; i++){
   //    let ch = str[i].toLowerCase();
    //   if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
    //     count++;
     //   }
      //   }

      //   console.log(count);

      //Question Number 13 "Armstrong"
    //  let num = 153;
    //   let original = num;
    //   let sum = 0;

  //      while(num > 0){
     //   let digit = num % 10;
    //     sum += digit ** 3;
     //   num = Math.floor(num / 10);
    //  }

     // if(sum === original){
    //  console.log("Armstrong");
   //  } else{
    //  console.log("Not Armstrong");
    // }


     //Question Number 14 "star pattern"
   //  let num = 153;
   //  let original = num;
  //   let sum = 0;

//    while(num > 0){
   //  let digit = num % 10;
   //  sum += digit ** 3;
   //  num = Math.floor(num / 10);
   //   }

  //  if(sum === original){
  //   console.log("Armstrong");
  //  }else{
  //    console.log("Not Armstrong");
 //   }

   // Question Number 15 "Number guess game "
      let secretNumber = 7;
     let guess;

   while(guess !== secretNumber){
     guess = Number(prompt("Guess the number:"));

     if(guess < secretNumber){
     console.log("Too Low");
    }
     else if(guess > secretNumber){
    console.log("Too High");
     }
    else{
    console.log("Correct! You guessed it.");
  }
}
