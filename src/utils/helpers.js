export function validateEmail(input) {
    const re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    return re.test(String(input).toLowerCase());
  }
  
  