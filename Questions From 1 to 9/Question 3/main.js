const PersonName= "Muhammad Usman Khan"
console.log("lowercase:", PersonName.toLowerCase());
console.log("Uppercase:" , PersonName.toUpperCase());
console.log("titlecase:", PersonName.replace(/\bw/g,c => c.toUpperCase()));
