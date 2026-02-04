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

// type MyGrades = "1" | "2" | "3" | "4" | "5" | "6";

// interface rosterInterface {
//    [keyof: string]: string[]
// }

type rosterData = Record<string, string[]>;

class GradeSchool {
  private gradeList?: { [keyof: string]: string[] } = {};
  readonly publicGradeList = this.gradeList;

  // ** ROSTER CANNOT BE MODIFIED OUTSIDE OF MODULE **
  roster() {
    return this.publicGradeList;
  }
  add(name: string, grade: number) {
    if (!this.gradeList) {
      this.gradeList = { [grade]: [name] };
    } else {
      if (this.gradeList[grade]) {
        this.gradeList[grade] = [...this.gradeList[grade], name];
      } else {
        this.gradeList = { ...this.gradeList, [grade]: [name] };
      }
    }
    let sorted: { [keyof: string]: string[] } = {};
    for (let grade in this.gradeList) {
      const gradeSorted: string[] = this.gradeList[grade].sort();
      this.gradeList = { ...this.gradeList, [grade]: gradeSorted };
    }
  }
  grade(grade: number) {
    if (this.gradeList && this.gradeList[grade]) return this.gradeList[grade];
    return [];
  }
}
const set = new Set();

const school = new GradeSchool();
// console.log(school.roster());
// school.add("Franklin", 5);
// school.add("Bradley", 5);
// school.add("Jeff", 1);
school.add("Aimee", 2);
const roster = school.roster();
console.log(school.roster());

if (roster) {
  try {
    roster[2].push("Oops.");
  } catch {
    /* empty */
  }
}
console.log(school.roster());
// console.log(school.grade(5));
