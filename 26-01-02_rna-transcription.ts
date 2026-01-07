// Your task is to determine the RNA complement of a given DNA sequence.

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G), and thymine (T).

// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G), and uracil (U).

// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U

function toRna(dna: string): string {
  type DNA = "G" | "C" | "T" | "A";
  type RNA = "C" | "G" | "A" | "U";
  const transcriptor: Record<DNA, RNA> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  let rna: string = "";
  for (const nucleotide of dna) {
    if (nucleotide in transcriptor) {
      rna = rna + transcriptor[nucleotide];
    } else {
      return "Invalid input DNA.";
    }
  }
  return rna;
}

console.log(toRna("ACGTGGTCTTAA"));
console.log(toRna("ACGTXXXCTTAA"));
