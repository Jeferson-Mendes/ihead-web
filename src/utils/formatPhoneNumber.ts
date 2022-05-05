
// export const normalizePhoneNumber = (value: string, previousValue?: string) => {
//     if (!value) return value;
//     const currentValue = value.replace(/[^\d]/g, '');
//     const cvLength = currentValue.length;
    
//     // if (!previousValue || value.length > previousValue.length) {
//       if (cvLength < 4) return currentValue;
//       if (cvLength < 7) return `(${currentValue.slice(0, 2)}) ${currentValue.slice(2)}`;
//       return `(${currentValue.slice(0, 2)}) ${currentValue.slice(2, 7)}-${currentValue.slice(7, 11)}`;
//     // }
//   };
  
// export  const validateInput = (value: string | any[]) => {
//     let error = ""
    
//     if (!value) error = "Required!"
//     else if (value.length !== 14) error = "Invalid phone format. ex: (555) 555-5555";
    
//     return error;
//   };

export const normalizePhoneNumber = (phone: any) => {
  const phoneString = String(phone);

  if (phoneString.length > 11) {
    return {
      value: phoneString,
      isError: true,
      textError: 'Número de telefone inválido',
    };
  } else {
    return {
      value: phoneString.replace(
        /^([0-9]{2})([0-9]{5})([0-9]{4})$/,
        '($1) $2-$3'
      ),
      isError: false,
      textError: '',
    };
  }
};
