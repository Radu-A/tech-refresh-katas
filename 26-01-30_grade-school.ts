// Given students' names along with the grade they are in, create a roster for the school.

// In the end, you should be able to:

// Add a student's name to the roster for a grade:
// "Add Jim to grade 2."
// "OK."
// Get a list of all students enrolled in a grade:
// "Which students are in grade 2?"
// "We've only got Jim right now."
// Get a sorted list of all students in all grades. Grades should be sorted as 1, 2, 3, etc., and students within a grade should be sorted alphabetically by name.
// "Who is enrolled in school right now?"
// "Let me think. We have Anna, Barb, and Charlie in grade 1, Alex, Peter, and Zoe in grade 2, and Jim in grade 5. So the answer is: Anna, Barb, Charlie, Alex, Peter, Zoe, and Jim."
// Note that all our students only have one name (it's a small town, what do you want?), and each student cannot be added more than once to a grade or the roster. If a test attempts to add the same student more than once, your implementation should indicate that this is incorrect.

type MyGrades = '1' | '2' | '3' | '4' | '5' | '6'

// interface rosterInterface {
//    [keyof: MyGrades]: string[]
// }

type rosterData = Record<string, string[]>

class GradeSchool {
  students: rosterData = {};

  roster() {
    // const sorted = this.students.sort();
    // return sorted;
  }
  add(name: string, grade: number) {
    
  }

  grade() {}
}
const set = new Set();

const school = new GradeSchool();
school.add("Franklin", 5);
school.add("Bradley", 5);
school.add("Jeff", 1);
console.log(school.roster());
