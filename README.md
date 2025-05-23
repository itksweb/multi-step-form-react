# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [solution URL](https://github.com/itksweb/multi-step-form-react)
- Live Site URL: [live site URL](https://multi-step-form-react-green.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/)


### What I learned


```js
const nextStep = () => {
    if (step === 1) {
      if (userInfo.name && userInfo.phone && userInfo.email) {
        return setStep((prev) => prev + 1);
      }
      if (!userInfo.name) {
        return setInputErr((prev) => {
          return { ...prev, name: true };
        });
      }
      if (!userInfo.email || !emailRegex.test(userInfo.email)) {
        return setInputErr((prev) => {
          return { ...prev, email: true };
        });
      }
      if (!userInfo.phone) {
        return setInputErr((prev) => {
          return { ...prev, phone: true };
        });
      }
    }
    if (step === 2) {
      if (plan.name) {
        return setStep((prev) => prev + 1);
      }
      return setInputErr((prev) => {
        return { ...prev, plan: true };
      });
    }
    if (step === 3) {
      return setStep((prev) => prev + 1);
    }
    if (step === 4) {
      if (userInfo.name && userInfo.phone && userInfo.email && plan.name) {
        return setConfirmed(true);
      }
    }
  };
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author

- WhatsApp - [here](https://wa.me/2348060719978)
- LinkedIn - [here](https://www.linkedin.com/in/kingsleyikpefan)


