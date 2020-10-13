import {
   checkType,
   nonEmptyString,
   numberInRange
} from "./validators.js";

export const user = {
   firstName: "test",
   lastName: "test",
   age: 78,
   phone: "212412342134",
};

export const userScheme = {
   firstName: [{
         validator: {
            params: ["string"],
            rule: checkType,
         },
         validationMessage: "First Name not string",
      },
      {
         validator: {
            params: [],
            rule: nonEmptyString,
         },
         validationMessage: "First Name is empty",
      },
   ],
   lastName: [{
         validator: {
            params: ["string"],
            rule: checkType,
         },
         validationMessage: "Last Name not string",
      },
      {
         validator: {
            params: [],
            rule: nonEmptyString,
         },
         validationMessage: "Last Name is empty",
      },
   ],
   age: [{
         validator: {
            params: ["number"],
            rule: checkType,
         },
         validationMessage: "Age not number",
      },
      {
         validator: {
            params: [10, 56],
            rule: numberInRange,
         },
         validationMessage: `Age not in range between 10 and 56`,
      },
   ],
   phone: [{
      validator: {
         params: ["string"],
         rule: checkType,
      },
      validationMessage: "Phone not string",
   }, ],
};

user.firstName = "";
user.age = 100;