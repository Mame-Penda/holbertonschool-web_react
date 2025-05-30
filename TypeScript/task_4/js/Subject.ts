namespace Subjects {
    export class Subject {
        public teacher!: Teacher;

        public setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        };
    };
};