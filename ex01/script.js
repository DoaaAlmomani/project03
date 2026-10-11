function calculateGrade(score) {
  if (typeof score !== "number" || Number.isNaN(score)) {
    return "Invalid";
  }
  if (score < 0 || score > 100) {
    return "Invalid";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function checkAccess(age, hasTicket) {
  if (typeof age !== "number" || typeof hasTicket !== "boolean") {
    return false;
  }
  return age >= 18 && hasTicket === true;
}

// Tests
console.log("Grade 100 is : "+calculateGrade(100));   // A
console.log("Grade 90 is : "+calculateGrade(90));    // A
console.log("Grade 89 is : "+calculateGrade(89));    // B
console.log("Grade 0 is : "+calculateGrade(0));     // F
console.log("Grade -5 is : "+calculateGrade(-5));    // Invalid
console.log("Grade 101 is : "+calculateGrade(101));   // Invalid
console.log("Grade abc is : +"+calculateGrade("abc")); // Invalid

console.log(checkAccess(20, true));   // true
console.log(checkAccess(17, true));   // false
console.log(checkAccess(20, false));  // false
console.log(checkAccess("20", true)); // false
