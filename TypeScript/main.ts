interface Student {
    fitstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    fitstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    fitstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table: HTMLTableElement = document.createElement("table");
    const TableBody: HTMLTableSectionElement = document.createElement("tbody");
    const header: HTMLTableRowElement = document.createElement("tr");
    const firstName: HTMLTableHeaderCellElement = document.createElement("th");
    const location: HTMLTableHeaderCellElement = document.createElement("th");

    header.appendChild(firstName);
    header.appendChild(location);
    TableBody.appendChild(header);

    studentsList.forEach((student) => {
        const row: HTMLTableRowElement = document.createElement("tr");
        const firstNameCell: HTMLTableCellElement = document.createElement("td");
        const locationCell: HTMLTableCellElement = document.createElement("td");

        firstNameCell.textContent = student.fitstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        TableBody.appendChild(row);
    });
    table.appendChild(TableBody);
    document.body.appendChild(table);
});