interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows for additional properties
};

const teacher3: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: false,
    location: "Boston",
    contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

const director1: Directors = {
    firstName: "Bob",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "Chicago",
    numberOfReports: 17,
};

console.log(director1);

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

printTeacher("John", "Doe");

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
};

interface StudentConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
};

class StudentClass implements StudentClassInterface {
    constructor (
        public firstName: string,
        public lastName: string
    ){};
    workOnHomework(): string {
        return "Currently working";
    };

    displayName(): string {
        return this.firstName;
    };
}

const StudentConstructor: StudentConstructorInterface = StudentClass;