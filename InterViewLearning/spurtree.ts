// implement functionality to declare type of input and response where 
// input has name,age(male,female),dob,password,id and 
// response has same field but with extra token and omit passworrd 
// where add some checks for password field like password must be minimum 8 character, may contain special, upper, lower case

type Gender = "male" | "female";

interface UserInput {
  name: string;
  age: number;
  gender: Gender;
  dob: string; // Can be Date type if needed
  password: string;
  id: string;
}

interface UserResponse extends Omit<UserInput, "password"> {
  token: number;
}

function isValidPassword(password: string): boolean {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return password.length >= minLength && hasUpperCase && hasLowerCase && hasSpecialChar;
}

function processUser(input: UserInput): UserResponse | string {
  if (!isValidPassword(input.password)) {
    return "Password must be at least 8 characters long and contain uppercase, lowercase, and a special character.";
  }

  return {
    name: input.name,
    age: input.age,
    gender: input.gender,
    dob: input.dob,
    id: input.id,
    token: Math.random()
  };
}

// Example usage
const user: UserInput = {
  name: "John Doe",
  age: 30,
  gender: "male",
  dob: "1994-05-15",
  password: "Secure@123",
  id: "user-123",
};

const result = processUser(user);
console.log(result);
