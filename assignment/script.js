class Person {
    #name;
    #age;
    #occupation;
  
    constructor(name, age, occupation) {
      this.#name = name;
      this.#age = age;
      this.#occupation = occupation;
    }
  
    get name() {
      return this.#name;
    }
  
    get age() {
      return this.#age;
    }
  
    get occupation() {
      return this.#occupation;
    }
  }
  
  class Student extends Person {
    #major;
  
    constructor(name, age, occupation, major) {
      super(name, age, occupation);
      this.#major = major;
    }
  
    get major() {
      return this.#major;
    }
  }
  
  const student = new Student("GIovanny", 20, "Student", "Programming");
  
  const studentInfo = document.getElementById("student-info");
  
  studentInfo.innerHTML = `
    <h2>Student Information</h2>
    <ul>
      <li><strong>Name:</strong> ${student.name}</li>
      <li><strong>Age:</strong> ${student.age}</li>
      <li><strong>Occupation:</strong> ${student.occupation}</li>
      <li><strong>Major:</strong> ${student.major}</li>
    </ul>
  `;